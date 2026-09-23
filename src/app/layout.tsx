import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import { Header } from "../components/header/header-copy";
import { SceneController } from "../components/3D/scene-controller";

export function RootLayout() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Layer 0: Nebula background image (visible through the transparent Canvas) */}
      {/* radial-gradient(ellipse at center, #1e3a8a 0%, #000 0%) not working */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "url('/bg .jpg') center/cover no-repeat" /* TODO: we'll fix this later */,
        }}
      />

      {/* Layer 1: 3D star field (transparent background lets nebula show through) */}
      <div className="absolute inset-0 z-1">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
        >
          <SceneController />
        </Canvas>
      </div>

      {/* Layer 2: 2.5D interface */}
      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col">
        {/* pointer-events-auto reactiva el clic en el header */}
        <div className="pointer-events-auto">
          <Header />
        </div>

        <main className="flex-1 w-full p-8 pt-22 pointer-events-auto overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
