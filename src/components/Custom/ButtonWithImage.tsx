type Props = {
  icon: any;
  label: string;
  imageStyle?: string;
};

const ButtonWithImage = ({ icon, label }: Props) => {
  return (
    <div className="border-2 2xl:border-4 2xl:py-4 2xl:px-10 border-[#37BCF8] text-[#37BCF8] py-2 px-5 rounded-md flex items-center justify-center gap-2 hover:bg-[#37BCF8] hover:text-black hover:font-semibold lg:text-xl xl:text-2xl 2xl:text-4xl lg:py-2 lg:px-8">
      {icon}
      <div>{label}</div>
    </div>
  );
};

export default ButtonWithImage;
