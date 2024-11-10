import { SpeedDial } from "primereact/speeddial";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";

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
  const [sidebar, setSidebar] = useState(false);
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
      <Button
        className="absolute -right-[70vw] bottom-20"
        text raised
        icon="pi pi-bars"
        rounded
        onClick={() => setSidebar(true)}
      />
      <Sidebar
        visible={sidebar}
        position="right"
        onHide={() => {
          setSidebar(false);
        }}
      ></Sidebar>
    </Card>
  );
}
