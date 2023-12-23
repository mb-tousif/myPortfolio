import Image from 'next/image';
import HeroImage from '@/assets/cv.png';
import SectionTitle from './SectionTitle';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col bg-[#272727e1] bg-fixed bg-parallax bg-cover h-96 justify-center items-center my-16">
        <h1 className="text-5xl font-bold text-primary leading-tight">
          Welcome to My Site
        </h1>
        <p className="text-2xl text-primary mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-header to-footer  relative gap-2 transition duration-300 hover:scale-105 text-primary shadow-glass">
          <span className="animate-ping translate-[360deg] w-3 h-3  rounded-full bg-[#093b18]"></span>
          Available for Hire
        </button>
      </div>
      <div className="grid items-center gap-10 min-h-[650px] justify-items-center md:justify-items-end grid-cols-1 md:grid-cols-2">
        <SectionTitle title="About Me" />
        <div className="relative">
          <Image
            src={HeroImage}
            alt="Picture of the Developer"
            height={500}
            width={500}
          />
        </div>
      </div>
    </>
  );
}
