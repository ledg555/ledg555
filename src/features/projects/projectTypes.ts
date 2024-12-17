import { Skill } from "../skills/skillTypes";

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

interface Image {
  imgUrl: string;
  alt: string;
}
