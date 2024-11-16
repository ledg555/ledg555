import { Card } from "primereact/card";

export default function SkillSetCard({ skillSet }: SkillSetCardProps) {
  if (skillSet.list.length > 0)
    return (
      <Card title={`${skillSet.type}:`}>
        {skillSet.list.map((skill) => (
          <img className="inline-block w-12 p-1" src={skill.imgUrl} />
        ))}
      </Card>
    );
}

interface SkillSetCardProps {
  skillSet: {
    type: string;
    list: SkillProps[];
  };
}

interface SkillProps {
  name: string;
  imgUrl: string;
}
