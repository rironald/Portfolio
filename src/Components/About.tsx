import { CheckBadgeIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="max-w-7xl mx-auto py-96 md:py-0">
      <div>
        <div className="py-10">
          <h3 className="pb-1 text-center text-gray-600 font-medium text-xl">
            Explore My
          </h3>
          <h1 className="text-center text-black font-medium text-6xl">
            Experience
          </h1>
        </div>
        <div className="py-10 px-2">
          <div className="grid grid-cols-2 text-2xl font-medium gap-4">
            <div className="columns-1 border-2 p-4 border-gray-600 rounded-3xl">
              <div>
                <h2 className="text-center py-4 text-gray-500 text-3xl">
                  Frontend Development
                </h2>
              </div>
              <div className="grid grid-cols-4">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-row flex-wrap justify-center md:flex md:flex-col md:justify-start">
                  <h3>HTML</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
              <div className="grid grid-cols-4 py-2">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-col items-center md:flex md:flex-col md:items-start md:justify-start">
                  <h3>CSS</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
              <div className="grid grid-cols-4 py-2">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-row flex-wrap justify-center md:flex md:flex-col md:justify-start">
                  <h3>Javascript</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
              <div className="grid grid-cols-4 py-2">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-row flex-wrap justify-center md:flex md:flex-col md:justify-start">
                  <h3>React JS</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
            </div>
            <div className="columns-1 border-2 p-4 border-gray-600 rounded-3xl">
              <div>
                <h2 className="text-center py-4 text-gray-500 text-3xl">
                  Backend Development
                </h2>
              </div>
              <div className="grid grid-cols-4">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-row flex-wrap justify-center md:flex md:flex-col md:justify-start">
                  <h3>Node JS</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
              <div className="grid grid-cols-4 py-2">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-row flex-wrap justify-center md:flex md:flex-col md:justify-start">
                  <h3>MongoDB</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
              <div className="grid grid-cols-4 py-2">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-row flex-wrap justify-center md:flex md:flex-col md:justify-start">
                  <h3>Express JS</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
              <div className="grid grid-cols-4 py-2">
                <div className="columns-2 col-span-1 pr-0 flex items-center justify-end md:col-span-2 md:flex md:justify-end md:pr-6">
                  <span>
                    <CheckBadgeIcon className="size-7 text-green-600" />
                  </span>
                </div>
                <div className="col-span-2 flex flex-col items-center md:flex md:flex-col md:justify-start md:items-start">
                  <h3>Git</h3>
                  <p className="font-light text-sm">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
