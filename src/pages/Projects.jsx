import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const projects = [
    {
      title: "Employee Recruitment Portal For Medi-Caps University",
      description: "A web-based recruitment portal designed for Medi-Caps University, streamlining the hiring process for faculty and staff. Features include job postings, applicant tracking, and interview scheduling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "http://career.medicaps.ac.in:9092/home/home1"
    },
    {
      title: "Mentor-Mentee Portal For Medi-Caps University",
      description: "A web application designed to facilitate mentor-mentee relationships at Medi-Caps University. It includes features for profile management, communication, and resource sharing.",
      technologies: ["React", "Node.js", "Supabase"],
    },
    {
      title: "Developers' Community Website Redesigned",
      description: "A web application designed to facilitate mentor-mentee relationships at Medi-Caps University. It includes features for profile management, communication, and resource sharing.",
      technologies: ["React", "Springboot", "MySQL", "Tailwind CSS"],
    },
    {
      title: "House Price Prediction Model",
      description: "A machine learning model built using Python that predicts house prices based on various features such as location, size, and amenities. Developed using regression techniques and data visualization.",
      technologies: ["Python", "Jupyter Notebook"],
      github: "https://github.com/Anurag290405/HousePricePrediction"
    },
    {
      title: "Gym Website",
      description: "A modern, responsive Gym website built using HTML, CSS, and JavaScript, featuring smooth animations, dynamic content loading, and an elegant UI for GymHolics.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Anurag290405/GymBasicWebsite"
    },
    {
      title: "Travel Website",
      description: "A user-friendly travel website providing destination guides, trip planning tools, and an interactive map to explore places.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anurag290405/TravelWEbsite"
    },
  ];

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemsPerSlide(1);
    } else if (width < 1024) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(3);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev + itemsPerSlide >= projects.length) {
          return 0;
        }
        return prev + itemsPerSlide;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [itemsPerSlide, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev + itemsPerSlide >= projects.length) {
        return 0;
      }
      return prev + itemsPerSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev - itemsPerSlide < 0) {
        const lastSlideStart = Math.floor((projects.length - 1) / itemsPerSlide) * itemsPerSlide;
        return lastSlideStart;
      }
      return prev - itemsPerSlide;
    });
  };

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  return (
    <section id='projects' className="w-full bg-[#1a1f2c] py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            My Projects
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-[#ff4d05] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <button 
            onClick={prevSlide} 
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-[#ff4d05] p-2 lg:p-3 rounded-full text-white hover:bg-[#ff6a33] transition-all duration-200 items-center justify-center shadow-lg"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
          </button>

          <button 
            onClick={nextSlide} 
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-[#ff4d05] p-2 lg:p-3 rounded-full text-white hover:bg-[#ff6a33] transition-all duration-200 items-center justify-center shadow-lg"
            aria-label="Next projects"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
          </button>

          {/* Projects Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${(currentSlide / itemsPerSlide) * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="px-2 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerSlide}%` }}
                >
                  <div className="bg-[#242938] rounded-xl p-4 sm:p-6 h-full flex flex-col shadow-xl border border-slate-700 hover:border-[#ff4d05]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff4d05]/10">
                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 sm:px-3 py-1 bg-[#1a1f2c] text-[#ff4d05] rounded-full text-xs sm:text-sm font-medium border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center sm:justify-start gap-2 text-white hover:text-[#ff4d05] transition-colors py-2 px-3 rounded-lg hover:bg-slate-700/50 text-sm sm:text-base"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center sm:justify-start gap-2 text-white hover:text-[#ff4d05] transition-colors py-2 px-3 rounded-lg hover:bg-slate-700/50 text-sm sm:text-base"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="bg-[#ff4d05] p-3 rounded-full text-white hover:bg-[#ff6a33] transition-colors shadow-lg"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-[#ff4d05] p-3 rounded-full text-white hover:bg-[#ff6a33] transition-colors shadow-lg"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx * itemsPerSlide)}
                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-200 ${
                  idx === Math.floor(currentSlide / itemsPerSlide)
                    ? 'bg-[#ff4d05] scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;