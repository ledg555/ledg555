import { MdOutlineAnchor } from "react-icons/md";
import { LuOrbit } from "react-icons/lu";
import { LuTerminal } from "react-icons/lu";
import { HiOutlineBolt, HiOutlineUsers } from "react-icons/hi2";

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
