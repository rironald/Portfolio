import profileImg from "../assets/profile_1.jpg";

function About() {
  return (
    <div id="about" className="max-w-7xl h-full mx-auto pt-40 md:py-60">
      <div className="flex flex-col items-center py-10 ">
        <h3 className="pb-1 text-center font-medium text-gray-600 text-xl">
          Get To Know More
        </h3>
        <h1 className="text-6xl text-center text-black font-medium">
          About Me
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center pt-10 md:grid md:grid-cols-4">
        <div className="md:pr-4 col-span-2 flex items-center justify-center ">
          <img
            className="w-[400px] h-[400px] mx-0 rounded-3xl"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="col-span-2 py-6 px-3 md:p-0">
          <h3 className="pb-2 md:pb-0 text-center font-medium md:text-left text-4xl">
            Education
          </h3>
          <div className="flex justify-between items-center pt-3">
            <h1 className="text-lg font-medium text-left md:text-left">
              Universidad Catolica de Honduras
            </h1>
            <span className="px-2 italic font-medium"> 2009 - 2012</span>
          </div>
          <p className="text-sm md:text-base">Completed relevant coursework:</p>
          <p className="text-sm md:text-base">
            Database Management, System Design, Web development, Operating
            Systems, etc.
          </p>
          <div className="flex justify-between items-center pt-3">
            <h1 className="text-lg font-medium text-left md:text-left">
              Los Angeles City College
            </h1>
            <span className="px-2 italic font-medium"> 2014 - 2016</span>
          </div>
          <p className="text-sm md:text-base">Completed relevant coursework:</p>
          <p className="text-sm md:text-base">
            Fundamental Commercial Photography, Intermediate Digital
            Photography, Fundamentals of Portraiture, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
