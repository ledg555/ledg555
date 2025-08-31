import "i18next";
import { Job } from "./features/jobs/jobsTypes";
import { Project } from "./features/projects/projectTypes";
import { SkillSet } from "./features/skills/skillTypes";

import about from "../public/locales/en/about.json";
import achievements from "../public/locales/en/achievements.json";
import aptitudes from "../public/locales/en/aptitudes.json";
import jobs from "../public/locales/en/jobs.json";
import projects from "../public/locales/en/projects.json";
import skills from "../public/locales/en/skills.json";
import ui from "../public/locales/en/ui.json";

declare module "i18next" {
  // interface CustomTypeOptions {
  //   resources: {
  //     about: typeof about;
  //     achievements: typeof achievements;
  //     aptitudes: typeof aptitudes;
  //     jobs: typeof jobs & { jobs: Job[] };
  //     projects: typeof projects & { projects: Project[] };
  //     skills: typeof skills & { skills: SkillSet[] };
  //     ui: typeof ui;
  //   };
  // }
}
