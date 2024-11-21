import {
  Disclosure,
  DisclosureButton,
  Button,
  Switch,
} from "@headlessui/react";
import { useState } from "react";

function Navbar() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
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
  );
}

export default Navbar;
