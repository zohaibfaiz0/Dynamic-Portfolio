'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Links: { name: string; path: string }[] = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const Nav: React.FC = () => {
    const pathname = usePathname();
    
    return (
        <nav className="flex gap-8">
            {Links.map((linkItem) => (
                <Link
                    href={linkItem.path}
                    key={linkItem.path}
                    className="relative group"
                >
                    <motion.span
                        className={`capitalize font-medium transition-colors duration-300
                            ${linkItem.path === pathname
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00ff99] to-cyan-500"
                                : "text-white/80 hover:text-white"
                            }`}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        {linkItem.name}
                    </motion.span>
                    
                    {/* Active indicator */}
                    {linkItem.path === pathname && (
                        <motion.div
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-[#00ff99] to-cyan-500"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                    )}
                    
                    {/* Hover indicator */}
                    <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r 
                            from-white/0 via-white/50 to-white/0 scale-x-0 group-hover:scale-x-100
                            transition-transform duration-300 origin-left"
                        style={{
                            opacity: linkItem.path === pathname ? 0 : 1
                        }}
                    />
                </Link>
            ))}
        </nav>
    );
};

export default Nav;