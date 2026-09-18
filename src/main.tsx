import { createRoot } from "react-dom/client";
import Router from "./router";
import "./i18n";
import "./index.css";

createRoot(document.getElementById("root")!).render(<Router />);
