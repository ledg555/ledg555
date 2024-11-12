import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation(["resumeAbout", "resumeProjects", "resumeJobs"]);
  return (
    <Accordion>
      <AccordionTab header={t("title", {ns: "resumeAbout"})}>
        <p>{t("shortDescription", {ns: "resumeAbout"})}</p>
      </AccordionTab>
    </Accordion>
  );
}
