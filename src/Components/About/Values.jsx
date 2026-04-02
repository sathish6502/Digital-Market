import React from "react";

import targetIcon from "./../../assets/About/Logo1.jpg";
import aiIcon from "./../../assets/About/Logo2.jpg";
import heartIcon from "./../../assets/About/Logo3.jpg";
import usersIcon from "./../../assets/About/Logo4.jpg";

const values = [
  {
    icon: targetIcon,
    title: "User-First Philosophy",
    desc: "Research-backed design that prioritizes user needs and drives engagement through seamless UX.",
  },
  {
    icon: aiIcon,
    title: "AI Integration",
    desc: "24/7 automation, intelligent support, and AI-enhanced creative services for maximum efficiency.",
  },
  {
    icon: heartIcon,
    title: "Performance-Driven",
    desc: "Ongoing insights and optimization with measurable results through analytics and A/B testing.",
  },
  {
    icon: usersIcon,
    title: "Scalable Solutions",
    desc: "Built for future growth with flexible architecture that adapts to your evolving business needs.",
  },
];

const OurValues = () => {
  return (
    <section
      className="py-3 px-4 md:px-10 lg:px-10 
      bg-gradient-to-b from-[#020617] to-[#020617]"
    >
      {/* CARD */}
      <div
        className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-8 md:p-14
        bg-gradient-to-br from-[#878181b1]/60 via-[#878181b1]/20 to-[#878181b1]/60
        shadow-[0_8px_40px_rgba(255,255,255,0.05)]"
      >
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-lg text-white mb-3 md:mb-5">
            Our Values
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            The principles that guide everything we do
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* ICON BOX */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl 
                bg-gradient-to-br from-[#3b82f6] to-[#22c55e] mb-4 sm:mb-5 shadow-lg"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-white font-medium mb-2 text-sm sm:text-[15px]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-xs sm:text-[13.5px] leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;