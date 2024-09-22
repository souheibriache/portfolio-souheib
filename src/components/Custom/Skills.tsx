import { skills } from "../../data/skills";
import { mySkills } from "../../data/title";
import Icon from "./Icon";

type Props = {};

const Skills = ({}: Props) => {
  return (
    <div className="w-full py-4">
      <div className="font-bold text-xl text-[#37BCF8] pb-6 text-center">
        {mySkills}
      </div>
      <div className="flex flex-wrap w-full justify-center gap-2 items-center">
        {skills.map((element) => {
          return (
            <Icon key={element.name} name={element.name} icon={element.icon} />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
