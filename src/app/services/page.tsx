"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

// Define TypeScript interface for service items
interface Service {
  num: string;
  title: string;
  desc: string;
  href: string;
}

// Array of services with type enforcement
const services: Service[] = [
  {
    num: "01",
    title: "Web Development",
    desc: "I create responsive, custom websites that enhance user experience and drive growth, from blogs to e-commerce.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Designing",
    desc: "I design intuitive, user-friendly UI/UX solutions that enhance engagement and drive results, tailored to your brand's needs.",
    href: "#",
  },
  {
    num: "03",
    title: "Logo Designing",
    desc: "I craft unique, memorable logos that effectively represent your brand and leave a lasting impression.",
    href: "#",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-screen  mt-12 py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="flex flex-col gap-16"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative w-full flex flex-col gap-8 rounded-2xl p-8 lg:p-10 
                bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm
                border border-white/10 hover:border-white/20
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Service Number */}
              <div className="absolute -top-8 right-8 text-8xl lg:text-9xl font-black 
                text-white/5 group-hover:text-white/10 transition-all duration-500">
                {service.num}
              </div>

              {/* Service Title and Link */}
              <div className="flex justify-between items-center space-y-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-white 
                  group-hover:text-white transition-all duration-300">
                  {service.title}
                </h2>
                
                <Link href={service.href}>
                  <div className="w-16 h-16 flex items-center justify-center 
                    rounded-full bg-white/5 border border-white/10
                    hover:bg-white/10 hover:border-white/20
                    transition-all duration-300 group">
                    <BsArrowDownRight className="text-3xl text-white/70 
                      group-hover:text-white group-hover:scale-110
                      transition-all duration-300" />
                  </div>
                </Link>
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-3xl
                group-hover:text-white/80 transition-all duration-300">
                {service.desc}
              </p>
            </div>
          
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
