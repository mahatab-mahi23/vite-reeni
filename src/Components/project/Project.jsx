import React from "react";
import UserImg from "../../assets/svg/user-image.svg";

const Project = () => {
  const items = [
    {
      id: "01.",
      title: "A Portfolio of Creativity",
      desc: "Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance and efficiency.",
    },
    {
      id: "02.",
      title: "My Portfolio of Innovation",
      desc: "My work is driven by the belief that thoughtful design and strategic planning can empower brands and transform businesses.",
    },
    {
      id: "03.",
      title: "A Showcase of My Projects",
      desc: "In this portfolio, you’ll find a curated selection of projects that highlight my skills in responsive web design and development.",
    },
  ];
  return (
    <section className="container mx-auto px-4">
      <div>
        <p className="mt-15 md:mt-30 font-secondary font-medium text-base leading-7 text-primary text-center ">Latest Service</p>
        <h2 className=" my-1.25 font-primary font-bold text-[48px] leading-15 text-heading text-center ">Inspiring The World One Project</h2>
        <p className="w-88.5 md:w-156.75 mx-auto font-secondary font-normal text-[16px] leading-6.5 text-para text-center ">
          Business consulting consultants provide expert advice and guida
          businesses to help them improve their performance, efficiency, and
          organizational
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-6.25 md:gap-21.25 mt-7.5">
        <div className="w-full md:w-1/2 flex flex-col gap-7.5">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-154.5 bg-[#F4F4F4] rounded-[20px] shadow-red-line py-7 md:py-8.5 px-6 md:px-9.5"
            >
              <div className="flex items-start gap-3.75">
                <p className="font-primary font-bold text-[24px] leading-7.5 shrink-0">
                  {item.id}
                </p>
                <div>
                  <p className="font-primary font-bold text-[24px] text-heading leading-7.5 mb-5.5">
                    {item.title}
                  </p>
                  <p className="font-secondary font-normal text-[16px] text-para leading-6.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={UserImg}
            alt="User-Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
