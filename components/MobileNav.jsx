"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CgMenuGridR className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-center items-center min-h-screen">
                <div className="text-center text-2xl mb-16">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Karan<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname &&
                                "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`}
                            aria-current={link.path === pathname ? "page" : undefined}
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
