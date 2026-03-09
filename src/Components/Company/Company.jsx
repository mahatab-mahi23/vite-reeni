import React from "react";
// Importing the actual image assets
import Amazon from "../../assets/company-logo/amazon.png";
import Asana from "../../assets/company-logo/asana.png";
import Framer from "../../assets/company-logo/framer.png";
import Linear from "../../assets/company-logo/linear.png";
import Medium from "../../assets/company-logo/medium.png";
import Notion from "../../assets/company-logo/notion.png";
import Slack from "../../assets/company-logo/slack.png";
import Upwork from "../../assets/company-logo/upwork.png";

const Company = () => {
  const logos = [
    { name: "Linear", src: Linear },
    { name: "Framer", src: Framer },
    { name: "Notion", src: Notion },
    { name: "Slack", src: Slack },
    { name: "Medium", src: Medium },
    { name: "Upwork", src: Upwork },
    { name: "Amazon", src: Amazon },
    { name: "Asana", src: Asana },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Container width is handled by your CSS:
        md:max-w-[1275px] max-w-[390px] mx-auto 
      */}
      <div className="container px-4">
        <div
          className="
          grid 
          grid-cols-1           
          md:grid-cols-4       
          border-t border-l border-[#D9DDE0]
        "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center 
                h-40 p-8 
                border-r border-b border-[#D9DDE0] 
                transition-all duration-300 
                group hover:bg-gray-50/50
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="
                  max-h-10 w-auto object-contain 
                  grayscale opacity-50 
                  group-hover:grayscale-0 group-hover:opacity-100 
                  transition-all
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
