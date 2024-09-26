import { experiences } from "../../data/experience";
// import AnimationLottie from "../Custom/AnimationLottie";
import GlowCard from "../Custom/GlowCard";
import { BsPersonWorkspace } from "react-icons/bs";
import SectionTitle from "../Custom/SectionTitle";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Experience = ({}: Props) => {
  return (
    <div id="experience" className="relative z-50 mx-auto md:w-10/12 w-11/12">
      <SectionTitle title={"Experience"} />

      <div className="py-8">
        <div className="">
          <div>
            <div className="flex flex-col gap-6">
              <Fade>
                {experiences.map((experience) => (
                  <GlowCard
                    key={experience.id}
                    identifier={`experience-${experience.id}`}
                  >
                    <div className="p-3 relative">
                      <div className="flex items-center gap-x-8 px-3 py-5 xl:gap-y-5 xl:py-8 xl:px-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl xl:text-3xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base xl:text-2xl ">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <p className="text-xs sm:text-sm xl:text-xl text-[#37BCF8]">
                          {experience.duration}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
