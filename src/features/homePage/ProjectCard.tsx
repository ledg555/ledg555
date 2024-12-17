import { Card } from "primereact/card";
import { Project } from "../projects/projectTypes";
import ProjectModal from "../projects/ProjectModal";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Card
        onClick={() => setVisible(true)}
        title={project.title}
        header={
          <ProjectCardHeader alt={project.title} imgUrl={project.images[0].imgUrl} />
        }
        className="bg-yellow-100 rounded-3xl"
      >
        <p>{project.description}</p>
      </Card>
      <ProjectModal
        project={project}
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      />
    </>
  );
}

function ProjectCardHeader({ alt, imgUrl }: ProjectCardHeaderProps) {
  return <img src={imgUrl} alt={alt} />;
}

interface ProjectCardHeaderProps {
  alt: string;
  imgUrl: string;
}
