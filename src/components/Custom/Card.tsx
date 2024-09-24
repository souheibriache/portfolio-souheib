import ButtonWithImage from "./ButtonWithImage";
import { SquareArrowOutUpRight } from "lucide-react";
import javascript from "../../assets/skills/js.png";
import typescript from "../../assets/skills/typescript.png";
import angular from "../../assets/skills/angular.png";
import nestjs from "../../assets/skills/nestjs.png";

type Props = {
  name: string;
  img: string;
  description: string;
  link: string;
  skills?: string[];
};

const Card = ({
  name,
  img,
  description,
  link,
  skills = [javascript, typescript, angular, nestjs],
}: Props) => {
  return (
    <div className="w-full shadow-lg bg-[#1f2945] rounded-lg flex flex-col items-center h-[500px]">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-start">
        <div className="w-full relative group">
          <img
            src={img}
            className="h-auto w-full object-contain rounded-lg pb-4"
          />
          <div className="absolute -top-full group-hover:top-0 duration-300 gap-2 w-full justify-center items-center h-fit pt-5  bg-black bg-opacity-30 flex flex-row flex-wrap">
            {skills.map((skill, index) => (
              <img
                className="h-12 w-auto object-cover p-2 bg-white bg-opacity-30 rounded-lg mb-3"
                key={index}
                src={skill}
              />
            ))}
          </div>
        </div>
        <div className="text-lg font-semibold pb-2 mx-4 text-[#37BCF8]">
          {name}
        </div>
        <div className="w-11/12 h-1/2 overflow-y-auto  leading-loose text-sm mx-auto pb-2">
          {description}
        </div>
        <div className="w-1/2 xl:w-1/2 lg:w-3/4 sm:w-1/2 max-[500px]:w-10/12 py-4">
          <a href={link} target="_blank" rel="noreferrer">
            <ButtonWithImage
              icon={<SquareArrowOutUpRight />}
              label={"Voir le Projet"}
              imageStyle="w-1/6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
