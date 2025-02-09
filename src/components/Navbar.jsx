import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-16 bg-gray-800 fixed w-full top-0 left-0 z-50"> {/* Fixed height of 4rem (16) */}
      <div className="container mx-auto h-full px-6">
        <div className="flex justify-between items-center h-full">
          {/* Logo or Brand Name */}
          <div className="text-white text-lg font-bold">My Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a
              href="#about"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
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
                  strokeWidth={2}
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 right-0 h-screen w-64 bg-gray-800 transform transition-transform duration-300">
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#about"
              className="text-white py-2 px-4 hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-white py-2 px-4 hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-white py-2 px-4 hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white py-2 px-4 hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;