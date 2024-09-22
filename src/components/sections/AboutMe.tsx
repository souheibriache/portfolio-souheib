import Skills from "../Custom/Skills";

type Props = {};

const AboutMe = ({}: Props) => {
  return (
    <div className="text-white pt-8 pb-14" id="about">
      <div className="md:w-10/12 w-11/12 mx-auto flex min-[850px]:flex-row min-[850px]:flex-wrap flex-col min-[850px]:justify-between min-[850px]:justify-center">
        {/* <About /> */}
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
