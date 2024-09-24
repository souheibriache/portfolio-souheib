import React, { useState } from "react";
import { navBar } from "../../data/title";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

type Props = {};

const NavBar = ({}: Props) => {
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
              href="#home"
              onClick={() => {
                setActiveNav("");
              }}
            >
              <img src={logo} className="h-8 w-auto" />
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
            <div className="text-sm md:flex md:flex-grow gap-5">
              {navBar.map((element) => {
                return (
                  <div key={element.name}>
                    <a
                      href={element.linkTo}
                      id={element.name}
                      className={`${
                        activeNav === element.name
                          ? "text-[#37BCF8] font-bold"
                          : "text-white font-semibold"
                      } hover:text-[#37BCF8] block mt-4 md:inline-block md:mt-0 text-white-200`}
                      onClick={onClickHandler}
                    >
                      {element.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
