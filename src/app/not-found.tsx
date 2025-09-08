import { useRouteError } from "react-router";

export default function NotFound() {
  const error = useRouteError();
  console.log(error);
  return <h1>Página no encontrada</h1>;
}
