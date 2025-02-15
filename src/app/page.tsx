'use client';

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/app/components/ui/Photos";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface SocialLink {
  Icon: IconType;
  href: string;
}

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
        duration: 1.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1
      }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const socialLinks: SocialLink[] = [
    { Icon: FaInstagram, href: "https://www.instagram.com" },
    { Icon: FaFacebook, href: "https://www.facebook.com" },
    { Icon: FaGithub, href: "https://github.com/zohaibfaiz0" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-zohaib-920531310/" }
  ];

  if (!isClient) {
    return <div className="min-h-screen mt-12 bg-gradient-to-b from-black via-gray-900/50 to-gray-900" />;
  }

  return (
    <motion.section 
      className="min-h-screen mt-12 bg-gradient-to-b from-black via-gray-900/50 to-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col xl:flex-row items-center xl:justify-between py-12 xl:py-24 gap-12 xl:gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none gap-8 w-full xl:w-1/2"
            variants={fadeInUpVariants}
          >
            <motion.span 
              className="text-md md:text-lg font-semibold tracking-wide px-8 py-3 rounded-full 
                bg-gradient-to-r from-emerald-500/10 via-[#00ff99]/10 to-cyan-600/10
                border border-[#00ff99]/20 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(0, 255, 153, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00ff99] to-cyan-500">
                Next.js & Sanity Specialist | UI Architect
              </span>
            </motion.span>
            
            <motion.h1 
              className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Hey, I'm{' '}
              </motion.span>
              <motion.span 
                className="text-5xl bg-gradient-to-r from-emerald-400 via-[#00ff99] to-cyan-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Muhammad Zohaib Faiz
              </motion.span>
              <motion.span
                className="text-2xl md:text-3xl xl:text-4xl text-white/90"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 1 }}
              >
                , a frontend developer shaping seamless, high-performance web experiences.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
              variants={fadeInUpVariants}
              whileHover={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              Passionate about{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00ff99] to-cyan-500">
                Next.js
              </span> and{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00ff99] to-cyan-500">
                Sanity
              </span>,{' '}
              I craft interactive, responsive, and visually engaging websites.
              Let's turn your ideas into stunning digital experiences! ✨
            </motion.p>
            
            {/* Buttons & Social Links */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://drive.google.com/file/d/1mfUNHpmf9aevmMzkq3mnOJhjekrwL8bN/view?usp=sharing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group px-6 py-3 uppercase flex items-center gap-2
                      bg-gradient-to-r from-emerald-500/10 via-[#00ff99]/10 to-cyan-600/10
                      border border-[#00ff99]/20 rounded-full"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      Download CV
                    </motion.span>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiDownload className="text-xl" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-6"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full
                      bg-gradient-to-r from-emerald-500/10 via-[#00ff99]/10 to-cyan-600/10
                      border border-[#00ff99]/20"
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: "rgba(0, 255, 153, 0.3)",
                      boxShadow: "0 0 20px rgba(0, 255, 153, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <social.Icon className="text-2xl text-white/70 group-hover:text-[#00ff99] 
                      group-hover:scale-110 transition-all duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
             
          {/* Image */}
          <motion.div 
            className="order-1 xl:order-none w-full xl:w-1/2 flex justify-center relative"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="relative w-full max-w-md xl:max-w-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2,
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <Photo />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;