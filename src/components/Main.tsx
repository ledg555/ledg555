import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";

export default function Main() {
  const {t} = useTranslation();
  return (
    <Accordion>
      <AccordionTab header="hola">
        <p>Adiós</p>
      </AccordionTab>
    </Accordion>
  );
}
