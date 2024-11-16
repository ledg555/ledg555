import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import SkillSetCard from "./SkillSetCard";

export default function Main() {
  const { t } = useTranslation(["resumeAbout", "resumeProjects", "resumeJobs", "resumeSkills"]);
  return (
    <Accordion className="max-w-full">
      <AccordionTab header={t("title", { ns: "resumeAbout" })}>
        <p>{t("shortDescription", { ns: "resumeAbout" })}</p>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "resumeProjects" })}>
        {t("projects", { ns: "resumeProjects" }).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "resumeJobs" })}>
        {t("projects", { ns: "resumeProjects" }).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "resumeSkills" })}>
        {t("skillSets", { ns: "resumeSkills" }).map((skillSet) => (
          <SkillSetCard key={skillSet.type} skillSet={skillSet} />
        ))}
      </AccordionTab>
    </Accordion>
  );
}
