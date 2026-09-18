import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Creates a circular gradient texture for round star rendering.
 * Generated programmatically via a canvas to avoid loading an external image.
 */
function createStarTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Soft radial gradient: bright center fading to transparent edge
  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
  gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.15)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/** Max delta (seconds) per frame — prevents the "tab-switch wave" effect. */
const MAX_DELTA = 0.1;

export function WarpDriveStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const starCount = 2500;
  const warpSpeed = 15;

  // Circular star texture (memoised once)
  const starTexture = useMemo(() => createStarTexture(), []);

  const [positions, colors, opacityBases] = useMemo(() => {
    const positionsArray = new Float32Array(starCount * 3);
    const colorsArray = new Float32Array(starCount * 3);
    const opacityBasesArray = new Float32Array(starCount);
    const colorManager = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      // Cylinder distribution: scatter stars around the user, keeping the center mostly clear
      const radius = 5 + Math.random() * 45;
      const theta = 2 * Math.PI * Math.random();

      positionsArray[i * 3] = radius * Math.cos(theta); // x
      positionsArray[i * 3 + 1] = radius * Math.sin(theta); // y
      positionsArray[i * 3 + 2] = -Math.random() * 100; // z (depth, starting far away)

      // Color distribution based on your sci-fi palette
      const colorMix = Math.random();
      if (colorMix > 0.85) {
        colorManager.setHex(0x00e5ff); // Cyan
      } else if (colorMix > 0.7) {
        colorManager.setHex(0xff1744); // Red Alert tones
      } else {
        colorManager.setHex(0xffffff); // White
      }

      colorManager.toArray(colorsArray, i * 3);

      // Base opacity for twinkling — varies per star
      opacityBasesArray[i] = 0.55 + Math.random() * 0.45;
    }

    return [positionsArray, colorsArray, opacityBasesArray];
  }, [starCount]);

  // Per-star opacity attribute for twinkling
  const opacities = useMemo(() => {
    return new Float32Array(opacityBases);
  }, [opacityBases]);

  useFrame((_state, rawDelta) => {
    if (!pointsRef.current) return;

    // Clamp delta to prevent massive jumps when returning from a background tab
    const delta = Math.min(rawDelta, MAX_DELTA);

    const positionsAttribute = pointsRef.current.geometry.attributes.position;
    const currentPositions = positionsAttribute.array as Float32Array;

    // Twinkle opacity attribute
    const opacityAttr = pointsRef.current.geometry.attributes
      .opacity as THREE.BufferAttribute | undefined;

    for (let i = 0; i < starCount; i++) {
      // Move stars forward on the Z axis
      currentPositions[i * 3 + 2] += warpSpeed * delta;

      // If a star passes behind the camera, reset it far into the background
      if (currentPositions[i * 3 + 2] > 5) {
        currentPositions[i * 3 + 2] = -100;
      }

      // Subtle twinkling: random walk around base opacity
      if (opacityAttr) {
        const arr = opacityAttr.array as Float32Array;
        arr[i] += (Math.random() - 0.5) * 0.06;
        arr[i] = Math.max(0.2, Math.min(1, arr[i]));
      }
    }

    positionsAttribute.needsUpdate = true;
    if (opacityAttr) opacityAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-opacity"
          args={[opacities, 1]}
        />
      </bufferGeometry>
      {/* Circular map + AdditiveBlending = round, glowing stars */}
      <pointsMaterial
        size={0.18}
        map={starTexture}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        alphaTest={0.01}
      />
    </points>
  );
}
