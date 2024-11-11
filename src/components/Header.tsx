import NavMenu from "./ui/NavMenu";
import { SpeedDial } from "primereact/speeddial";
import { Card } from "primereact/card";

const contactItems = [
  {
    label: "Copiar email",
    icon: "pi pi-envelope",
  },
  {
    label: "Copiar email",
    icon: "pi pi-envelope",
  },
  {
    label: "Copiar email",
    icon: "pi pi-envelope",
  },
  {
    label: "Copiar email",
    icon: "pi pi-envelope",
  },
];

export default function Header() {
  return (
    <Card className="relative max-h-16 rounded-3xl mt-2">
      <SpeedDial
        model={contactItems}
        radius={100}
        type="quarter-circle"
        direction="down-right"
        className="left-1 top-0"
      />
      <img src="/Luis Delgado.jpg" className="relative w-12 rounded-full mx-auto bottom-8" />
      <NavMenu></NavMenu>
    </Card>
  );
}
