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
        <Image
          src={HeroImage}
          alt="Picture of the Developer"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}
