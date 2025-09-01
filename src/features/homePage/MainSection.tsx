import { Accordion, AccordionTab } from "primereact/accordion";
import ProjectCard from "./ProjectCard";
import JobCard from "./JobCard";
import SkillSetCard from "./SkillSetCard";
import { useTranslation } from "react-i18next";
import { Project } from "../projects/projectTypes";
import { Job } from "../jobs/jobsTypes";
import { SkillSet } from "../skills/skillTypes";

export default function MainSection() {
  const { t } = useTranslation(["about", "projects", "jobs", "skills"]);
  return (
    <Accordion className="max-w-full">
      <AccordionTab header={t("title", { ns: "about" })}>
        <p>{t("shortDescription", { ns: "about" })}</p>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "projects" })}>
        <div className="grid grid-cols-2 gap-4">
          {t("projects", { ns: "projects" }).map((project: Project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "jobs" })}>
        <div className="grid grid-cols-3 gap-4">
          {t("jobs", { ns: "jobs" }).map((job: Job) => (
            <JobCard key={job.key} job={job} />
          ))}
        </div>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "skills" })}>
        {t("skillSets", { ns: "skills" }).map((skillSet: SkillSet) => (
          <SkillSetCard key={skillSet.type} skillSet={skillSet} />
        ))}
      </AccordionTab>
    </Accordion>
  );
}
