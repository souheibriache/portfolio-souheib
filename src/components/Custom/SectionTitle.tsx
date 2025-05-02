type Props = { title: string };

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex justify-center text-center my-8 lg:my-10">
      <div className="flex items-center relative">
        <span className="w-8 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-[2px] bg-gradient-to-r from-transparent to-[#37BCF8]"></span>
        <span className="bg-[#1a1f35] w-fit text-white p-3 px-6 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-md font-bold shadow-lg">
          {title}
        </span>
        <span className="w-8 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-[2px] bg-gradient-to-r from-[#37BCF8] to-transparent"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
