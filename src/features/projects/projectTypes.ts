import { Skill } from "../skills/skillTypes";
import {Image} from "../../types/imageType";

export interface Project {
  title: string;
  description: string;
  technologies: Technologies;
  website: string;
  images: Image[];
}

interface Technologies {
  title: string;
  techs: Skill[];
}
