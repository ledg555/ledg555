import { useRouteError } from "react-router";

export function NotFound() {
  const error = useRouteError();
  console.log(error);
  return <h1 className="bg-white text-black">Página no encontrada!!!!</h1>;
}
