import React from "react";

const Skill = () => {
  const skillsData = [
    { name: "PHOTOSHOP", percentage: 100 },
    { name: "FIGMA", percentage: 95 },
    { name: "ADOBE XD", percentage: 60 },
    { name: "ADOBE ILLUSTRATOR", percentage: 70 },
  ];

  return (
    <>
      <section className="container mx-auto px-4 md:px-8 mt-12 md:mt-22.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          <div>
            <h2 className="text-2xl md:text-[32px] leading-tight md:leading-10.5 font-bold font-primary text-heading mb-6 md:mb-8 tracking-wide">
              Design Skill
            </h2>
            <div className="mt-6 md:mt-7.5 flex flex-col gap-4 md:gap-6">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs md:text-sm font-semibold text-para font-inter tracking-wider">
                      {skill.name}
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-heading font-inter">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-[32px] leading-tight md:leading-10.5 font-bold font-primary text-heading mb-6 md:mb-8 tracking-wide">
              Development Skill
            </h2>
            <div className="mt-6 md:mt-7.5 flex flex-col gap-4 md:gap-6">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs md:text-sm font-normal text-heading font-secondary leading-tight md:leading-[17.5px] tracking-wider">
                      {skill.name}
                    </span>
                    <span className="text-xs md:text-sm font-normal text-heading font-secondary leading-tight md:leading-[24.5px]">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                  
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Skill;
