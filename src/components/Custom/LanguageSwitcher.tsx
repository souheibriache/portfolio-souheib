import { LanguageType } from "../../context/languageContext";

type Props = {
  language: LanguageType;
  toggleLanguage: (language: LanguageType) => void;
};

const LanguageSwitcher = ({ language, toggleLanguage }: Props) => {
  return (
    <div className="flex flex-row self-center w-full justify-center mt-3 md:mt-0  font-semibold  items-center gap-1 xl:gap-1.5 2xl:gap-2">
      <button
        onClick={() => toggleLanguage("FR")}
        className={language === "FR" ? "font-bold text-[#37BCF8]" : ""}
      >
        FR
      </button>
      <div
        onClick={() => toggleLanguage(language === "FR" ? "EN" : "FR")} // Toggle the language
        className={`w-8 h-5 xl:w-10 xl:h-6 2xl:w-14 2xl:h-8 bg-slate-500 rounded-full flex ease duration-300 ${
          language === "FR" ? "pl-0" : "pl-3 xl:pl-4 2xl:pl-6"
        }`}
      >
        {language && (
          <div className="h-5 w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 rounded-full bg-white shadow-sm shadow-white"></div>
        )}
      </div>
      <button
        onClick={() => toggleLanguage("EN")}
        className={language === "EN" ? "font-bold text-[#37BCF8]" : ""}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
