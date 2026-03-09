import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const Collaboration = () => {
  const [activeCard, setActiveCard] = useState(1);

  const pricePlans = [
    {
      title: "Starter",
      price: "$ 5.00",
      period: "Per Month",
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
    {
      title: "Basic",
      price: "$ 230.00",
      period: "Per Month",
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "Marketing Platform",
        "24/7 Customer Support",
        "Life time support",
      ],
    },
    {
      title: "Premium",
      price: "$ 45.00",
      period: "Per Month",
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 px-4 font-secondary">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            My Price Plan
          </span>
          <h2 className="text-heading font-primary text-4xl md:text-5xl font-bold mt-4 max-w-xl mx-auto leading-tight">
            Enhancing Collaboration between Remote
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {pricePlans.map((plan, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                className={`p-10 rounded-2xl border transition-all duration-500 cursor-pointer hover:scale-105 group flex flex-col justify-between ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-red-line"
                    : "bg-[#F8F9FA] text-heading border-gray-200 shadow-red-line"
                }`}
              >
                <div>
                  <div className="mb-8">
                    <h3
                      className={`font-primary text-xl font-bold transition-colors duration-500 ${
                        isActive ? "text-white" : "text-heading"
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <p
                        className={`font-inter text-4xl font-bold transition-colors duration-500 ${
                          isActive ? "text-white" : "text-heading"
                        }`}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={`font-inter text-sm italic transition-colors duration-500 ${
                          isActive ? "text-white/80" : "text-para"
                        }`}
                      >
                        {plan.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <FaCheckCircle
                          className={`text-lg transition-colors duration-500 ${
                            isActive ? "text-white" : "text-primary"
                          }`}
                        />
                        <span
                          className={`font-inter text-base transition-colors duration-500 ${
                            isActive ? "text-white" : "text-para"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={`font-primary font-bold px-10 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-500 active:scale-95 ${
                    isActive
                      ? "bg-white text-primary"
                      : "bg-white text-heading border border-gray-200 group-hover:border-transparent"
                  }`}
                >
                  Get Started <BsArrowRightShort className="text-3xl" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;