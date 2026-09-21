import { Suspense } from "react";
import { WarpDriveStars } from "./warp-drive-stars";

export function SceneController() {
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
    </>
  );
}
