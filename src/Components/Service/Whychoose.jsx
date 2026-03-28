import React from 'react'
import { Layers, Bot, Zap, BarChart3, ArrowRight } from "lucide-react";
const features = [
  {
    icon: Layers,
    title: "Seamless UX & UI",
    desc: "Research-backed design that boosts engagement and trust",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "24/7 automation, support, and marketing efficiency",
  },
  {
    icon: Zap,
    title: "Scalable Build",
    desc: "Built for future growth—sites/apps adapt over time",
  },
  {
    icon: BarChart3,
    title: "Performance-Driven",
    desc: "Ongoing insights & optimization yield measurable results",
  },
];
const Whychoose = () => {
  return (
    <section className="w-full bg-[#020617] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
          Why Choose Graphikrafts
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Our expertise delivers measurable results
        </p>

        {/* Feature Cards */}
        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-black/14 backdrop-blur-md 
                  border border-gray-800 
                  rounded-xl p-6 
                  flex flex-col items-center text-center
                  hover:border-gray-600 hover:-translate-y-1 
                  transition duration-300
                "
              >
                {/* Icon */}
               <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00D98C] mb-4">
                  <Icon className="text-white w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-white text-sm font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
       <div className="mt-12 max-w-3xl mx-auto min-h-[260px] p-8 md:p-12 rounded-xl bg-gradient-to-r from-[#0066FF]/20 to-[#00D98C]/20 backdrop-blur-md">
  
  <h3 className="text-white text-xl md:text-2xl font-semibold">
    Ready to Transform Your Brand?
  </h3>

  <p className="text-gray-300 mt-2 text-sm max-w-md mx-auto">
    Let's discuss how our services can elevate your digital presence and drive growth.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
    
    {/* Primary Button */}
    <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition">
      Start Your Project
      <ArrowRight className="w-4 h-4" />
    </button>

    {/* Secondary Button */}
    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm border border-gray-600 transition">
      View Our Work
    </button>

  </div>
</div>

      </div>
    </section>
  )
}

export default Whychoose;