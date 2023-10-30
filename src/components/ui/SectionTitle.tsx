type SectionTitleProps = {
   title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
   return (
     <>
       <h3
         data-aos="fade-right"
         data-aos-delay="500"
         className="uppercase md:text-3xl text-xl sm:text-2xl font-bold mb-8 relative"
       >
         {title}
         <span
           data-aos="flip-up"
           data-aos-delay="700"
           className="uppercase md:text-6xl text-3xl sm:text-4xl font-bold mb-4 absolute top-3 opacity-10 -left-4"
         >
           {title}
         </span>
       </h3>
     </>
   );
};

export default SectionTitle;