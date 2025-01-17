import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          {/* Left section */}
          <div className="mb-5">
            <h2 className="text-2xl font-bold">TechPulse.</h2>
            <p className="mt-3 max-w-sm text-gray-400">
              We are a dynamic team of innovators and thinkers, dedicated to helping brands thrive in the digital world. Our goal is to create impactful digital experiences that help businesses grow.
            </p>
            {/* Social Icons with animation */}
            <div className="mt-5 flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                Facebook
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                Instagram
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                Twitter
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                Tiktok
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
              >
                Patreon
              </Link>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-wrap justify-between w-full md:w-auto">
            <div className="mb-5 mx-5 md:mb-0">
              <h3 className="font-semibold">Our Services</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 bg-black p-5">
        <p>Copyright © 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
