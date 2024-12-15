import { Card } from "primereact/card";
import { Project } from "../../types";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      title={project.title}
      header={<CardHeader alt={project.title} imgUrl={project.imgUrl} />}
      className="bg-yellow-100 rounded-3xl"
    >
      <p>{project.description}</p>
    </Card>
  );
}

function CardHeader({ alt, imgUrl }: CardHeaderProps) {
  return <img src={imgUrl} alt={alt} />;
}

interface ProjectCardProps {
  project: Project,
}

interface CardHeaderProps {
  alt: string;
  imgUrl: string;
}
