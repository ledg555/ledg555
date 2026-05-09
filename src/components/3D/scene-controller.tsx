import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { WarpDriveStars } from "./warp-drive-stars";

export const SceneController = () => {
  return (
    <>
      {/* Fog creates depth perception. Matches your dark background color */}
      <fog attach="fog" args={["#080C16", 20, 90]} />

      {/* Global low-intensity light to illuminate future ship interior slightly */}
      <ambientLight intensity={0.15} />

      {/* Main directional light, simulating a nearby star or nebula */}
      <directionalLight
        position={[15, 10, -20]}
        intensity={2}
        color="#00E5FF"
      />

      {/* Suspense is required for any async 3D loading (like models or textures later) */}
      <Suspense fallback={null}>
        <WarpDriveStars />
      </Suspense>

      {/* OrbitControls temporarily added for development.
          Allows you to drag and look around the starfield.
          We will restrict or remove this once the UI is in place. */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};
