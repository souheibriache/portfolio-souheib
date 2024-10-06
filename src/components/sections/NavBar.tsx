import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { LanguageContext } from "../../context/languageContext"; // Make sure this import is correct.
import { sections } from "../../data/componentsText";
import LanguageSwitcher from "../Custom/LanguageSwitcher";

type Props = {};

const NavBar = ({}: Props) => {
  const languageContext = useContext(LanguageContext);

  // Ensure `languageContext` is available
  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language = "FR", toggleLanguage } = languageContext;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("");

  const onClickHandler = (element: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveNav(element.currentTarget.id);
  };

  return (
    <>
      <nav className="items-start flex flex-row justify-between  p-6 z-10 fixed top-0 right-0 w-full bg-[#09132e] shadow-lg">
        <div className="md:w-10/12 w-11/12 mx-auto flex flex-shrink-0 flex-wrap justify-between items-center">
          <div>
            <a
              href="#hero"
              onClick={() => {
                setActiveNav("");
              }}
            >
              <img src={logo} className="h-8 w-auto xl:h-12 2xl:h-20" />
            </a>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex duration-500 transition-opacity text-white items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7 " />
              )}
            </button>
          </div>
          <div
            className={`w-full block md:flex md:items-center md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-sm text-white lg:text-lg xl:text-xl 2xl:text-3xl md:flex items-center justify-center md:flex-grow md:gap-5 lg:gap-8 xl:gap-12">
              {sections.map((element) => {
                return (
                  <div key={element.name[language]}>
                    <a
                      href={element.linkTo}
                      id={element.name[language]}
                      className={`${
                        activeNav === element.name[language]
                          ? "text-[#37BCF8] font-bold"
                          : "text-white font-semibold"
                      } hover:text-[#37BCF8] block text-center text-nowrap mt-4 md:inline-block md:mt-0`}
                      onClick={onClickHandler}
                    >
                      {element.name[language]}
                    </a>
                  </div>
                );
              })}
              {/* Language switcher */}
              <LanguageSwitcher
                language={language}
                toggleLanguage={toggleLanguage}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
