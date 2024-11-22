import { Button, Switch } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  {
    /*const [isEnabled, setIsEnabled] = useState(false);*/
  }
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
                <a className="hover:text-gray-600" href="">
                  About
                </a>
              </li>
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="">
                  Experience
                </a>
              </li>
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="">
                  Projects
                </a>
              </li>
              <li className="text-2xl text-black px-4">
                <a className="hover:text-gray-600" href="">
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
            <div className="absolute pt-64 flex basis-full flex-col items-center transition ease-in-out translate-y-7 duration-300">
              <ul>
                <li className="text-2xl text-black py-4">
                  <a className="hover:text-gray-600" href="">
                    About
                  </a>
                </li>
                <li className="text-2xl text-black py-4">
                  <a className="hover:text-gray-600" href="">
                    Experience
                  </a>
                </li>
                <li className="text-2xl text-black py-4">
                  <a className="hover:text-gray-600" href="">
                    Projects
                  </a>
                </li>
                <li className="text-2xl text-black py-4">
                  <a className="hover:text-gray-600" href="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
          {/* DM 
            <Switch
              checked={isEnabled}
              onChange={setIsEnabled}
              className="group inline-flex h-7 w-14 cursor-pointer rounded-full bg-black p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-black/30"
            >
              <span className="sr-only">Dark Mode</span>
              <span className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"></span>
            </Switch>
            */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
