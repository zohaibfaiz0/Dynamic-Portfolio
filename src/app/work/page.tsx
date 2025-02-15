'use client'
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/sanity";

interface Project {
  num: string;
  category: string;
  title: string;
  desc: string;
  stack: { name: string }[];
  live: string;
  github: string;
}

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(num asc) {
          num,
          category,
          title,
          desc,
          stack,
          live,
          github
        }`;
        const data: Project[] = await sanityClient.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-lg font-medium animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mt-12 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative w-full flex flex-col gap-8 rounded-2xl p-8 lg:p-10 
                bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm
                border border-white/10 hover:border-white/20
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Project Number */}
              <div className="absolute -top-8 right-8 text-8xl lg:text-9xl font-black 
                text-white/5 group-hover:text-white/10 transition-all duration-500">
                {project.num}
              </div>

              {/* Project Category and Title */}
              <div className="space-y-2">
                <h3 className="text-white/60 text-lg font-medium tracking-wide">
                  {/*{project.category*/}Project:
                </h3>
                <h2 className="text-4xl lg:text-5xl font-bold text-white 
                  group-hover:text-white transition-all duration-300">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-3xl
                group-hover:text-white/80 transition-all duration-300">
                {project.desc}
              </p>

              {/* Stack List */}
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium
                      bg-white/5 text-white/70 border border-white/10
                      hover:bg-white/10 hover:text-white
                      transition-all duration-300"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-6 items-center pt-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 flex items-center justify-center 
                        rounded-full bg-white/5 border border-white/10
                        hover:bg-white/10 hover:border-white/20
                        transition-all duration-300 group">
                        <BsArrowUpRight className="text-3xl text-white/70 
                          group-hover:text-white group-hover:scale-110
                          transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 flex items-center justify-center 
                        rounded-full bg-white/5 border border-white/10
                        hover:bg-white/10 hover:border-white/20
                        transition-all duration-300 group">
                        <BsGithub className="text-3xl text-white/70 
                          group-hover:text-white group-hover:scale-110
                          transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;