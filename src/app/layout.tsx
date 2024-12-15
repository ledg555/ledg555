import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="mx-auto max-w-3xl">
      <Header></Header>
      <Outlet />
    </div>
  );
}
