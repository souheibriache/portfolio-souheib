type Props = { title: string };

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex justify-center text-center my-5 lg:py-8">
      <div className="flex  items-center">
        <span className="w-8 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-[2px] bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-md">
          {title}
        </span>
        <span className="w-8 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
