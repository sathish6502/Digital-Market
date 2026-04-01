import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "AI Support Available" },
  ];

  return (
    <div className="bg-[#020617] px-4 sm:px-6 md:px-12 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Glass Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-8 sm:px-10 sm:py-10">

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {stats.map((item, index) => (
              <div key={index}>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                  {item.value}
                </h2>

                <p className="text-gray-400 text-xs sm:text-sm mt-2">
                  {item.label}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}