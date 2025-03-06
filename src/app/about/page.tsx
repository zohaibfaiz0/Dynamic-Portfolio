'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/sanity/lib/sanityClient';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';
import * as IconsCpp from 'react-icons/tb';
import * as IconsSi from 'react-icons/si';

// Type Definitions
interface PersonalInfo {
  name: string;
  age: number;
  phone: string;
  email: string;
  occupation: string;
  location: string;
}

interface Education {
  _id: string;
  title: string;
  institute: string;
  status: string;
  details: string;
  statusColor: string; // Not used anymore but kept for type compatibility
}

interface Experience {
  _id: string;
  title: string;
  details: string[];
}

interface Skill {
  _id: string;
  name: string;
  icon: string;
}

// Utility function to get skill icon
function getSkillIcon(iconName: string): IconType {
  const iconMap: { [key: string]: IconType } = {
    ...Icons,
    ...IconsCpp,
    ...IconsSi
  };

  return iconMap[iconName] || Icons.FaCode;
}

// Helper function to get status color based on status text
const getStatusColorClass = (status: string): string => {
  const statusLower = status.toLowerCase();
  
  if (statusLower.includes('enrolled') || statusLower.includes('current')) {
    return 'bg-gradient-to-r from-blue-600 to-blue-400';
  }
  
  if (statusLower.includes('ongoing')) {
    return 'bg-gradient-to-r from-purple-600 to-indigo-400';
  }
  
  if (statusLower.includes('graduated') || statusLower.includes('completed')) {
    return 'bg-gradient-to-r from-green-600 to-emerald-400';
  }
  
  if (statusLower.includes('certified')) {
    return 'bg-gradient-to-r from-yellow-500 to-amber-400';
  }
  
  if (statusLower.includes('dropped') || statusLower.includes('discontinued')) {
    return 'bg-gradient-to-r from-red-600 to-rose-400';
  }
  
  // Default color for any other status
  return 'bg-gradient-to-r from-gray-600 to-gray-400';
};

const AboutPage: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [educations, setEducations] = useState<Education[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch personal info
        const personalInfoQuery = `*[_type == "personalInfo"][0]`;
        const personalInfoData = await client.fetch(personalInfoQuery);
        setPersonalInfo(personalInfoData);

        // Fetch education
        const educationQuery = `*[_type == "education"] | order(order asc)`;
        const educationData = await client.fetch(educationQuery);
        setEducations(educationData);

        // Fetch experiences
        const experienceQuery = `*[_type == "experience"] | order(order asc)`;
        const experienceData = await client.fetch(experienceQuery);
        setExperiences(experienceData);

        // Fetch skills
        const skillsQuery = `*[_type == "skill"] | order(order asc)`;
        const skillsData = await client.fetch(skillsQuery);
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  if (!personalInfo) return <div>Loading...</div>;

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
                { label: "Name", value: personalInfo.name },
                { label: "Age", value: `${personalInfo.age}+` },
                { label: "Number", value: personalInfo.phone },
                { label: "Email", value: personalInfo.email },
                { label: "Occupation", value: personalInfo.occupation },
                { label: "Location", value: personalInfo.location }
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
              {educations.map((edu, index) => (
                <motion.div
                  key={edu._id}
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
                  <span className={`${getStatusColorClass(edu.status)} text-white text-sm px-6 py-2 
                    rounded-full inline-block mt-4 font-medium shadow-lg`}>
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
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp._id}
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
              {skills.map((skill, index) => {
                const SkillIcon = getSkillIcon(skill.icon);
                return (
                  <motion.div
                    key={skill._id}
                    variants={itemVariants}
                    className="group flex flex-col items-center justify-center p-8
                      bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl
                      transition-all duration-500 hover:bg-white/10 
                      hover:border-white/20 hover:shadow-2xl hover:shadow-accent/20
                      hover:-translate-y-1">
                    <div className="text-6xl text-white/70 group-hover:text-accent 
                      group-hover:scale-125 transition-all duration-500">
                      <SkillIcon />
                    </div>
                    <span className="mt-6 text-lg font-medium text-white/70 
                      group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;