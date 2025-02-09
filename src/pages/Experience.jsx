import React from 'react';
import { Briefcase, Calendar, ChevronRight, ArrowUpRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Manager",
      company: "MII Foundation",
      duration: "Jan 2025 - Present",
      location: "Indore, Madhya Pradesh, India",
      type: "Internship",
      description: [
        "Managed a team of 15 individuals in developing college-based projects",
        "Led fullstack development efforts to ensure project success and timely delivery",
        "Implemented efficient project management strategies to streamline workflow and enhance team collaboration"
      ],
      promotions: [
        {
          date: "Jan 2025",
          details: "Promoted to Project Manager based on exceptional performance as Frontend Developer"
        },
        {
          date: "Sep 2024",
          details: "Promoted to Developer based on exceptional performance as Frontend Developer Intern"
        },
        {
          date: "Jun 2024",
          details: "Appointed as Frontend Developer Intern"
        }
      ],
      skills: ["React.js", "Node.js", "MongoDB", "MySQL", "Figma", "Notion", "Leadership", "Team Leadership"]
    },
    {
      title: "Google Cloud Mentor and PR Head",
      company: "Google Developer Group On Campus",
      duration: "Sep 2024 - Present",
      location: "India",
      type: "Full-time",
      description: [
        "Corporate and PR Head at @MU-GDG",
        "Google Cloud Mentor"
      ],
      promotions: [
        {
          date: "Oct 2024",
          details: "Appointed as  Cloud Mentor after mentoring 100+ students"
        },
        {
          date: "Sep 2024",
          details: "Selected as PR Head after working as PR Executive for 1 year"
        }
      ],
      skills: ["Google Cloud Platform (GCP)", "Public Relations", "Marketing", "Team Leadership"]
    },
    {
      title: "Vice President",
      company: "Sahityik Club MU",
      duration: "Sep 2024 - Present",
      location: "Indore, Madhya Pradesh, India",
      type: "Full-time",
      description: [
        "Leading club operations and initiatives",
        "Managing team coordination and event planning"
      ],
      promotions: [
        {
          date: "Sep 2024",
          details: "Promoted to Vice-President of the Club after working as Operation Team Member"
        }
      ],
      skills: ["Team Leadership", "Management", "Organizational Leadership", "Public Relations"]
    },
    {
      title: "Software Developer Intern",
      company: "Parthivi Software Solution",
      duration: "Jul 2024 - Aug 2024",
      location: "Indore, Madhya Pradesh, India",
      type: "Internship",
      description: [
        "Developed responsive web applications",
        "Worked with modern frontend technologies"
      ],
      promotions: [
        {
          date: "Aug 2024",
          details: "Recognized for outstanding performance in web development projects"
        }
      ],
      skills: ["HTML", "CSS", "JavaScript", "JSP", "JDBC"]
    }
  ];

  return (
    <section id="experience" className="w-full bg-[#1a1f2c]  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-3">Experience</h2>
        
          <h3 className="text-white text-4xl font mb-4">
            My Professional Journey
          </h3>
          <div className="w-24 h-1 bg-[#ff4d05] mx-auto rounded-full"></div>
        
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-12 h-full w-0.5 bg-[#ff4d05] opacity-30" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-12 transform -translate-x-1/2 w-4 h-4 bg-[#ff4d05] rounded-full" />
                
                {/* Content */}
                <div className="ml-24 w-full">
                  <div className="p-6 bg-[#242935] rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Briefcase className="text-[#ff4d05] mr-2" size={20} />
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    </div>
                    
                    <div className="flex items-center mb-4 text-gray-400">
                      <Calendar className="mr-2" size={16} />
                      {exp.duration}
                    </div>
                    
                    <p className="text-[#ff4d05] font-semibold mb-4">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                    
                    <ul className="mb-4 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start mb-2">
                          <ChevronRight className="text-[#ff4d05] mr-2 mt-1" size={16} />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Promotions Timeline */}
                    {exp.promotions && exp.promotions.length > 0 && (
                      <div className="mb-4 border-l-2 border-[#ff4d05] pl-4">
                        <h5 className="text-white font-semibold mb-2">Career Growth</h5>
                        {exp.promotions.map((promotion, i) => (
                          <div key={i} className="mb-2 last:mb-0">
                            <div className="flex items-start">
                              <ArrowUpRight className="text-[#ff4d05] mr-2 mt-1" size={16} />
                              <div>
                                <span className="text-[#ff4d05] text-sm">{promotion.date}</span>
                                <p className="text-gray-300 text-sm">{promotion.details}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-[#1a1f2c] text-[#ff4d05] rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;