import React from 'react';
import { Book, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillandEducation = () => {
  const skills = {
    technical: [
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        name: 'React.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      }
    ],
    leadership: [
      'Team Management',
      'Project Planning',
      'Agile Methodologies',
      'Mentoring'
    ],
    other: [
      'Problem Solving',
      'Communication',
      'Time Management',
      'Creative Thinking'
    ]
  };

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Medicaps University",
      location: "Indore, MP-India",
      duration: "2022 - 2026",
      achievements: [
        "Maintained 8 CGPA",
        "Technical Club Head",
        "Working on Projects for the University Uses"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full mx-auto p-8 bg-[#1a1f2c] text-gray-300 ">
      {/* Education Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={container}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Education</h2>
          <div className="w-24 h-2 bg-[#ff4d05] mx-auto rounded-full"></div>
        </div>
        
        <motion.div 
          variants={container}
          className="space-y-8 max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-[#242938] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-[#3A3A3A] hover:border-[#ff4d05]"
            >
              <div className="border-l-4 border-[#ff4d05] pl-6 mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-300 text-lg mb-1">{edu.institution}</p>
                <p className="text-gray-400">{edu.location} | {edu.duration}</p>
              </div>
              <ul className="space-y-3">
                {edu.achievements.map((achievement, idx) => (
                  <motion.li 
                    key={idx}
                    variants={item}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#ff4d05] transition-colors duration-300"
                  >
                    <div className="h-1.5 w-1.5 bg-[#ff4d05] rounded-full" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Skills</h2>
          <div className="w-24 h-1 bg-[#ff4d05] mx-auto rounded-full"></div>
        </div>
        
        <motion.div 
          variants={container}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Technical Skills */}
          <motion.div 
            variants={item}
            className="bg-[#242938] p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-[#3A3A3A] hover:border-[#ff4d05]"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <Star className="h-6 w-6 text-[#ff4d05]" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex flex-col items-center gap-2 p-2 hover:text-[#ff4d05] transition-colors duration-300 group"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Skills */}
          <motion.div 
            variants={item}
            className="bg-[#242938] p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-[#3A3A3A] hover:border-[#ff4d05]"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <Users className="h-6 w-6 text-[#ff4d05]" />
              Leadership
            </h3>
            <ul className="space-y-3">
              {skills.leadership.map((skill, index) => (
                <motion.li 
                  key={index}
                  variants={item}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff4d05] transition-colors duration-300"
                >
                  <div className="h-1.5 w-1.5 bg-[#ff4d05] rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Skills */}
          <motion.div 
            variants={item}
            className="bg-[#242938] p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-[#3A3A3A] hover:border-[#ff4d05]"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <Star className="h-6 w-6 text-[#ff4d05]" />
              Other Skills
            </h3>
            <ul className="space-y-3">
              {skills.other.map((skill, index) => (
                <motion.li 
                  key={index}
                  variants={item}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff4d05] transition-colors duration-300"
                >
                  <div className="h-1.5 w-1.5 bg-[#ff4d05] rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SkillandEducation;