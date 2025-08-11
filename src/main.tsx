import { createRoot } from "react-dom/client";
import Router from "./router/Router";
import { PrimeReactProvider } from "primereact/api";
import "./i18n";
import "./index.css";
import { twMerge } from "tailwind-merge";
import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";
import StarField from "./components/StarField";
// import { customPT } from "./pt";

createRoot(document.getElementById("root")!).render(
  // <Suspense fallback="loading">
  <PrimeReactProvider
    value={{
      unstyled: true,
      pt: Tailwind,
      ptOptions: {
        mergeSections: true,
        mergeProps: true,
        classNameMergeFunction: twMerge,
      },
    }}
  >
    <StarField />
    <Router />
  </PrimeReactProvider>
  // </Suspense>
);
