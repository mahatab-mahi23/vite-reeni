import React from "react";
import Wd from "../../assets/svg/webDesign.svg";
import Ui from "../../assets/svg/UI.svg";
import Wc from "../../assets/svg/webSc.svg";
import Mr from "../../assets/svg/marketing.svg";

const Service = () => {
  const servicesData = [
    { id: 1, img: Wd, title: "Web Design", count: "120 Projects" },
    { id: 2, img: Ui, title: "UI/UX Design", count: "85 Projects" },
    { id: 3, img: Wc, title: "Web Research", count: "50 Projects" },
    { id: 4, img: Mr, title: "Digital Marketing", count: "210 Projects" },
  ];
  return (
    <>
      <section>
        <div className="container  md:py-22.5 py:7.5 ">
          <div className="flex  px-3.75 md:px-0 flex-col md:flex-row  gap-7.5 md:justify-between    ">
            {servicesData.map((item) => (
              <div
                className={`
      border border-primary/16 rounded-[20px] flex flex-col items-center justify-center
      ${item.id === 3 ? "px-30.25 md:px-[77.3px]" : "px-30.25 md:px-[89.13px]"}
    `}
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="Web Design"
                  className="pt-7.75 md:pt-[43.6px]"
                />
                <p className="mt-7.5 font-primary font-bold text-6 leading-8.5 ">
                  {item.title}
                </p>
                <p className="mt-2.25 font-secondary font-normal text-base leading-6.5 pb-7.75 md:pb-10.25 ">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
