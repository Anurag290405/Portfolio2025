import React from "react";
import { TypeAnimation } from 'react-type-animation';
import profileImage from "../assets/Professional Photo.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#1a1f2c] w-full">
      <div className="w-full mx-auto max-w-none px-6 h-full"> 
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white space-y-6 ml-8 lg:ml-16">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hello<br />there...
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#ff4d05] mt-2">
              <TypeAnimation
                sequence={[
                  'I am Anurag Agrawal',
                  2000,
                  'I am Freelancer',
                  2000,
                  'I am Data Science Enthusiast',
                  2000,
                  'I am Software Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-[#8892b0] max-w-md">
              Transforming ideas into elegant digital solutions through creative development and innovative problem-solving.
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
                onClick={() => window.open('/AnuragResume.pdf', '_blank')}
              >
                My Resume
              </button>
            </div>
          </div>
    
          {/* Right Content - Image */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-6 lg:mt-0">
            <img
              src={profileImage}
              alt="Professional headshot"
              className="rounded-lg w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;