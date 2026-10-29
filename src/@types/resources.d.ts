import about from "../../public/locales/es/about.json";

export interface Resources {
  // We'll perhaps need to define the signature of all lang namespaces for type safety
  about: typeof about;
}
