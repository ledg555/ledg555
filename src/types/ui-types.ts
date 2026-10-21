export interface UIInterface {
  navigationData: Record<string, string>;
  contactData: ContactDatum[];
}

export interface ContactDatum {
  key: string;
  label: string;
  toast: boolean | string;
  url: boolean | string;
}
