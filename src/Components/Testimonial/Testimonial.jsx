import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = () => {
  const testimonials = [
    {
      text: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skilA personal portfolio is a curated collection of an individual's professional work, showcasing their skills, showcasing their skills.",
      author: "Cameron Williamson",
      role: "UI/UX Designer",
    },
    {
      text: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skilA personal portfolio is a curated collection of an individual's professional work, showcasing their skills, showcasing their skills.",
      author: "Leslie Alexander",
      role: "UI/UX Designer",
    },
  ];
  return (
    <>
      <section className="bg-white py-24 px-4 font-secondary">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Our Testimonial
            </span>
            <h2 className="text-heading font-primary text-4xl md:text-5xl font-bold mt-4 max-w-xl mx-auto leading-tight">
              Enhancing Collaboration between Remote
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="p-10 md:p-14 rounded-2xl bg-[#F8F9FA] border border-gray-100 shadow-red-line flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
              >
                <div>
                  <RiDoubleQuotesL className="text-primary text-7xl mb-6 scale-x-[-1]" />

                  <p className="text-para font-inter text-lg leading-relaxed mb-10">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div>
                    <h4 className="text-heading font-primary text-xl font-bold">
                      {item.author}
                    </h4>
                    <p className="text-para font-inter text-sm italic">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
