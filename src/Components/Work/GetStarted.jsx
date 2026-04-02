import React from "react";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="w-full bg-[#020617] py-12 flex justify-center">

      {/* CONTAINER */}
      <div className="w-full max-w-[1100px] px-6">

        {/* CARD */}
        <div className="
          w-full rounded-[24px] p-12 text-center
          border border-white/10
          bg-gradient-to-r from-[#1e3a8a]/40 to-[#065f46]/40
          shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        ">

          {/* CONTENT */}
          <div className="max-w-[640px] mx-auto">

            {/* TITLE */}
            <h1 className="text-[40px] md:text-[44px] font-medium text-white mb-4">
              Ready to Start Your Project?
            </h1>

            {/* SUBTEXT */}
            <p className="text-[15px] text-gray-300 mb-8">
              Let's collaborate and create something extraordinary that makes an impact.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-4">

              {/* PRIMARY BUTTON */}
              <button className="
                flex items-center gap-2
                px-6 py-2.5 rounded-md
                text-white text-[14px]
                bg-gradient-to-r from-[#2563eb] to-[#3b82f6]
                shadow-[0_0_30px_rgba(37,99,235,0.5)]
                hover:opacity-90 transition
              ">
                Get Started
                <ArrowRight size={16} />
              </button>

              {/* SECONDARY BUTTON */}
              <button className="
                px-6 py-2.5 rounded-md
                text-gray-300 text-[14px]
                bg-white/5 border border-white/10
                hover:bg-white/10 transition
              ">
                Our Process
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GetStarted;