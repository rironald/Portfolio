function Footer() {
  return (
    <div className="mt-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center my-2">
          <ul className="flex">
            <li className="text-lg md:text-2xl text-black px-2">
              <a className="hover:text-gray-600" href="#">
                Home
              </a>
            </li>
            <li className="text-lg md:text-2xl text-black px-3">
              <a className="hover:text-gray-600" href="#about">
                About
              </a>
            </li>
            <li className="text-lg md:text-2xl text-black px-3">
              <a className="hover:text-gray-600" href="#experience">
                Experience
              </a>
            </li>
            <li className="text-lg md:text-2xl text-black px-3">
              <a className="hover:text-gray-600" href="#projects">
                Projects
              </a>
            </li>
            <li className="text-lg md:text-2xl text-black px-2">
              <a className="hover:text-gray-600" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <p className="text-black text-base text-center py-4 px-1 md:px-0">
          Copyright &#169; 2024 Ronald Rivera. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
