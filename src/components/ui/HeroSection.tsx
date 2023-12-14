import React from 'react'
import ShowCase from './ShowCase';
import Image from 'next/image';
import { FaLaptopCode, FaTools } from 'react-icons/fa';
import HeroImage from '@/assets/cv.png';
import SectionTitle from './SectionTitle';

export default function HeroSection() {
  return (
    <div className="grid items-center gap-10 min-h-[650px] justify-items-center md:justify-items-end grid-cols-1 md:grid-cols-2" >
      <SectionTitle title="About Me" />
      <div className="relative">
        <ShowCase
          icon={<FaLaptopCode />}
          title="Front-end"
          style="top-[30%] left-5"
          anim_delay={{ animationDelay: "0.5s", animationDuration: "9s" }}
        />
        {/* <Image
          src={HeroImage}
          alt="Shahrear ahamed Hero Image with blazer"
          height={500}
          width={500}
        /> */}

        <ShowCase
          icon={<FaTools />}
          title="Back-end"
          style="right-0 top-[25%]"
          anim_delay={{ animationDelay: "1.5s", animationDuration: "10s" }}
        />

        <ShowCase
          text="2y+"
          title="Coding Exp."
          style="top-[70%] left-0 sm:top-[35%] sm:-left-[10px] md:top-[85%] md:left-[30%]"
          anim_delay={{ animationDelay: "1s", animationDuration: "8s" }}
        />
      </div>
    </div>
  );
}
