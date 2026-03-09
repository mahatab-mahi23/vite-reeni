import React from "react";
import Laptop1 from '../../assets/image/laptop1.png'
import Laptop2 from '../../assets/image/laptop2.png'
import Mobile from '../../assets/image/mobile.png'


const Branding = () => {
  const blogData = [
    {
      id: 1,
      author: "Mesbah",
      date: "April 10",
      title: "Let's bring your ideas to life! Contact me, and let's",
      link: Laptop1,
    },
    {
      id: 2,
      author: "Mesbah",
      date: "April 10",
      title: "Inspiring the World, One Project at a Time for the man",
      link: Laptop2,
    },
    {
      id: 3,
      author: "Mesbah",
      date: "April 10",
      title: "Each one showcases my approach and dedication man",
      link: Mobile,
    },
  ];
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container px-4">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="text-primary font-primary font-bold uppercase tracking-widest text-sm">
              Blog and News
            </span>
            <h2 className="text-heading font-primary text-4xl md:text-5xl font-bold mt-4 leading-tight max-w-2xl mx-auto">
              Elevating Personal Branding the through Powerful Portfolios
            </h2>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl"
              >
                
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                 
                  <img
                    src={blog.link}
                    alt="Blog cover"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

             
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 shadow-sm">
                    <div className="flex items-center gap-1.5 text-[13px] font-secondary font-medium text-heading">
                      <span className="text-primary text-xs">●</span>
                      {blog.author}
                    </div>
                    <div className="w-1 h-3 bg-gray-300"></div>
                    <div className="flex items-center gap-1.5 text-[13px] font-secondary font-medium text-heading">
                      {blog.date}
                    </div>
                  </div>
                </div>

          
                <div className="p-8">
                  <h3 className="font-primary text-heading text-2xl font-bold mb-6 leading-snug group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <a
                    href={blog.link}
                    className="inline-flex items-center gap-2 font-primary text-sm font-bold uppercase tracking-widest text-para hover:text-primary transition-colors group/link"
                  >
                    Read More
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      &gt;
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Branding;
