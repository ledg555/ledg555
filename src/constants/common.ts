import { MdOutlineAnchor } from "react-icons/md";
import { LuOrbit } from "react-icons/lu";
import { LuTerminal } from "react-icons/lu";
import {
  HiOutlineBolt,
  HiOutlineDocumentArrowDown,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUsers,
} from "react-icons/hi2";
import { BiGitBranch, BiLogoLinkedin } from "react-icons/bi";

export const common = {
  header: {
    navlinks: [],
    quickActions: [
      {
        key: "resume",
        action: (lang: string) => `/Luis-Delgado-${lang}.pdf`,
        hasToast: false,
        icon: HiOutlineDocumentArrowDown,
      },
      {
        key: "email",
        action: "dev.ledg5555@gmail.com",
        hasToast: true,
        icon: HiOutlineEnvelope,
      },
      {
        key: "phone",
        action: "+527772688189",
        hasToast: false,
        icon: HiOutlinePhone,
      },
      {
        key: "github",
        action: "https://github.com/ledg555",
        hasToast: false,
        icon: BiGitBranch,
      },
      {
        key: "linkedin",
        action: "https://linkedin.com/in/ledg555",
        hasToast: false,
        icon: BiLogoLinkedin,
      },
    ],
  },
};

export const navLinks = [
  {
    translationKey: "home",
    url: "/",
    icon: MdOutlineAnchor,
  },
  {
    translationKey: "projects",
    url: "/projects",
    icon: LuTerminal,
  },
  {
    translationKey: "experience",
    url: "/experience",
    icon: LuOrbit,
  },
  {
    translationKey: "skills",
    url: "/skills",
    icon: HiOutlineBolt,
  },
  {
    translationKey: "contact",
    url: "/contact",
    icon: HiOutlineUsers,
  },
];
