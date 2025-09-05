import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header2";

export default function RootLayout() {
  return (
    <div className="mx-auto max-w-3xl relative z-10">
      <Header />
      <Outlet />
    </div>
  );
}
