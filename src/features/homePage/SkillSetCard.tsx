import { Card } from "primereact/card";
import { SkillSet } from "../../types";

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
  skillSet: SkillSet,
}