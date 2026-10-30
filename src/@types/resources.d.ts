import about from "../../public/locales/es/about.json";
import common from "../../public/locales/es/common.json";

export interface Resources {
  // We'll perhaps need to define the signature of all lang namespaces for type safety
  common: typeof common;
  about: typeof about;
}
