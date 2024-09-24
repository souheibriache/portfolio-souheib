type Props = {
  categories: any[];
  activeCategory: any;
  onCategoryChange: (category: string) => void;
};

const SkillsNav = ({ categories, activeCategory, onCategoryChange }: Props) => {
  return (
    <div className="w-full h-16 nav flex flex-row justify-between rounded-t-md overflow-hidden bg-white bg-opacity-10 text-xs sm:text-sm md:text-base">
      {categories.map((category, index) => (
        <div
          onClick={() => onCategoryChange(category)}
          key={index}
          className={`py-3 flex justify-center items-center w-full text-center hover:bg-white hover:bg-opacity-10 duration-200 cursor-pointer ${
            category === activeCategory ? "border-b-2 border-blue-300" : ""
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default SkillsNav;
