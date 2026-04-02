import React from "react";
import { Code, Palette, Bot, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 sm:px-6 md:px-12 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full"></div>

      {/* 👇 KEY CHANGE HERE */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center z-10">

        {/* LEFT */}
        <div className="text-center md:text-left order-1">
          <span className="inline-block px-4 py-1 text-xs sm:text-sm bg-white/10 rounded-full mb-5">
            ✨ Premium Digital Design Agency
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tighter mb-5">
            Unlock Your <br className="hidden sm:block" /> Digital Potential
          </h1>
<br/>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Graphikrafts crafts premium, modern digital experiences from
            branding and UX design to AI-powered automation and marketing—
            transforming brands with creative and intuitive solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium">
              Get Started →
            </button>

            <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg font-medium">
              View Our Work
            </button>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 order-2">
          
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10">
              <Palette className="text-blue-400" size={22} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Website & UI/UX Design
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Research-led design with user-centered layouts and SEO optimization.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/10">
              <Code className="text-green-400" size={22} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Web Development
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Fast, scalable websites with CMS integration and optimized performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10">
              <Bot className="text-purple-400" size={22} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              AI Chatbots
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              24/7 intelligent automation for customer engagement and support.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10">
              <Sparkles className="text-red-400" size={22} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              AI Creative Services
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              AI-enhanced product photography and marketing video creation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}