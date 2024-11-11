import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { SelectButton } from 'primereact/selectbutton';
import { useState } from "react";

export default function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  const options = ['En', 'Es'];

  return (
    <>
      <Button
        className="absolute -right-[70vw] bottom-20"
        text
        raised
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
      >
        <SelectButton
          value={"value"}
          onChange={(e) => setValue(e.value)}
          options={options}
        />
      </Sidebar>
    </>
  );
}