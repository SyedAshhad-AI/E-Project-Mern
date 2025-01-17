import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center sticky top-0 z-20 backdrop-blur-3xl">
      <nav className="p-4 w-full max-w-6xl mx-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/Images/logoW.png"
              alt="Logo"
              className="h-11 w-auto lg:h-14 lg:mx-4"
            />
            <div className="text-lg font-bold text-white lg:block hidden">
            </div>
          </div>

          <button
            className="block lg:hidden text-white hover:text-blue-500 focus:outline-none z-30"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <div
            className={`fixed inset-0 bg-black bg-opacity-50 lg:bg-transparent z-10 lg:relative lg:flex lg:items-center lg:opacity-100 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } lg:visible`}
            onClick={() => setIsOpen(false)} // Click outside the menu to close
          >
            <ul
              className={`flex flex-col lg:flex-row lg:space-x-6 lg:static absolute lg:rounded-none p-6 lg:p-0 bg-slate-600 lg:bg-transparent left-0 right-0 transition-transform duration-300 ease-in-out transform ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              } lg:transform-none lg:opacity-100 lg:visible`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  Home
                </Link>
              </li>
              <li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  About
                </Link>
              </li>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
