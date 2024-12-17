import { Dialog } from "primereact/dialog";
import { Project } from "./projectTypes";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";

interface ProjectModalProps {
  project: Project;
  visible: boolean;
  onHide: () => void;
}

export default function ProjectModal({
  project,
  visible,
  onHide,
}: ProjectModalProps) {
  return (
    <Dialog
      draggable={false}
      blockScroll={true}
      visible={visible}
      onHide={onHide}
      dismissableMask={true}
    >
      <ProjectModalContent project={project} />
    </Dialog>
  );
}

interface ProjectModalContentProps {
  project: Project;
}

function ProjectModalContent({ project }: ProjectModalContentProps) {
  return (
    <article>
      <ProjectGalleria project={project}/>
      <section>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <h4>{project.technologies.title}</h4>
        <p>
          {/* {project.technologies.techs.map((tech) => (
            <img src={tech.imgUrl} alt={tech.name} className="w-12" />
          ))} */}
        </p>
      </section>
    </article>
  );
}

interface ProjectGalleriaProps {
  project: Project,
}

function ProjectGalleria({project}: ProjectGalleriaProps) {
  return (
    <Galleria
      value={[1,2,3].map((_n) => ({imgUrl: project.images[0].imgUrl, alt: ""}))}
      item={projectModalGalleriaImage}
      numVisible={5}
      circular
      style={{ maxWidth: "640px" }}
      showItemNavigators
      showItemNavigatorsOnHover
      showIndicators
      showThumbnails={false}
    />
  );
}

function projectModalGalleriaImage(imgUrl: string) {
  return <Image src={imgUrl} /* width="250" */ preview />;
}
