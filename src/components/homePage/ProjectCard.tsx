import { Card } from "primereact/card";


export default function ProjectCard({project}: ProjectCardProps) {
  return(
<Card title={project.title}>
    <img className="w-full" src={project.imgUrl} alt={project.title} />
    <p>{project.description}</p>
</Card>
  )
}

interface ProjectCardProps {
  project: {
    title: string,
    description: string,
    website: string,
    imgUrl: string,
  }
}