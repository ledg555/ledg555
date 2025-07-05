import { Dialog } from "primereact/dialog";
import { Job } from "./jobsTypes";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface JobModalProps {
  children: React.ReactNode;
  job: Job;
  visible: boolean;
  onHide: () => void;
}

export default function JobModal({
  job,
  visible,
  onHide,
  children,
}: JobModalProps) {
  return (
    <Dialog
      draggable={false}
      blockScroll={true}
      header={<JobModalHeader jobHeader={job} />}
      visible={visible}
      onHide={onHide}
      dismissableMask={true}
    >
      {children}
    </Dialog>
  );
}

interface JobModalHeader {
  jobHeader: Omit<Job, "key" | "description">;
}

function JobModalHeader({ jobHeader }: JobModalHeader) {
  return (
    <>
      <h3>
        {jobHeader.role} ({jobHeader.date})
      </h3>
      <p>
        <img
          className="w-6 inline mr-2"
          src={jobHeader.imgUrl}
          alt={jobHeader.company}
        />
        {jobHeader.company}
      </p>
      <p>
        <MapPinIcon className="w-5 inline mr-1 relative bottom-0.5" />
        <span>{jobHeader.location}</span>
      </p>
    </>
  );
}
