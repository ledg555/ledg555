import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/Router";
import "./i18n";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "./index.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="loading">
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <Router />
      </PrimeReactProvider>
    </Suspense>
  </StrictMode>
);
