import { Skill } from "../../types";


export interface Project {
    title: string;
    description: string;
    technologies: Skill[],
    website: string;
    imgUrl: string;
  };