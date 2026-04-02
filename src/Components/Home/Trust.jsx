import React from "react";

export default function TrustedSection() {
  const logos = ["TIME", "Bloomberg", "Fast Company", "TechCrunch"];

  return (
    <section className="bg-[#020617] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 flex justify-center">
      
      {/* Card */}
      <div className="relative w-full max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-10 text-center overflow-hidden">

        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 blur-2xl opacity-40 pointer-events-none"></div>

        <div className="relative z-10">
          
          {/* Heading */}
          <h2 className="text-white text-base sm:text-lg md:text-2xl font-medium mb-2">
            Trusted by Industry Leaders
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10">
            Recognized for innovation and excellence
          </p>

          {/* Logos */}
          <div className="
            grid grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-6 sm:gap-8 md:gap-10 
            items-center justify-items-center
          ">
            {logos.map((logo, index) => (
              <span
                key={index}
                className="text-gray-500 text-sm sm:text-base opacity-70 hover:opacity-100 transition duration-300 cursor-pointer"
              >
                {logo}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}