import { workAndEducation } from "../../data/experience";
import { experience } from "../../data/title";
import TimeLine from "../Custom/TimeLine";

type Props = {};

const Experience = ({}: Props) => {
  return (
    <div
      className="md:w-10/12 w-11/12 mx-auto text-white py-10"
      id="experience"
    >
      <div className="font-bold text-xl text-[#37BCF8] pb-6">{experience}</div>
      <div className="w-full py-6">
        {workAndEducation.map((element, index) => {
          const leftSide = index % 2 === 0;
          const first = index === 0;
          const last = index === workAndEducation.length - 1;

          return (
            <TimeLine
              key={element.year}
              year={element.year}
              organization={element.organization}
              position={element.position}
              responsibility={element.responsibility}
              first={first}
              last={last}
              leftSide={leftSide}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
