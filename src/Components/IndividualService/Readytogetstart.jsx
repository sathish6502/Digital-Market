import React from 'react'

const Readytogetstart = () => {
  return (
     <div className="bg-[#020617] py-10 px-6 flex justify-center">
      <div className="mt-5 mb-10 max-w-3xl mx-auto min-h-[260px] p-8 md:p-12 rounded-xl 
bg-gradient-to-r from-[#0066FF]/20 to-[#00D98C]/20 backdrop-blur-md 
flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to Get Started?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Let’s discuss your project and how our website & UI/UX design services 
          can help you achieve your goals.
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium shadow-md">
          Start Your Project
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  )
}

export default Readytogetstart