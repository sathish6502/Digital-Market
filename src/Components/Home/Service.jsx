import React from "react";
import { Code, Palette, Bot, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Palette className="text-blue-400" size={22} />,
      title: "Website & UI/UX Design",
      desc: "Research-led design with user-centered layouts and SEO optimization.",
      color: "blue",
    },
    {
      icon: <Code className="text-green-400" size={22} />,
      title: "Web Development",
      desc: "Fast, scalable websites with CMS integration and optimized performance.",
      color: "green",
    },
    {
      icon: <Bot className="text-purple-400" size={22} />,
      title: "AI Chatbots",
      desc: "24/7 intelligent automation for customer engagement and support.",
      color: "purple",
    },
    {
      icon: <Sparkles className="text-red-400" size={22} />,
      title: "AI Creative Services",
      desc: "AI-enhanced product photography and marketing video creation.",
      color: "red",
    },
  ];

  const colorStyles = {
    blue: "bg-blue-500/10 text-blue-400",
    green: "bg-green-500/10 text-green-400",
    purple: "bg-purple-500/10 text-purple-400",
    red: "bg-red-500/10 text-red-400",
  };

  // 👉 Only text color (no background)
  const textColors = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
    red: "text-red-400",
  };

  return (
    <div className="bg-[#020617] text-white px-4 sm:px-6 md:px-12 py-16 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Comprehensive digital solutions tailored to transform your business
          </p>
        </div>
<br/><br/>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden hover:scale-[1.02] transition"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${colorStyles[item.color]}`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {item.desc}
                </p>

                {/* Learn More (NO BACKGROUND) */}
                <button
                  className={`text-sm font-medium flex items-center gap-1 ${textColors[item.color]} hover:gap-2 transition-all duration-300`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg text-sm">
            View All Services
          </button>
        </div>

      </div>
    </div>
  );
}