import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    {
      title: "Hotstar Clone",
      description: "A clone of the Hotstar streaming platform, featuring a responsive UI, video streaming capabilities, and category-based content filtering.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anurag290405/HOTSTAR-CLONE"
    },
    {
      title: "Netflix Clone",
      description: "A Netflix-inspired streaming platform with a sleek UI, movie/TV show categories, and a responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anurag290405/NetflixClone"
    }
  ];

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerSlide(1);
    else if (width < 1024) setItemsPerSlide(2);
    else setItemsPerSlide(3);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev + itemsPerSlide >= projects.length ? 0 : prev + itemsPerSlide
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [itemsPerSlide, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + itemsPerSlide >= projects.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - itemsPerSlide < 0
        ? Math.floor((projects.length - 1) / itemsPerSlide) * itemsPerSlide
        : prev - itemsPerSlide
    );
  };

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  return (
    <section id='projects' className="w-full bg-[#1a1f2c] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">My Projects</h2>
          <div className="w-24 h-1 bg-[#ff4d05] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-[#ff4d05] p-2 rounded-full text-white hover:bg-[#ff6b33] transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-[#ff4d05] p-2 rounded-full text-white hover:bg-[#ff6b33] transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{ x: `-${(100 / itemsPerSlide) * currentSlide}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ width: `${(100 / itemsPerSlide) * projects.length}%` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="min-w-full sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.33%-1rem)] bg-[#242938] rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 h-24 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#1a1f2c] text-[#ff4d05] rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#ff4d05] transition-colors">
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#ff4d05] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${idx === Math.floor(currentSlide / itemsPerSlide) ? 'bg-[#ff4d05]' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
