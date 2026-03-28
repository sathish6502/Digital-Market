import React from 'react'
import { Layers, ArrowRight } from "lucide-react";
import IndividualImg from "../../assets/Service/Images/individualimg.png";

const Websiteuiux = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#020617] via-[#020617] to-[#000000] flex items-center px-4">
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-left">
          
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0066FF]/30 to-[#00D98C]/30 mb-6">
            <Layers className="text-white w-5 h-5" />
          </div>

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Website & UI/UX <br /> Design
          </h1>

          {/* Highlight Text */}
          <p className="text-[#00D98C] mt-4 text-sm md:text-base font-medium">
            Research-Led Design That Drives Results
          </p>

          {/* Description */}
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-lg leading-relaxed">
            We create custom website designs aligned with your brand identity,
            featuring user-centered layouts, responsive interfaces, and
            research-led UX including heatmaps, journey mapping, content
            strategy, and SEO optimization.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm transition">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm border border-gray-600 transition">
              View Examples
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={IndividualImg}
            alt="hero"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Websiteuiux