import { motion, AnimatePresence } from "framer-motion";

const stairAnimation = { 
    initial: {
        top: "0%", 
    }, 
    animate: { 
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }, 
};

const reverseIndex = (index: number): number => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs: React.FC = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-gradient-to-b from-black to-gray-900 relative"
                />
                
            ))}
        </>
    );
}

export default Stairs;
{/* can also use white instead of gradient */}