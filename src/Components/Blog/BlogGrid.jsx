import React from "react";

import img1 from "../../Assets/Blog/Blog1.jpg";
import img2 from "../../Assets/Blog/Blog2.jpg";
import img3 from "../../Assets/Blog/Blog3.jpg";
import img4 from "../../Assets/Blog/Blog4.jpg";
import img5 from "../../Assets/Blog/Blog5.jpg";
import img6 from "../../Assets/Blog/Blog6.jpg";

const blogs = [
  {
    img: img1,
    tag: "AI & Automation",
    title: "Building 24/7 Customer Support with AI Chatbots",
    desc: "How GPT-powered chatbots are transforming customer service across WhatsApp, Facebook, and web platforms.",
    date: "October 15, 2025",
    read: "8 min read",
  },
  {
    img: img2,
    tag: "UX Design",
    title: "Research-Led UX: Heatmaps & Journey Mapping",
    desc: "Data-driven design strategies that boost engagement and conversion rates through user insights.",
    date: "October 5, 2025",
    read: "7 min read",
  },
  {
    img: img3,
    tag: "AI & Automation",
    title: "AI-Enhanced Product Photography for E-commerce",
    desc: "Creating consistent, styled product visuals at scale using AI-powered creative tools.",
    date: "September 25, 2025",
    read: "6 min read",
  },
  {
    img: img4,
    tag: "Web Development",
    title: "Web Performance Optimization: Core Web Vitals",
    desc: "Practical techniques for lightning-fast load times and improved search rankings.",
    date: "September 20, 2025",
    read: "9 min read",
  },
  {
    img: img5,
    tag: "Mobile Design",
    title: "Mobile App Design Systems in Figma",
    desc: "Building scalable iOS and Android design systems with interactive prototypes.",
    date: "September 15, 2025",
    read: "8 min read",
  },
  {
    img: img6,
    tag: "Web Development",
    title: "Scalable Web Architecture: CMS Integration",
    desc: "Building flexible, growth-ready websites with modern content management systems.",
    date: "September 10, 2025",
    read: "7 min read",
  },
];

export default function BlogGrid() {
  return (
    <section className="w-full bg-[#020617] py-12 flex justify-center">

      <div className="w-full max-w-[1100px] px-4">

        <div className="flex flex-col md:flex-row gap-6">

          {/* ✅ SIDEBAR (NO SHADE) */}
          <div className="w-full md:w-[240px] shrink-0 h-fit 
            bg-transparent border border-[#1e293b] rounded-xl 
            p-4 sm:p-5 text-sm text-gray-300">

            <p className="mb-4 text-white font-medium">Categories</p>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex justify-between hover:text-white cursor-pointer">
                <span>All Posts</span>
                <span>(28)</span>
              </li>
              <li className="flex justify-between hover:text-white cursor-pointer">
                <span>AI & Automation</span>
                <span>(12)</span>
              </li>
              <li className="flex justify-between hover:text-white cursor-pointer">
                <span>UX Design</span>
                <span>(8)</span>
              </li>
              <li className="flex justify-between hover:text-white cursor-pointer">
                <span>Web Development</span>
                <span>(6)</span>
              </li>
              <li className="flex justify-between hover:text-white cursor-pointer">
                <span>Mobile Design</span>
                <span>(2)</span>
              </li>
            </ul>
          </div>

          {/* ✅ BLOG GRID (NO SHADOW) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-[#1e293b] bg-transparent transition"
              >
                <div className="h-[150px] sm:h-[160px] w-full">
                  <img
                    src={blog.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5">

                  {/* TAG */}
                  <span className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full 
                    bg-transparent border border-[#1e293b] text-blue-400">
                    {blog.tag}
                  </span>

                  <h3 className="text-white text-[14px] sm:text-[16px] font-medium mt-3 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-[12px] sm:text-[13px] mt-2 leading-relaxed">
                    {blog.desc}
                  </p>

                  <div className="text-gray-500 text-[10px] sm:text-[11px] mt-3 flex flex-wrap gap-2 sm:gap-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.read}</span>
                  </div>

                  <p className="text-blue-500 text-[12px] sm:text-[13px] mt-3 cursor-pointer hover:underline">
                    Read More →
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex flex-wrap justify-center mt-10 gap-2">
          <button className="px-3 py-1 text-xs border border-[#1e293b] rounded-md text-gray-300">
            Previous
          </button>
          <button className="px-3 py-1 text-xs bg-blue-600 rounded-md text-white">
            1
          </button>
          <button className="px-3 py-1 text-xs border border-[#1e293b] rounded-md text-gray-300">
            2
          </button>
          <button className="px-3 py-1 text-xs border border-[#1e293b] rounded-md text-gray-300">
            3
          </button>
          <button className="px-3 py-1 text-xs border border-[#1e293b] rounded-md text-gray-300">
            Next
          </button>
        </div>

      </div>
    </section>
  );
}