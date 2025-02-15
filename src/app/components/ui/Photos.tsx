'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const Photo: React.FC = () => {
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
                className="relative"
            >
                {/* Image container with absolute positioning */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
                    className="relative w-[198px] h-[198px] xl:w-[298px] xl:h-[298px] mix-blend-lighten"
                >
                    <Image
                        src="/assets/istock-removebg-preview.png"
                        priority
                        quality={100}
                        fill
                        alt="Image"
                        className="object-contain"
                    />
                </motion.div>

                {/* Animated Circle */}
                <motion.svg
                    className="absolute top-0 left-0 w-[200px] xl:w-[300px] h-[200px] xl:h-[300px]"
                    fill="transparent"
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="150"
                        cy="150"
                        r="140"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",  
                                "16 25 92 72",   
                                "4 250 22 22"    
                            ],
                            rotate: [120, 360],  
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
