'use client';
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger 
                className="flex justify-center items-center"
                aria-label="Open mobile menu"
                onClick={() => setIsOpen(true)}
            >
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-gradient-to-b from-gray-900 to-black rounded-lg p-6 shadow-lg transition-transform duration-300 ease-in-out">
                <div className="mt-16 mb-8 text-center">
                    <Link href="/">
                        <div className="flex justify-center items-center">
                            <h1 className="text-3xl font-semibold text-white">
                                M
                                <span className="text-accent ml-1">.</span>Zohaib
                            </h1>
                        </div>
                    </Link>
                </div>

                <nav className="flex flex-col gap-6 justify-center items-center">
                    {Links.map((link) => (
                        <Link 
                            href={link.path} 
                            key={link.path} 
                            className={`${
                                link.path === pathname 
                                    ? "text-accent font-bold border-b-2 border-accent" 
                                    : "text-white/70"
                            } text-xl capitalize hover:text-white transition-all duration-300 hover:border-b-2 hover:border-white`}
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;