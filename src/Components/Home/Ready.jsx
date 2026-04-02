import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <div className="bg-[#020617] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 flex justify-center">
      
      {/* Card */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 sm:px-8 md:px-10 py-10 sm:py-12 text-center overflow-hidden">

        {/* Glow INSIDE card */}
        <div className="absolute left-0 top-0 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-green-500/20 blur-[80px] sm:blur-[100px]"></div>
        <div className="absolute right-0 top-0 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-blue-500/20 blur-[80px] sm:blur-[100px]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-transparent opacity-40 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">

          {/* Heading */}
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-medium mb-4 leading-snug">
            Ready to Start Your Project?
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8">
            Let’s collaborate to bring your vision to life with expert design and development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

            {/* Primary */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2.5 rounded-lg text-sm font-medium shadow-lg shadow-blue-600/20">
              Get Started
              <ArrowRight size={16} />
            </button>

            {/* Secondary */}
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 transition px-5 py-2.5 rounded-lg text-sm text-gray-300 border border-white/10">
              See Our Process
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}