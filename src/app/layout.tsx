import { Outlet } from "react-router";
import Header from "../components/Header/Header2";

export function RootLayout() {
  return (
    <div className="mx-auto max-w-3xl relative z-10">
      <Header />
      <main className="pt-24 w-full">
        <Outlet />
      </main>
    </div>
  );
}
