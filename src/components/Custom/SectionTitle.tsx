type Props = { title: string };

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex justify-center text-center my-5 lg:py-8">
      <div className="flex  items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          {title}
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
