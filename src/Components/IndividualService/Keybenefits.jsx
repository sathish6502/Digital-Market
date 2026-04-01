import React from 'react'
import { Check, CheckCircle } from "lucide-react";

const includedItems = [
  "User Research & Journey Mapping",
  "High-Fidelity Mockups & Wireframes",
  "Design Systems & Style Guides",
  "Responsive & Mobile-Optimized Layouts",
  "Heatmap Analysis & A/B Testing",
  "Dynamic Visuals & Theme Flexibility",
];

const benefits = [
  "Increased user engagement through research-backed design",
  "Higher conversion rates with optimized user flows",
  "Improved SEO performance through strategic content architecture",
  "Brand-accurate aesthetics that build trust and recognition",
];

const deliverables = [
  "Complete Design System & Style Guide",
  "High-Fidelity Mockups (Desktop, Tablet, Mobile)",
  "Interactive Prototypes in Figma",
  "User Journey Maps & Research Reports",
  "SEO-Optimized Content Strategy",
  "Dark/Light Theme Variations",
];
const Keybenefits = () => {
  return (
  <section className="w-full bg-[#020617] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= WHAT'S INCLUDED ================= */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-10">
          What's Included
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {includedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/0 border border-gray-800 rounded-xl px-5 py-4 backdrop-blur-md"
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600">
                <Check className="text-white w-4 h-4" />
              </div>
              <p className="text-gray-300 text-sm">{item}</p>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT - Key Benefits */}
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6">
              Key Benefits
            </h3>

            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D98C]">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <p className="text-gray-300 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - Deliverables */}
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6">
              Deliverables
            </h3>
          
          <div className="bg-gradient-to-b from-white/10 to-white/0 border border-gray-800 rounded-2xl p-6 backdrop-blur-md">
            

            <ul className="divide-y divide-gray-700">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-3 py-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <p className="text-gray-300 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
</div>
        </div>

      </div>
    </section>
  )
}

export default Keybenefits;


