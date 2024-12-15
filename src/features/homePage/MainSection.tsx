import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import SkillSetCard from "./SkillSetCard";
import JobCard from "./JobCard";
import { Project } from "../projects/projectTypes";
import { Job } from "../jobs/jobsTypes";
import { SkillSet } from "../skills/skillTypes";

export default function MainSection() {
  const { t } = useTranslation(["resumeAbout", "resumeProjects", "resumeJobs", "resumeSkills"]);
  return (
    <Accordion className="max-w-full">
      <AccordionTab header={t("title", { ns: "resumeAbout" })}>
        <p>{t("shortDescription", { ns: "resumeAbout" })}</p>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "resumeProjects" })}>
        <div className="grid grid-cols-2 gap-4">
        {t("projects", { ns: "resumeProjects" }).map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        </div>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "resumeJobs" })}>
        <div className="grid grid-cols-3 gap-4">
        {t("jobs", { ns: "resumeJobs" }).map((job: Job) => (
          <JobCard key={job.key} job={job} />
        ))}
        </div>
      </AccordionTab>

      <AccordionTab header={t("title", { ns: "resumeSkills" })}>
        {t("skillSets", { ns: "resumeSkills" }).map((skillSet: SkillSet) => (
          <SkillSetCard key={skillSet.type} skillSet={skillSet} />
        ))}
      </AccordionTab>
    </Accordion>
  );
}
