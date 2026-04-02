import React from 'react'

const Readytogetstart = () => {
  return (
    <div className="bg-[#020617] py-20 px-4 flex justify-center">
      
      <div
        className="
          w-full max-w-5xl
          rounded-3xl
          border border-white/[0.08]
          px-6 md:px-16 py-16
          text-center
          relative overflow-hidden
        "
        style={{
          background: 'linear-gradient(135deg, #0a2a4a 0%, #0a3d35 50%, #0d4a3a 100%)',
          boxShadow: '0 0 80px rgba(0, 80, 200, 0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* Subtle radial glow top-left */}
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(30,100,200,0.18) 0%, transparent 70%)' }}
        />
        {/* Subtle radial glow bottom-right */}
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(10,150,100,0.14) 0%, transparent 70%)' }}
        />

        {/* Heading */}
        <h2 className="relative z-10 text-4xl md:text-5xl font-semibold text-white mb-5 tracking-tight">
          Ready to Get Started?
        </h2>

        {/* Description */}
        <p className="relative z-10 text-gray-300/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Let's discuss your project and how our process can bring your vision to life.
        </p>

        {/* Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          
          {/* Primary Button */}
          <button
            className="
              flex items-center gap-2
              bg-blue-600 hover:bg-blue-500
              px-7 py-3 rounded-lg
              text-white text-sm font-medium
              transition-all duration-200
              shadow-[0_0_20px_rgba(37,99,235,0.4)]
            "
          >
            Start Your Project
            <span>→</span>
          </button>

          {/* Secondary Button */}
          <button
            className="
              px-7 py-3 rounded-lg
              text-gray-200 text-sm font-medium
              bg-white/[0.07]
              hover:bg-white/[0.12]
              transition-all duration-200
            "
          >
            View Our Work
          </button>

        </div>
      </div>
    </div>
  )
}

export default Readytogetstart