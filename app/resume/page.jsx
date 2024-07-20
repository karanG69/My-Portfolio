"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa';

import{
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Karan Gupta',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 7251874562',
    },
    {
      fieldName: 'Expirience',
      fieldValue: '12+ Years',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'baniyakaran000@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi',
    },
  ],
};

const experience = {
  icon: '/assets/assets/resume/badge.svg',
  title: 'My experiences',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  items: [
    {
      company: "Texh Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2020 - 2021",
    },
  ],
};

const education = {
  icon: '/assets/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  items: [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech CSE",
      duration: "2021 - 2025",
    },
    {
      institution: "St. John's Sr. Sec. School",
      degree: "10+2",
      duration: "2020 - 2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";


import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item,index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left'>
                            {item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item,index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left'>
                            {item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> 

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {skills.description}
                </p>
              </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                    {skills.skillList.map((skill,index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
              </div>
            </TabsContent> 

            {/* about */}
            <TabsContent 
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;