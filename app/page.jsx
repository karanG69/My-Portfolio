'use client';
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/assets/assets/ATS_CV.pdf'; // Adjust the path to your PDF file
      link.download = 'CV.pdf'; // Specify the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 text-5xl xl:text-6xl mb-6">
              Hello, I'm <br />
              <span className="text-accent">Karan Gupta</span>
            </h1>
            <p className="max-w-[600px] mb-8 text-white/80">
              I excel at crafting elegant digital experiences and am proficient
              in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-sm xl:text-base"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-lg xl:text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-4 xl:gap-6"
                  iconStyles="w-8 h-8 xl:w-9 xl:h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
