function Footer() {
  return (
    <div className="mt-40 ">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:flex md:justify-center md:my-8">
          <ul className="px-2 md:flex">
            <li className="text-2xl text-black px-4">
              <a className="hover:text-gray-600" href="#">
                Home
              </a>
            </li>
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
        <p className="text-black text-base text-center py-4">
          Copyright &#169; 2024 Ronald Rivera. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
