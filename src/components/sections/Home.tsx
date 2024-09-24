import { headline, name } from "../../data/about";
import { MapPin, Scaling, User } from "lucide-react";
import { description, greetings, location, pronoun } from "../../data/title";
import resume from "../../assets/CV Souheib RIACHE.pdf";
import TypewriterComponent from "typewriter-effect";
import ButtonWithImage from "../Custom/ButtonWithImage";
import icon from "../../assets/icon.svg";
import ParticlesComponent from "../Custom/Particles";

type Props = {};

const Home = ({}: Props) => {
  return (
    <div className="text-white h-screen flex flex-col w-full" id="home">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="h-screen flex items-center md:w-10/12 w-11/12 mx-auto">
        <div className="flex justify-between items-center m-auto">
          <div className="sm:w-7/12 w-10/12 max-[495px]:w-11/12 sm:mx-0 mx-auto">
            <div className="pb-4 text-3xl font-semibold">{greetings}</div>
            <div className="flex items-center gap-3 pb-4">
              <div className="text-xl">{pronoun}</div>
              <div className="font-semibold text-xl text-[#37BCF8]">{name}</div>
            </div>
            <div className="pb-4 text-xl flex gap-2">
              <span className="text-lg">A</span>
              <span className="text-[#37BCF8] font-bold">
                <TypewriterComponent
                  options={{
                    strings: description,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="leading-loose">{headline}</div>
            <div className="w-fit pt-3 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <div className="text-sm">{location}</div>
            </div>
            <div className="flex items-center xl:w-1/2 lg:w-4/6 sm:w-11/12 w-3/4 max-[555px]:w-10/12 max-[495px]:w-11/12 max-[445px]:w-full justify-between pt-6">
              <a href={resume} target="_blank" rel="noreferrer">
                <ButtonWithImage icon={<Scaling />} label="Resume" />
              </a>
              <a href="#contact">
                <ButtonWithImage icon={<User />} label="Conatct Me" />
              </a>
            </div>
          </div>
          <div className="sm:w-1/3 sm:block hidden">
            <img className="object-contain" src={icon}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
