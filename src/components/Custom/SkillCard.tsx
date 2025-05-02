"use client";

type Props = {
  name: string;
  icon: string;
  category: string;
};

const SkillCard = ({ name, icon }: Props) => {
  return (
    <div className="w-24 sm:w-32 lg:w-36 xl:w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 m-3 sm:m-4 rounded-lg group relative hover:scale-110 cursor-pointer hover:shadow-md hover:shadow-[#37BCF8]/30">
      <div className="h-full w-full rounded-lg border border-[#37BCF8] shadow-none group-hover:border-violet-500 transition-all duration-500 bg-[#1a1f35] group-hover:bg-[#232942] overflow-hidden">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#37BCF8] to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 p-2 sm:gap-2 sm:p-3 lg:gap-3 lg:p-4 xl:gap-4 xl:p-5">
          <div className="h-8 sm:h-10 lg:h-12 xl:h-14 flex items-center justify-center">
            <img
              src={icon || "/placeholder.svg"}
              alt={name}
              width={40}
              height={40}
              className="h-full w-auto rounded-lg object-contain transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-white mt-auto text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-medium text-center">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
