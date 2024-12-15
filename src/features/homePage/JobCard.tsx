import { Card } from "primereact/card";
import { useState } from "react";
import { Job } from "../jobs/jobsTypes";
import JobModal from "../jobs/JobModal";

interface JobCardProps {
  job: Job;
}

export default function JobCard({job}: JobCardProps) {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Card
        onClick={() => setVisible(true)}
        title={job.role}
        subTitle={<JobCardSubTitle company={job.company} date={job.date} />}
        header={<JobCardHeader alt={job.company} imgUrl={job.imgUrl} />}
        className="bg-yellow-100 rounded-3xl"
      ></Card>
      <JobModal
        job={job}
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <ul className="list-disc mx-4">
          {job.description.map((p) => (
            <li>{p}</li>
          ))}
        </ul>
      </JobModal>
    </>
  );
}

function JobCardHeader({ alt, imgUrl }: JobCardHeaderProps) {
  return <img src={imgUrl} alt={alt} />;
}

function JobCardSubTitle({ company, date }: JobCardSubTitleProps) {
  return <div className="grid grid-cols-2">
    <p>{company}</p>
    <p>{date}</p>
  </div>
}

interface JobCardHeaderProps {
  alt: string;
  imgUrl: string;
}

interface JobCardSubTitleProps {
  company: string,
  date: string,
}