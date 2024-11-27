import calculatorLogo from "../assets/calculator_logo.png";
import logo from "../assets/digimon_logo.jpg";
import timesheet from "../assets/timesheet_logo.png";
import { Button } from "@headlessui/react";

function Projects() {
  return (
    <div className="max-w-7xl mx-auto pt-60 md:py-40">
      <div>
        <div className="py-10">
          <h3 className="pb-1 text-center text-gray-600 font-medium text-xl">
            Browse My Recent
          </h3>
          <h1 className="text-center text-black font-medium text-6xl">
            Projects
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-8 ">
        <div className="columns-1 border-2 border-gray-600 rounded-3xl flex items-center justify-center">
          <div className="flex flex-col">
            <img src={calculatorLogo} className="w-72 h-72 p-4" alt="" />
            <h3 className="font-medium text-center text-2xl md:text-3xl">
              Calculator App
            </h3>
            <div className="flex items-center justify-center py-4 ">
              <Button className="border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
                Github
              </Button>
            </div>
          </div>
        </div>
        <div className="columns-1 border-2 border-gray-600 rounded-3xl flex items-center justify-center">
          <div className="flex flex-col">
            <img src={logo} className="w-72 h-72 p-4 mx-auto" alt="" />
            <h3 className="font-medium text-center text-2xl md:text-3xl">
              Digimon TCG App
            </h3>
            <div className="flex items-center justify-center py-4 ">
              <Button className="border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
                Github
              </Button>
            </div>
          </div>
        </div>
        <div className="columns-1 border-2 border-gray-600 rounded-3xl flex items-center justify-center">
          <div className="flex flex-col">
            <img src={timesheet} className="w-72 h-72 p-4" alt="" />
            <h3 className="font-medium text-center text-2xl md:text-3xl">
              Time.ly
            </h3>
            <div className="flex items-center justify-center py-4 ">
              <Button className="border border-black rounded-3xl py-3 px-4 text-sm text-black hover:bg-black hover:text-white">
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
