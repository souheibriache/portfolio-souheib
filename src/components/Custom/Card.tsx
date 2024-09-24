import React from "react";
import ButtonWithImage from "./ButtonWithImage";
import { Github, SquareArrowOutUpRight } from "lucide-react";

type Props = {
  name: string;
  img: string;
  description: string;
  link: string;
};

const Card = ({ name, img, description, link }: Props) => {
  return (
    <div className="w-full shadow-lg bg-[#1f2945] p-4 rounded-lg flex flex-col items-center h-[500px]">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-start">
        <img
          src={img}
          className="h-auto w-full object-contain rounded-lg pb-4"
        />
        <div className="text-lg font-semibold pb-2 text-[#37BCF8]">{name}</div>
        <div className="w-11/12 h-1/2 overflow-y-auto leading-loose text-sm mx-auto pb-2">
          {description}
        </div>
        <div className="w-1/2 xl:w-1/2 lg:w-3/4 sm:w-1/2 max-[500px]:w-10/12 py-4">
          <a href={link} target="_blank" rel="noreferrer">
            <ButtonWithImage
              icon={<SquareArrowOutUpRight />}
              label={"Visit"}
              imageStyle="w-1/6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
