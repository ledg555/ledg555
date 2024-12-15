export interface Project {
    title: string;
    description: string;
    website: string;
    imgUrl: string;
  };

export interface Job {
  key: string;
  role: string;
  company: string;
  date: string;
  location: string;
  url: string;
  imgUrl: string;
  description: string[];
}

export interface SkillSet {
  type: string,
  list: Skill[],
}

interface Skill {
  name: string,
  imgUrl: string,
}