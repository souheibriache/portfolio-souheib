import { useState } from "react";

type Props = {
  icon: any;
  label: string;
  imageStyle?: string;
};

const ButtonWithImage = ({ icon, label }: Props) => {
  return (
    <div className="border-2 border-[#37BCF8] text-[#37BCF8] py-3 px-5 rounded-md flex items-center justify-center gap-2 hover:bg-[#37BCF8] hover:text-black hover:font-semibold">
      {icon}
      <div>{label}</div>
    </div>
  );
};

export default ButtonWithImage;
