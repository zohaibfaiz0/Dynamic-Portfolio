"use client";
import React, { JSX } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";
import { motion } from "framer-motion";

interface ContactInfo {
    title: string;
    icon: JSX.Element;
    value: string;
}

const info: ContactInfo[] = [
    { title: "Phone", icon: <FaPhoneAlt />, value: "+92 311 262 0503" },
    { title: "Email", icon: <FaEnvelope />, value: "zohaibfaiz96@gmail.com" },
    { title: "Address", icon: <FaMapMarkerAlt />, value: "Orangi Town, Karachi, Pakistan." },
];

const Contact: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn", delay: 2.4 } }}
            className="relative min-h-screen bg-black py-24"
        >
            {/* Background gradient elements */}
            <div className="" />
            <div className="" />

            <div className="container mt-12 relative mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col xl:flex-row gap-16">
                    {/* Form Section */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="relative overflow-hidden flex flex-col gap-8 p-8 lg:p-12 
                            bg-white/10 backdrop-blur-xl rounded-3xl
                            border border-white/20 shadow-2xl">
                            {/* Decorative corner accent */}
                            <div className="" />

                            <div className="space-y-4">
                                <h3 className="text-5xl font-bold text-white">
                                    Let's Work <span className="text-accent">Together</span>
                                </h3>
                                <p className="text-xl text-white/70">
                                    Ready to bring your vision to life? Let's collaborate and create something amazing.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="First Name" 
                                    className="h-12 bg-white/10 border-white/20 rounded-xl text-white 
                                        placeholder:text-white/50 focus:bg-white/20" />
                                <Input type="text" placeholder="Last Name"
                                    className="h-12 bg-white/10 border-white/20 rounded-xl text-white 
                                        placeholder:text-white/50 focus:bg-white/20" />
                                <Input type="email" placeholder="Email Address"
                                    className="h-12 bg-white/10 border-white/20 rounded-xl text-white 
                                        placeholder:text-white/50 focus:bg-white/20" />
                                <Input type="tel" placeholder="Phone Number"
                                    className="h-12 bg-white/10 border-white/20 rounded-xl text-white 
                                        placeholder:text-white/50 focus:bg-white/20" />
                            </div>

                            <Select>
                                <SelectTrigger className="h-12 bg-white/10 border-white/20 rounded-xl text-white">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-900/90 backdrop-blur-xl border-white/20">
                                    <SelectGroup>
                                        <SelectLabel className="text-accent">Select a service</SelectLabel>
                                        <SelectItem value="web" className="focus:bg-white/10">Web Development</SelectItem>
                                        <SelectItem value="uiux" className="focus:bg-white/10">UI/UX Design</SelectItem>
                                        <SelectItem value="logo" className="focus:bg-white/10">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea placeholder="Type Your Message" 
                                className="min-h-[200px] bg-white/10 border-white/20 rounded-xl text-white 
                                    placeholder:text-white/50 focus:bg-white/20" />

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
                              Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 order-1 xl:order-none">
                        <div className="space-y-16">
                            {/* Contact Info */}
                            <ul className="space-y-8">
                                {info.map((item, index) => (
                                    <li key={index} 
                                        className="group relative overflow-hidden flex items-center gap-6 p-6
                                            bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20
                                            transition-all duration-500 hover:bg-white/20">
                                        <div className="relative z-10 flex items-center justify-center w-16 h-16
                                            bg-accent/20 rounded-xl group-hover:bg-accent/30 
                                            transition-all duration-500">
                                            <div className="text-2xl text-accent group-hover:scale-110 
                                                transition-all duration-500">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="relative z-10 flex-1">
                                            <p className="text-lg text-white/60 mb-1">{item.title}</p>
                                            <h3 className="text-xl font-medium text-white">{item.value}</h3>
                                        </div>
                                        {/* Decorative gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </li>
                                ))}
                            </ul>

                            {/* Social Links */}
                            <div className="space-y-6">
                                <h4 className="text-2xl font-bold text-white">Follow Us</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com" },
                                        { icon: <FaFacebook />, label: "Facebook", href: "https://www.facebook.com" },
                                        { icon: <FaGithub />, label: "GitHub", href: "https://github.com" },
                                        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com" }
                                    ].map((social, index) => (
                                        <a key={index} 
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 p-4
                                                bg-white/10 backdrop-blur-xl rounded-xl border border-white/20
                                                hover:bg-white/20 transition-all duration-300">
                                            <div className="p-2 rounded-lg bg-accent/20 text-accent 
                                                group-hover:scale-110 transition-transform duration-300">
                                                {social.icon}
                                            </div>
                                            <span className="text-white group-hover:text-accent 
                                                transition-colors duration-300">
                                                {social.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;