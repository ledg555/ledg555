import { IconType } from "react-icons";
import { BiGitBranch, BiLogoLinkedin } from "react-icons/bi";
import {
  HiOutlineDocumentArrowDown,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";

export const speedDialContactIcons: Record<string, IconType> = {
  resume: HiOutlineDocumentArrowDown,
  email: HiOutlineEnvelope,
  phone: HiOutlinePhone,
  github: BiGitBranch,
  linkedin: BiLogoLinkedin,
};
