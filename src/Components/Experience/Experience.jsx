import React from "react";

const Experience = () => {
  const stats = [
    { value: "20K+", label: "Our Project Complete", padding: "px-[61.12px]" },
    { value: "10K+", label: "Our Natural Products", padding: "px-[67.62px]" },
    { value: "200+", label: "Clients Reviews", padding: "px-20.5" },
    { value: "1000+", label: "Our Satisfied Clients", padding: "px-[71.12px]" },
  ];
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8.5">
            <div className="w-full lg:w-1/2 bg-[#F4F4F4] py-10 px-6 md:px-13 pb-12.75 rounded-[20px] flex flex-col  items-start text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-start md:items-center gap-4 lg:gap-11">
                <h2 className="font-inter font-bold text-[100px] md:text-[167px] leading-tight md:leading-[183.7px] text-primary">
                  25
                </h2>
                <h2 className=" text-left md:text-center md:items-center  w-[320px] md:w-54 text-[26px] md:text-[48px]  font-primary font-bold text-heading text-base leading-[33.8px] md:leading-12 ">
                  Years Of Experience
                </h2>
              </div>

              <p className="text-left  mt-6 lg:mt-3 font-secondary font-normal text-[16px] leading-6.5 text-heading  w-[320px] md:w-129.5 ">
                Business consulting consultants provide expert advice and guida
                the a businesses to help theme their performance efficiency
              </p>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4.25">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`py-10 border flex flex-col items-center justify-center rounded-[20px] shadow-red-line bg-[#F8F8F8] px-6 md:${stat.padding}`}
                >
                  <h2 className="font-inter font-bold text-heading text-[40px] md:text-[48px] leading-tight">
                    {stat.value}
                  </h2>
                  <p className="font-secondary font-normal text-base text-para mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
