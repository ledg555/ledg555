import { Card } from "primereact/card";
import { SpeedDial } from "primereact/speeddial";
import NavMenu from "./NavMenu";
import { useTranslation } from "react-i18next";
import { BiLogoWhatsapp, BiGitBranch, BiLogoLinkedin} from "react-icons/bi";
import { HiOutlineEnvelope, HiOutlineDocumentText } from "react-icons/hi2";

const contactItems = [
  {
    label: "Copiar email",
    icon: BiLogoLinkedin,
  },
  {
    label: "Copiar email",
    icon: BiGitBranch,
  },
  {
    label: "Copiar email",
    icon: BiLogoWhatsapp,
  },
  {
    label: "Copiar email",
    icon: HiOutlineEnvelope,
  },
  {
    label: "Copiar email",
    icon: HiOutlineDocumentText,
  },
];

export default function Header() {
  const { t } = useTranslation(["ui"]);

  return (
    <Card className="relative max-h-16 rounded-3xl mt-2">
      <SpeedDial
        model={contactItems}
        radius={130}
        type="quarter-circle"
        direction="down-right"
        className="left-1 top-0"
      />
      <img src="/Luis Delgado.webp" className="relative w-12 rounded-full mx-auto bottom-8" />
      <NavMenu></NavMenu>
    </Card>
  );
}
