import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const WarpDriveStars = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const starCount = 2500;
  const warpSpeed = 15; // Unidades por segundo

  // useMemo ensures we only calculate these initial positions once
  const [positions, colors] = useMemo(() => {
    const positionsArray = new Float32Array(starCount * 3);
    const colorsArray = new Float32Array(starCount * 3);
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
    }

    return [positionsArray, colorsArray];
  }, [starCount]);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;

    // Direct mutation of the geometry array is mandatory for 60fps performance in Three.js
    const positionsAttribute = pointsRef.current.geometry.attributes.position;
    const currentPositions = positionsAttribute.array as Float32Array;

    for (let i = 0; i < starCount; i++) {
      // Move stars forward on the Z axis
      currentPositions[i * 3 + 2] += warpSpeed * delta;

      // If a star passes behind the camera, reset it far into the background
      if (currentPositions[i * 3 + 2] > 5) {
        currentPositions[i * 3 + 2] = -100;
      }
    }

    // Tell Three.js that the array changed so it re-renders the buffer
    positionsAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      {/* AdditiveBlending makes colors brighter when stars overlap (bloom effect) */}
      <pointsMaterial
        size={0.18}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
