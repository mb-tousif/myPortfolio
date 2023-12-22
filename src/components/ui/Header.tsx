import React from 'react'

export default function Header() {
  return (
    <div className="w-full bg-header shadow-sm body-font container">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-primary title-font md:mb-0">
          &#60; 𝕯𝖊𝖛 𝕿𝖔𝖚𝖘𝖎𝖋 &#47;&#62;
        </a>
        <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <a href="#_" className="mr-5 font-medium hover:text-gray-900">
            Home
          </a>
          <a href="#_" className="mr-5 font-medium hover:text-gray-900">
            Project
          </a>
          <a href="#_" className="font-medium hover:text-gray-900">
            Blogs
          </a>
        </nav>
        <div className="items-center h-full">
          <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-[#1C315E] to-[#227C70]  relative gap-2 transition duration-300 hover:scale-105 text-primary shadow-glass ">
            RESUME
            <span className="animate-ping translate-[360deg] absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-[#092635] to-[#001B79] "></span>
          </button>
        </div>
      </div>
    </div>
  );
}
