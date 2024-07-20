import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const socials = [
    {icon: <FaGithub/>, path:"https://github.com/karanG69"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/karan-gupta-2716a0213/"},
    {icon: <SiLeetcode />, path:"https://leetcode.com/u/baniyakaran/"},
    {icon: <FaInstagram/>, path:"https://www.instagram.com/__karan_g__/"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return ( 
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials