import React from 'react'

const Readytogetstart = () => {
  return (
    <div className="bg-[#020617] py-10 px-6 flex justify-center">
      
      <div className="mt-5 mb-10 w-full max-w-6xl mx-auto min-h-[260px] p-8 md:p-12 rounded-xl 
      bg-gradient-to-r from-[#0066FF]/20 to-[#00D98C]/20 backdrop-blur-md 
      flex flex-col items-center justify-center text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Let’s discuss your project and how our website & UI/UX design services 
          can help you achieve your goals.
        </p>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Primary */}
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium shadow-md">
            Start Your Project
            <span>→</span>
          </button>

          {/* Secondary */}
          <button className="px-6 py-3 rounded-lg text-gray-200 font-medium bg-white/10 hover:bg-white/20 transition ">
            View Our Work
          </button>

        </div>

      </div>
    </div>
  )
}

export default Readytogetstart