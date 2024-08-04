import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/karanG69", name: "GitHub" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/karan-gupta-2716a0213/", name: "LinkedIn" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/baniyakaran/", name: "LeetCode" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/__karan_g__/", name: "Instagram" },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <TooltipProvider>
            <div className={containerStyles}>
                {socials.map((item, index) => {
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link href={item.path} className={iconStyles}>
                                    {item.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>{item.name}</span>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </div>
        </TooltipProvider>
    );
};

export default Socials;
