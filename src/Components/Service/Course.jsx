import React from 'react'
import {
  Code,
  Bot,
  PenTool,
  Smartphone,
  BarChart3,
  Layers,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
const services = [
  {
    icon: Layers,
    title: "Website & UI/UX Design",
    desc: "Custom website design aligned with your brand identity. User-centered, responsive interfaces with research-led UX including heatmaps, journey mapping, and SEO optimization.",
    points: [
      "User Research & Journey Mapping",
      "High-Fidelity Mockups & Wireframes",
      "Design Systems & Style Guides",
      "Dark/Light Theme Flexibility",
    ],
    color: "from-blue-500/20",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Clean, fast-loading custom websites built on flexible platforms. CMS integration for easy content updates with optimized performance for improved SEO and web vitals.",
    points: [
      "Responsive & Mobile-Optimized",
      "CMS Integration",
      "Scalable Architecture",
      "A/B Testing & Analytics",
    ],
    color: "from-green-500/20",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    desc: "Multi-platform AI chatbot design for WhatsApp, Facebook, and websites with 24/7 engagement. Intelligent workflows driven by GPT-based NLP for personalized interactions.",
    points: [
      "Multi-Platform Deployment",
      "Automated FAQs & Lead Qualification",
      "Appointment Scheduling",
      "Customer Journey Automation",
    ],
    color: "from-purple-500/20",
  },
  {
    icon: PenTool,
    title: "AI-Powered Creative Services",
    desc: "AI-enhanced product photography with stylized, consistent visuals. Marketing video creation using AI visual generators for promo reels, product ads, and testimonial videos.",
    points: [
      "AI Product Photography",
      "Marketing Video Creation",
      "Automated Content Generation",
      "Brand-Consistent Visuals",
    ],
    color: "from-red-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX Design",
    desc: "Intuitive, cross-platform mobile UI/UX for iOS and Android. Complete app screen design including splash, login, profile, onboarding, and dashboard flows with interactive prototypes.",
    points: [
      "iOS & Android Design",
      "Interactive Prototypes (Figma)",
      "Complete User Flows",
      "Design System Setup",
    ],
    color: "from-green-400/20",
  },
  {
    icon: BarChart3,
    title: "Ongoing Optimization & Support",
    desc: "Regular performance audits, conversion tracking, and UX tuning. Content updates, design revisions, and maintenance packages post-launch with monthly reporting for ROI",
    points: [
      "Performance Audits",
      "Conversion Tracking",
      "Content Updates & Revisions",
      "Monthly Insights & Reporting",
    ],
    color: "from-blue-400/20",
  },
];
const Course = () => {
  return (
    <section className="w-full bg-[#020617] py-20 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent"
            >
              {/* Card */}
              <div className="bg-[#020617]/90 backdrop-blur-xl rounded-2xl p-6 h-full border border-gray-800 hover:border-gray-600 transition duration-300">
                
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                  <Icon className="text-white w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-5">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="text-[#00D98C] w-4 h-4 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className="flex items-center text-sm text-gray-400 hover:text-white cursor-pointer">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Course