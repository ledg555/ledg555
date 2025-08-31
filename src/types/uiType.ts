export interface UIInterface {
  navigationData: NavItem[];
  contactData: ContactDatum[];
}

export interface ContactDatum {
  key: string;
  label: string;
  toast: boolean | string;
  url: boolean | string;
}

export interface NavItem {
  key: string;
  label: string;
  url: string;
  icon: string;
}
