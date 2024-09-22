type Props = {
  icon: string;
  name: string;
};

const Icon = ({ icon, name }: Props) => {
  return (
    <div className="relative group w-24 h-20 select-none rounded-lg p-2 overflow-hidden hover:scale-105 brightness-0 invert duration-200 hover:filter-none border-2 border-white border-opacity-10 hover:border-opacity-50 hover:shadow-white hover:shadow-sm  pb-10">
      <div className="absolute bg-white bg-opacity-30 h-full left-0 w-full text-center group-hover:bottom-0 duration-200 -bottom-20 overflow-hidden flex items-center justify-center">
        {name}
      </div>
      <div className="mx-auto flex justify-center items-center">
        <img src={icon} className="min-h-8 max-w-[80%] object-cover" />
      </div>
    </div>
  );
};

export default Icon;
