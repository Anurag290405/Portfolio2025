import React from "react";
import AboutPhoto from "../assets/AboutPhoto.jpg"; 
const About = () => {
  return (
<section id="about" className="min-h-screen bg-[#1a1f2c] flex items-center justify-end py-16 pr-16">
<div className="container mx-auto px-6 max-w-none">
<div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">About Me</h2>
          <div className="w-24 h-1 bg-[#ff4d05] mx-auto rounded-full"></div>
        
          
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Container */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4  "></div>
              <img
                src={AboutPhoto}
                alt="Professional portrait"
                className="w-full max-w-xs mx-auto rounded-lg object-cover relative z-10"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
        <p className="text-gray-400 leading-relaxed font-semibold">
         Software Engineer | PR Head | Google Cloud Mentor | Data Science Enthusiast
        </p>
        <p className="text-gray-400 leading-relaxed">
         I am a software engineer passionate about building impactful digital solutions and exploring the world of Data Science.  
    From data preprocessing to machine learning and data mining, I enjoy uncovering insights that drive intelligent decision-making.
  </p>
  <p className="text-gray-400 leading-relaxed">
    As the PR Head & Google Cloud Mentor at GDSC, I bridge technology and community, guiding aspiring developers.  
    Managing the Mentor-Mentee Portal at Medi-Caps University has strengthened my leadership in project development.
  </p>
  <p className="text-gray-400 leading-relaxed">
         Beyond coding, I love writing articles on technology, data science, and leadership.  
        Always eager to learn, solve challenges, and create meaningful tech experiences.
        </p>
           

            <button 
              className="px-6 py-3 bg-[#ff4d05] text-white rounded flex items-center gap-2 hover:bg-[#ff6a33] transition duration-300"
              onClick={() => window.open('/AnuragResume.pdf', '_blank')}

            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;