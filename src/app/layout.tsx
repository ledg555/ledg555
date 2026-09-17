import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import { Header } from "../components/Header/Header";
import { SceneController } from "../components/3D/scene-controller";

export function RootLayout() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ship-hull-white dark:bg-ship-hull-dark">
      {/* Capa inferior: Entorno 3D */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <SceneController />
        </Canvas>
      </div>

      {/* Capa superior: Interfaz 2D (HUD Glassmorphic) */}
      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col">
        {/* pointer-events-auto reactiva el clic en el header */}
        <div className="pointer-events-auto">
          <Header />
        </div>

        <main className="flex-1 w-full p-8 pointer-events-auto overflow-y-auto custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
