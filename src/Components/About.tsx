import profileImg from "../assets/profile_1.jpg";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="max-w-7xl h-full mx-auto py-8 md:py-40">
      <div className="flex flex-col items-center py-10 ">
        <h3 className="pb-1 text-center font-medium text-gray-600 text-xl">
          Get To Know More
        </h3>
        <h1 className="text-6xl text-center text-black font-medium">
          About Me
        </h1>
        <div className="pb-24 mx-0 md:mx-24">
          <p className="py-10 px-4 text-xl md:px-0 md:text-2xl text-justify">
            Hi, I'm Ronald Rivera! I specialize in crafting visually engaging
            and user-friendly web experiences as a frontend developer. Alongside
            coding, I channel my creativity into content creation and
            photography, bringing stories to life through compelling visuals and
            dynamic design.
          </p>
          <div className="flex justify-center">
            <div>
              <a href="https://www.youtube.com/rironald3">
                <button className="px-3 bg-red-600 text-white rounded-full py-3 hover:-translate-y-2 ease-in-out duration-300">
                  <FaYoutube size={"30px"} />
                </button>
              </a>
            </div>
            <div className="px-2">
              <a href="https://www.linkedin.com/in/riveraronald">
                <button className="bg-blue-600 text-white rounded-full px-3 py-3 hover:-translate-y-2 ease-in-out duration-300">
                  <FaLinkedin size={"30px"} />
                </button>
              </a>
            </div>
            <div>
              <a href="https://www.github.com/rironald">
                <button className="bg-gray-800 text-white rounded-full px-3 py-3 hover:-translate-y-2 ease-in-out duration-300">
                  <FaGithub size={"30px"} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:grid md:grid-cols-4">
        <div className="px-2 md:px-0 md:pr-4 col-span-2 flex items-center justify-center ">
          <img
            className="w-[400px] h-[400px] mx-0 rounded-3xl"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="col-span-2 px-2">
          <div className="mb-2">
            <h2 className="p-6 text-center font-medium text-5xl">Education</h2>
          </div>
          <div className="border-2 p-4 mb-4 border-gray-600 rounded-2xl">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-medium text-left md:text-left">
                Universidad Catolica de Honduras
              </h1>
              <span className="px-2 italic font-medium"> 2009 - 2012</span>
            </div>
            <p className="text-sm md:text-base">
              Completed relevant coursework:
            </p>
            <p className="text-sm md:text-base">
              Database Management, System Design, Web development, Operating
              Systems, etc.
            </p>
          </div>
          <div className="border-2 p-4 border-gray-600 rounded-2xl">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-medium text-left md:text-left">
                Los Angeles City College
              </h1>
              <span className="px-2 italic font-medium"> 2014 - 2016</span>
            </div>
            <p className="text-sm md:text-base">
              Completed relevant coursework:
            </p>
            <p className="text-sm md:text-base">
              Fundamental Commercial Photography, Intermediate Digital
              Photography, Fundamentals of Portraiture, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
