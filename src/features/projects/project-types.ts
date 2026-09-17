import { Skill } from "../skills/skill-types";
import { ImageInterface } from "../../types/imageType";

export interface Project {
  title: string;
  description: string;
  technologies: Technologies;
  website: string;
  images: ImageInterface[];
}

interface Technologies {
  title: string;
  techs: Skill[];
}
