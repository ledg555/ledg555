import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Project } from "../projects/projectTypes";
import { ImageInterface } from "../../types/imageType";
import { Galleria } from "primereact/galleria";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <Card
        title={project.title}
        header={
          <ProjectCardHeader
            images={project.images}
          />
        }
        className="bg-yellow-100 rounded-3xl"
      >
        <p>{project.description}</p>
      </Card>
    </>
  );
}

function ProjectCardHeader({ images }: ProjectCardHeaderProps) {
  return (<Galleria
        value={[1,2,3].map((_n) => images[0])}
        item={projectModalGalleriaImage}
        numVisible={5}
        circular
        style={{ maxWidth: "640px" }}
        showItemNavigators
        showItemNavigatorsOnHover
        showIndicators
        showThumbnails={false}
      />);
}

function projectModalGalleriaImage(image: ImageInterface) {
  return <Image src={image.imgUrl} alt={image.alt} /* width="250" */ preview />;
}

interface ProjectCardHeaderProps {
  images: ImageInterface[],
}
