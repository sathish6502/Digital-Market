import React from 'react'
import DigitalsolutionIcon from "../../assets/Service/Icons/digitalsolutionIcon.png"

const Digitalsolution = () => {
  return (
     <section className="relative w-full min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#000000] flex items-center justify-center px-4 overflow-hidden">
      
      {/* 🔥 Green Blur Background */}
      <div className="absolute w-[400px] h-[400px] bg-[#00D98C]/20 blur-[128px] rounded-full top-[-50px] left-1/2 -translate-x-1/2"></div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-[#0f172a] text-gray-300 px-4 py-1.5 rounded-full text-sm border border-gray-700">
            
            <img src={DigitalsolutionIcon} alt="icon" className="w-4 h-4" />

            Full-Service Digital Agency
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Premium Digital Solutions
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          From branding and UX design to AI-powered automation and marketing, 
          we transform brands with creative and intuitive digital solutions.
        </p>

      </div>
    </section>
  )
}

export default Digitalsolution