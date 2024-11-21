import {
  Button,
  Disclosure,
  DisclosureButton,
  Switch,
} from "@headlessui/react";
import "./App.css";
import { useState } from "react";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <>
      {/* Navbar */}
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-2">
          <div className="relative flex h-24 items-center justify-between">
            <Button className="text-3xl font-normal text-black">
              Ronald Rivera
            </Button>
            <DisclosureButton>
              <Button className="text-black text-2xl px-4">About</Button>
              <Button className="text-black text-2xl px-4">Experience</Button>
              <Button className="text-black text-2xl px-4">Projects</Button>
              <Button className="text-black text-2xl px-4">Contact</Button>
            </DisclosureButton>
            <Switch
              checked={isEnabled}
              onChange={setIsEnabled}
              className="group inline-flex h-7 w-14 cursor-pointer rounded-full bg-black p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-black/30"
            >
              <span className="sr-only">Dark Mode</span>
              <span className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"></span>
            </Switch>
          </div>
        </div>
      </Disclosure>
      <section>
        <div className="mx-auto max-w-7xl h-16 py-80 flex items-center justify-center">
          <div className="flex w-80 h-80">
            <img
              src="./src/assets/profile_2.jpg"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="font-medium px-24 text-center">
            <p className="text-gray-500 text-2xl pb-1">Hello, I'm </p>
            <h1 className="text-5xl py-1">Ronald Rivera</h1>
            <p className="text-gray-600 text-3xl py-3 tracking-tight">
              Frontend Developer
            </p>
            <div className="py-3 flex items-center justify-evenly">
              <Button className="border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
                Contact Info
              </Button>
              <Button className=" border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
