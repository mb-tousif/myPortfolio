import React from 'react'
import ShowCase from './ShowCase';
import Image from 'next/image';
import { FaLaptopCode, FaTools } from 'react-icons/fa';
import HeroImage from '@/assets/cv.png';
import SectionTitle from './SectionTitle';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-16">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Welcome to My Site
        </h1>
        <p className="text-2xl text-gray-800 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl mt-8 py-4 px-8 rounded-lg">
          Get Started
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
