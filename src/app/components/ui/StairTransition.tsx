'use client';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from './Stairs';

const StairTransition: React.FC = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
            >
                <Stairs />
            </motion.div>
        </AnimatePresence>
    );
}

export default StairTransition;
