import React from "react";
import bgImage from "../../assets/JPG/expert-img.jpg";

const Fatima = () => {
  return (
    <>
    <section className="py-20">
  <div className="container mx-auto px-7.5">
    <div className="flex flex-col md:flex-row gap-7.5 md:gap-17.5 items-stretch">
      
      <div className="flex-1">
        <img 
          src={bgImage} 
          alt="Expert" 
          className="w-full h-full object-cover rounded-[20px]" 
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <p className="font-primary font-bold text-[32px] leading-10.5 text-heading ">
          Experiences
        </p>
        
        <div className="mt-8">
          <p className="font-secondary font-medium text-4 leading-7 text-primary ">
            experience
          </p>
          <h3 className="my-3.75 font-primary font-bold text-[24px] leading-7.5 text-heading ">
            Fatima Asrafy
          </h3>
          <p className="font-primary font-medium text-heading text-[18px] leading-6.75">
            UI/UX Designer
          </p>
          <p className="mt-4 font-normal font-secondary text-para text-[16px] leading-7.5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum desi dolore eu fugiat nulla pariatu Duis aute irure
          </p>
        </div>

        <div className="mt-[31.39px] md:mt-12.5">
          <p className="font-secondary font-medium text-4 leading-7 text-primary ">
            experience
          </p>
          <h3 className="my-3.75 font-primary font-bold text-[24px] leading-7.5 text-heading ">
            Fatima Asrafy
          </h3>
          <p className="font-primary font-medium text-heading text-[18px] leading-6.75">
            UI/UX Designer
          </p>
          <p className="mt-4 font-normal font-secondary text-para text-[16px] leading-7.5">
            Interested in working together? Let’s bring your ideas to life!
            Contact me, and let’s start building something.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Fatima;