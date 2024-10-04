import { headline } from "../../data/about";
import { Scaling, User } from "lucide-react";
import { description, greetings } from "../../data/title";
import TypewriterComponent from "typewriter-effect";
import ButtonWithImage from "../Custom/ButtonWithImage";
import picture from "../../assets/picture.png";

type Props = {};

const About = ({}: Props) => {
  const resume =
    "https://drive.google.com/file/d/1cj_715kR2YYhrmHlk59s3FUwPpS8Z5cE/view?usp=sharing";
  return (
    <div
      className=" text-white h-full lg:h-screen flex flex-col w-full pt-20 xl:pt-0"
      id="about"
    >
      <div className="h-full flex items-center md:w-10/12 w-11/12 mx-auto">
        <div className="flex justify-between items-center m-auto">
          <div className="sm:w-7/12 w-10/12 max-[495px]:w-11/12 sm:mx-0 mx-auto flex flex-col gap-0 xl:gap-4">
            <div className="pb-4 text-3xl font-semibold lg:text-5xl xl:text-7xl 2xl:text-9xl">
              {greetings}
            </div>
            {/* <div className="flex items-center gap-3 pb-4">
              <div className="text-xl">{pronoun}</div>
              <div className="font-semibold text-xl text-[#37BCF8]">{name}</div>
            </div> */}
            <div className="pb-4 text-xl flex gap-2">
              {/* <span className="text-lg">A</span> */}
              <span className="text-[#37BCF8] font-bold lg:text-4xl xl:text-5xl 2xl:text-èxl">
                <TypewriterComponent
                  options={{
                    strings: description,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="leading-loose lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10 2xl:text-4xl 2xl:leading-snug">
              {headline}
            </div>

            <div className="flex flex-col gap-2 w-full sm:flex-row items-center xl:w-1/2 lg:w-4/6 sm:w-11/12 max-[555px]:w-10/12 max-[495px]:w-11/12 max-[445px]:w-full justify-center sm:justify-between pt-6">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <ButtonWithImage
                  icon={
                    <Scaling className="h-5 md:h-6 lg:h-5 xl:h-8 2xl:h-10 w-auto" />
                  }
                  label="Resume"
                />
              </a>
              <a href="#contact" className="w-full">
                <ButtonWithImage
                  icon={
                    <User className="h-5 md:h-6 lg:h-5 xl:h-8 2xl:h-10 w-auto" />
                  }
                  label="Conatct"
                />
              </a>
            </div>
          </div>
          <div className="sm:w-1/3 sm:block hidden">
            <img className="object-contain h-1/2 w-auto" src={picture}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
