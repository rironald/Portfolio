import { Button } from "@headlessui/react";
import profileImg from "../assets/profile_2.jpg";

function Hero() {
  return (
    <div className="mx-auto max-w-7xl py-10 md:py-44 md:flex md:items-center md:justify-center">
      <div className="w-80 h-80 mb-4 mx-auto lg:mx-0">
        <img src={profileImg} alt="" className="rounded-full" />
      </div>
      <div className="font-medium mx-10 text-center">
        <p className="text-gray-500 text-2xl">Hello, I'm </p>
        <h1 className="text-5xl py-1">Ronald Rivera</h1>
        <p className="text-gray-600 text-3xl py-2 tracking-tight">
          Frontend Developer
        </p>
        <div className="py-2 flex items-center justify-center gap-2">
          <div>
            <Button className="border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
              <a href="https://www.linkedin.com/in/riveraronald">LinkedIn</a>
            </Button>
          </div>
          <div>
            <Button className=" border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
              <a href="https://www.github.com/rironald">Github</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
