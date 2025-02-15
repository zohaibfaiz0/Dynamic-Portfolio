'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./mobilenav";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-6 xl:py-8 
        transition-all duration-300 backdrop-blur-lg
        ${scrolled 
          ? 'bg-black/80 shadow-2xl shadow-accent/5' 
          : 'bg-gradient-to-b from-gray-900 to-black'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-4xl font-bold relative group"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
             from-emerald-400 via-[#00ff99] to-cyan-500 
              duration-300 group-hover:translate-x-1">
              M
            </span>
            <span className="text-accent inline-block transform transition-transform 
              duration-300 group-hover:scale-125">
              .
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
             from-emerald-400 via-[#00ff99] to-cyan-500 
              duration-300 group-hover:-translate-x-1">
              Zohaib
            </span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
  className="h-12 px-8 bg-gradient-to-r from-emerald-500 via-[#00ff99] to-cyan-600
    hover:bg-gradient-to-br hover:from-emerald-400 hover:via-[#00ff99]/90 hover:to-cyan-500 
    text-white/90 hover:text-white
    rounded-full text-lg font-medium
    shadow-lg shadow-[#00ff99]/20
    transition-all duration-500 ease-out
    hover:shadow-2xl hover:shadow-[#00ff99]/30
    hover:scale-[1.02] hover:-translate-y-1
    active:scale-95 active:shadow-inner
    focus:ring-2 focus:ring-[#00ff99]/50 focus:ring-offset-2 focus:ring-offset-black
    transform-gpu"
>
  Hire Me
</Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Animated border line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`absolute bottom-0 left-0 right-0 h-[1px] 
          bg-gradient-to-r from-transparent via-accent/50 to-transparent
          ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      />
    </motion.header>
  );
};

export default Header;