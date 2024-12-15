import { Card } from "primereact/card";
import { Job } from "../../types";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function JobCard({job}: JobCardProps) {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <Card
    onClick = {() => setVisible(true)}
      title={job.role}
      subTitle={<JobCardSubTitle company={job.company} date={job.date} />}
      header={<JobCardHeader alt={job.company} imgUrl={job.imgUrl} />}
      className="bg-yellow-100 rounded-3xl"
    ></Card>
    <Dialog draggable={false} blockScroll={true} header={<JobHeaderModal jobHeader={job}/>} visible={visible} onHide={() => {if (!visible) return;
    setVisible(false);}} dismissableMask={true}>
      <ul className="list-disc mx-4">
        {job.description.map(p => <li>{p}</li>)}
      </ul>
    </Dialog>
    </>
  );
}

interface JobHeaderModalProps {
  jobHeader: Omit<Job, "key"|"description">,
}

function JobHeaderModal({jobHeader}: JobHeaderModalProps) {
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

function JobCardHeader({ alt, imgUrl }: JobCardHeaderProps) {
  return <img src={imgUrl} alt={alt} />;
}



export function JobCardSubTitle({ company, date }: JobCardSubTitleProps) {
  return <div className="grid grid-cols-2">
    <p>{company}</p>
    <p>{date}</p>
  </div>
}

interface JobCardProps {
  job: Job,
}

interface JobCardHeaderProps {
  alt: string;
  imgUrl: string;
}

interface JobCardSubTitleProps {
  company: string,
  date: string,
}