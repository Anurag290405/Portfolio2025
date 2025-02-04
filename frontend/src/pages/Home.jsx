import React from "react";
import profileImage from "../assets/Professional Photo.jpg"; // Ensure correct path

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#1a1f2c]"> {/* Ensuring full-screen height */}
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hello<br />there...
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#ff4d05] mt-2">
              Anurag Agrawal
            </h2>
            <p className="text-xl text-[#8892b0]">
              I Am a Passionate Developer
            </p>
            <p className="text-[#8892b0] max-w-md">
              The dynamics of how users interact with elements within a user interface flow.
            </p>
            <div className="flex gap-4 mt-6">
              <button 
                className="px-6 py-3 bg-[#ff4d05] text-white rounded hover:bg-[#ff6a33] transition duration-300"
                onClick={() => window.location.href = '#contact'}
              >
                Contact Me
              </button>
              <button 
                className="px-6 py-3 border-2 border-[#ff4d05] text-[#ff4d05] rounded hover:bg-[#ff4d05] hover:text-white transition duration-300"
                onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
              >
                My Resume
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <img
              src={profileImage}
              alt="Professional headshot"
              className="rounded-lg max-w-sm w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
