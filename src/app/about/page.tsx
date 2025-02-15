'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCss3, FaHtml5, FaReact, FaFigma } from "react-icons/fa";
import { SiSanity } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiTypescript, SiC, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-black to-gray-900 py-16 lg:py-24">
      <motion.div 
        className="container mx-auto px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-24">
          {/* About Me Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white relative inline-block
              after:content-[''] after:absolute after:-bottom-4 after:left-0 
              after:w-3/4 after:h-1 after:bg-accent after:rounded-full
              after:transition-all after:duration-300 hover:after:w-full">
              About Me
            </h2>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "Name", value: "Muhammad Zohaib Faiz" },
                { label: "Age", value: "19+" },
                { label: "Number", value: "(+92) 3112620503" },
                { label: "Email", value: "zohaibfaiz96@gmail.com" },
                { label: "Occupation", value: "Computer Science Student" },
                { label: "Location", value: "Karachi, Pakistan" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants} 
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 
                    p-8 rounded-3xl transition-all duration-500
                    hover:bg-white/10 hover:border-white/20 hover:shadow-2xl
                    hover:shadow-accent/20 hover:-translate-y-1">
                  <p className="text-xl">
                    <span className="font-semibold text-accent">{item.label}:</span>{' '}
                    <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white relative inline-block
              after:content-[''] after:absolute after:-bottom-4 after:left-0 
              after:w-3/4 after:h-1 after:bg-accent after:rounded-full
              after:transition-all after:duration-300 hover:after:w-full">
              Education
            </h2>
            
            <div className="mt-16 space-y-8">
              {[
                {
                  title: "Bachelor of Science in Computer Science",
                  institute: "Federal Urdu University of Science and Technology",
                  status: "Currently Enrolled",
                  details: "Relevant Coursework: Data Structures, Algorithms, Web Development, Databases",
                  statusColor: "bg-emerald-500"
                },
                {
                  title: "IT Certification",
                  institute: "GIAIC",
                  status: "Ongoing",
                  details: "Advanced courses in Full Stack Development and Web 3",
                  statusColor: "bg-blue-500"
                },
                {
                  title: "Intermediate",
                  institute: "DJ Govt. Science College",
                  status: "Graduation: June 2023",
                  details: "Pre-Engineering",
                  statusColor: "bg-gray-500"
                },
                {
                  title: "High School Diploma",
                  institute: "Millennium's Education System",
                  status: "Graduation: June 2021",
                  details: "Honor Roll, Mathematics Competition Participant",
                  statusColor: "bg-gray-500"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 
                    p-10 rounded-3xl transition-all duration-500
                    hover:bg-white/10 hover:border-white/20 hover:shadow-2xl
                    hover:shadow-accent/20 hover:-translate-y-1">
                  <h3 className="text-3xl font-bold text-accent group-hover:text-accent/80 
                    transition-colors duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-xl text-white/70 mt-3">{edu.institute}</p>
                  <span className={`${edu.statusColor} text-white text-sm px-6 py-2 
                    rounded-full inline-block mt-4 font-medium`}>
                    {edu.status}
                  </span>
                  <p className="text-white/60 mt-6 group-hover:text-white/80 
                    transition-colors duration-300 text-lg">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white relative inline-block
              after:content-[''] after:absolute after:-bottom-4 after:left-0 
              after:w-3/4 after:h-1 after:bg-accent after:rounded-full
              after:transition-all after:duration-300 hover:after:w-full">
              Experience
            </h2>
            
            <div className="mt-16 space-y-8">
              {[
                {
                  title: "Learning in Progress",
                  details: [
                    "Working on personal and academic projects",
                    "Developing practical skills through coding challenges",
                    "Contributing to open-source repositories",
                    "Creating portfolio projects"
                  ]
                },
                {
                  title: "Skill Development Focus",
                  details: [
                    "Self-learning advanced web development techniques",
                    "Building front-end projects",
                    "Participating in coding bootcamps and online certifications",
                    "Networking with tech professionals"
                  ]
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 
                    p-10 rounded-3xl transition-all duration-500
                    hover:bg-white/10 hover:border-white/20 hover:shadow-2xl
                    hover:shadow-accent/20 hover:-translate-y-1">
                  <h3 className="text-3xl font-bold text-accent group-hover:text-accent/80 
                    transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <ul className="mt-8 space-y-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-white/70 group-hover:text-white/90 
                        transition-colors duration-300 text-lg">
                        <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0
                          group-hover:scale-125 transition-transform duration-300"/>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white relative inline-block
              after:content-[''] after:absolute after:-bottom-4 after:left-0 
              after:w-3/4 after:h-1 after:bg-accent after:rounded-full
              after:transition-all after:duration-300 hover:after:w-full">
              Skills
            </h2>
            
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {[
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3 />, name: "CSS3" },
                { icon: <FaReact />, name: "React" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <TbBrandCpp />, name: "C++" },
                { icon: <SiC />, name: "C" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiSanity />, name: "Sanity" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <FaFigma />, name: "Figma" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col items-center justify-center p-8
                    bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl
                    transition-all duration-500 hover:bg-white/10 
                    hover:border-white/20 hover:shadow-2xl hover:shadow-accent/20
                    hover:-translate-y-1">
                  <div className="text-6xl text-white/70 group-hover:text-accent 
                    group-hover:scale-125 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <span className="mt-6 text-lg font-medium text-white/70 
                    group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;