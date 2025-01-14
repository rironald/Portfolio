import { Button } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-wrap h-24 px-4 items-center justify-center md:justify-between">
          <div className="mx-auto md:mx-0">
            <Button className="text-4xl md:text-3xl font-normal hover:text-gray-600 text-black">
              Ronald Rivera
            </Button>
          </div>
          <div className="hidden md:flex">
            <ul className="px-2 md:flex">
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="#about">
                  About
                </a>
              </li>
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="#experience">
                  Experience
                </a>
              </li>
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="#projects">
                  Projects
                </a>
              </li>
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden cursor-pointer">
            <span onClick={onToggleMenu}>
              {isOpen ? (
                <XMarkIcon className="size-8" />
              ) : (
                <Bars3Icon className="size-8" />
              )}
            </span>
          </div>
          {isOpen && (
            <div className="absolute md:hidden bg-white top-16 w-full flex flex-col items-center transition ease-in-out translate-y-7 duration-300">
              <ul>
                <li className="text-2xl text-center text-black py-4">
                  <a className="hover:text-gray-600" href="#about">
                    About
                  </a>
                </li>
                <li className="text-2xl text-center text-black py-4">
                  <a className="hover:text-gray-600" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="text-2xl text-center text-black py-4">
                  <a className="hover:text-gray-600" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="text-2xl text-center text-black py-4">
                  <a className="hover:text-gray-600" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
