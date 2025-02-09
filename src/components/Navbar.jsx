import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="h-20 bg-gray-900 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto h-full px-6">
        <div className="flex justify-between items-center h-full">
          {/* Logo or Brand Name */}
          <div className="text-white text-xl font-bold tracking-wider hover:text-[#ff4d05] transition-colors duration-300">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#ff4d05] transition-all duration-300 text-lg font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#ff4d05] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none w-10 h-10 flex items-center justify-center hover:text-[#ff4d05] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
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
                className="w-8 h-8"
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
      <div 
        className={`lg:hidden fixed top-20 right-0 h-screen w-full sm:w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex flex-col space-y-6 p-8">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-2xl font-medium py-3 px-6 hover:bg-gray-800 hover:text-[#ff4d05] rounded-lg transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;