import React from 'react'
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { LiaPenFancySolid } from "react-icons/lia";

const Design = () => {
  return (
    <>
      <section className="bg-[#F8F9FA]  py-30 px-4">
        <div className="container mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-primary font-secondary font-bold leading-7  tracking-widest text-normal">My Skill</span>
            <h2 className="text-heading font-primary text-[48px] md:text-[48px] font-bold mt-1.25 max-w-2xl mx-auto md:mx-0 leading-15">
              Elevated Designs Personalized the best Experiences
            </h2>
          </div>

          <div className="flex flex-col border-t border-gray-200">
            
            <div className="group bg-transparent hover:bg-primary p-10 flex flex-col md:flex-row items-center justify-between transition-all duration-300 border-b border-gray-200 cursor-pointer text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 md:w-1/3">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-gray-300 group-hover:border-white/30 flex items-center justify-center bg-white group-hover:bg-white/10 shrink-0 transition-all duration-300">
                  <span className="text-heading group-hover:text-white text-4xl md:text-5xl transition-colors">
                    <LuWarehouse />
                  </span>
                </div>
                <div>
                  <h3 className="text-heading group-hover:text-white font-primary text-3xl font-bold transition-colors">
                    Ui/Visual Design
                  </h3>
                  <p className="text-para group-hover:text-white/80 font-inter text-base italic mt-1 transition-colors">21 Done</p>
                </div>
              </div>
              
              <p className="text-para group-hover:text-white font-inter text-lg leading-relaxed md:max-w-md my-8 md:my-0 transition-colors">
                My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands.
              </p>

              <a href="#" className="text-heading group-hover:text-white font-primary font-bold uppercase text-sm flex items-center gap-2 transition-colors">
                Read More <span className="text-xl md:text-lg">&gt;</span>
              </a>
            </div>

            <div className="group bg-transparent hover:bg-primary p-10 flex flex-col md:flex-row items-center justify-between transition-all duration-300 border-b border-gray-200 cursor-pointer text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 md:w-1/3">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-gray-300 group-hover:border-white/30 flex items-center justify-center bg-white group-hover:bg-white/10 shrink-0 transition-all duration-300">
                  <span className="text-heading group-hover:text-white text-4xl md:text-5xl transition-colors">
                    <MdOutlineDateRange />
                  </span>
                </div>
                <div>
                  <h3 className="text-heading group-hover:text-white font-primary text-3xl font-bold transition-colors">
                    UX Research
                  </h3>
                  <p className="text-para group-hover:text-white/80 font-inter text-base italic mt-1 transition-colors">21 Done</p>
                </div>
              </div>
              
              <p className="text-para group-hover:text-white font-inter text-lg leading-relaxed md:max-w-md my-8 md:my-0 transition-colors">
                In this portfolio, you'll find a curated selection of projects that highlight my skills in responsive web design.
              </p>

              <a href="#" className="text-heading group-hover:text-white font-primary font-bold uppercase text-sm flex items-center gap-2 transition-colors">
                Read More <span className="text-xl md:text-lg">&gt;</span>
              </a>
            </div>

            <div className="group bg-transparent hover:bg-primary p-10 flex flex-col md:flex-row items-center justify-between transition-all duration-300 border-b border-gray-200 cursor-pointer text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 md:w-1/3">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-gray-300 group-hover:border-white/30 flex items-center justify-center bg-white group-hover:bg-white/10 shrink-0 transition-all duration-300">
                  <span className="text-heading group-hover:text-white text-4xl md:text-5xl transition-colors">
                    <LiaPenFancySolid />
                  </span>
                </div>
                <div>
                  <h3 className="text-heading group-hover:text-white font-primary text-3xl font-bold transition-colors">
                    Motion Design
                  </h3>
                  <p className="text-para group-hover:text-white/80 font-inter text-base italic mt-1 transition-colors">20 Done</p>
                </div>
              </div>
              
              <p className="text-para group-hover:text-white font-inter text-lg leading-relaxed md:max-w-md my-8 md:my-0 transition-colors">
                Each project here showcases my commitment to excellence and adaptability, tailored to meet each client's unique needs.
              </p>

              <a href="#" className="text-heading group-hover:text-white font-primary font-bold uppercase text-sm flex items-center gap-2 transition-colors">
                Read More <span className="text-xl md:text-lg">&gt;</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Design