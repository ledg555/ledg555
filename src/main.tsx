import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import Router from "./router/Router";
import { PrimeReactProvider } from "primereact/api";
import "./i18n";
import "./index.css";
import { twMerge } from 'tailwind-merge';
import "primeicons/primeicons.css";
// import Tailwind from "primereact/passthrough/tailwind";
import {customPT} from "./customPT"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="loading">
      <PrimeReactProvider value={{ unstyled: true, pt: customPT, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
        <Router />
      </PrimeReactProvider>
    </Suspense>
  </StrictMode>
);
