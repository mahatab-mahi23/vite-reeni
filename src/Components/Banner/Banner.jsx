import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
// Ensure this path is correct based on your folder structure
import banner from "../../assets/image/banner.png"; 
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="lg:pb-24 pb-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-between items-start relative bg-white">
          
          {/* Main Hero Image - Centered absolutely */}
          <img
            className="lg:w-[630px] w-[350px] lg:h-auto h-auto left-1/2 lg:top-0 -top-40 -translate-x-1/2 absolute z-10 object-contain"
            src={banner}
            alt="Brooklyn Simmons"
          />

          {/* Left Column: Greeting & CTA */}
          <div className="lg:w-[30%] w-full lg:mt-52 mt-80 relative z-20">
            <h2 className="lg:text-[28px] text-[20px] text-heading font-bold font-rajdhani uppercase leading-tight">
              Hello i’m
            </h2>
            <h1 className="lg:text-[90px] text-[42px] md:text-[70px] text-heading font-bold font-rajdhani lg:leading-[100px] leading-tight">
              Brooklyn Simmons
            </h1>
            <button className="px-8 py-4 bg-primary flex items-center gap-2 rounded-full text-white font-medium font-secondary mt-8 cursor-pointer hover:bg-opacity-90 transition-all shadow-lg">
              View Portfolio <MdArrowForward />
            </button>
          </div>

          {/* Right Column: About & Socials */}
          <div className="lg:w-[25%] w-full lg:mt-52 mt-12 relative z-20">
            <h3 className="text-[18px] text-heading font-semibold font-rubik uppercase tracking-wider">
              About Me
            </h3>
            <p className="text-[16px] text-gray-600 font-normal font-rubik leading-relaxed lg:mt-5 mt-3">
              A personal <span className="text-primary font-medium">portfolio</span> is a collection of your work, achievements, and skills that <span className="text-primary font-medium">web design</span> highlights in your career.
            </p>

            <div className="mt-10">
              <h4 className="text-[16px] text-heading font-medium font-rubik">
                Find me on
              </h4>
              <div className="flex items-center gap-3 mt-4">
                {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, index) => (
                  <div 
                    key={index} 
                    className="p-3.5 bg-gray-100 text-heading rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer shadow-sm"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Text (Outline) */}
        <div className="relative mt-20 hidden lg:block select-none pointer-events-none">
          <h2 
            className="text-center text-[180px] font-bold font-rajdhani opacity-5 uppercase"
            style={{ WebkitTextStroke: "2px #333", color: "transparent" }}
          >
            WEB DESIGN
          </h2>
          <h3 
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 text-[150px] font-bold font-rajdhani opacity-10 uppercase text-primary "
            style={{ WebkitTextStroke: "1px #ff6b6b", color: "transparent" }}
          >
            WEB DESIGN
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;