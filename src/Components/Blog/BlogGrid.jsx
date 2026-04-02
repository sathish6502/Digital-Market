import React from "react";

import img1 from "../../assets/Blog/Blog1.jpg";
import img2 from "../../assets/Blog/Blog2.jpg";
import img3 from "../../assets/Blog/Blog3.jpg";
import img4 from "../../assets/Blog/Blog4.jpg";
import img5 from "../../assets/Blog/Blog5.jpg";
import img6 from "../../assets/Blog/Blog6.jpg";

const blogs = [
  {
    img: img1,
    tag: "AI & Automation",
    title: "Building 24/7 Customer Support with AI Chatbots",
    desc: "How GPT-powered chatbots are transforming customer service across WhatsApp, Facebook, and web platforms.",
    date: "October 15, 2025",
    read: "6 min read",
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
    tag: "AI Creative",
    title: "AI-Enhanced Product Photography for E-commerce",
    desc: "Creating consistent, styled product visuals at scale using AI-powered creative tools.",
    date: "September 25, 2025",
    read: "5 min read",
  },
  {
    img: img4,
    tag: "Web Development",
    title: "Web Performance Optimization: Core Web Vitals",
    desc: "Practical techniques for lightning-fast load times and improved search rankings.",
    date: "September 20, 2025",
    read: "6 min read",
  },
  {
    img: img5,
    tag: "Mobile Design",
    title: "Mobile App Design Systems in Figma",
    desc: "Building scalable iOS and Android design systems with interactive prototypes.",
    date: "September 15, 2025",
    read: "6 min read",
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

const getTagStyle = (tag) => {
  if (tag === "AI & Automation") {
    return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
  }
  if (tag === "UX Design") {
    return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
  }
  if (tag === "AI Creative") {
    return "bg-red-500/10 text-red-400 border border-red-500/20";
  }
  if (tag === "Web Development") {
    return "bg-green-500/10 text-green-400 border border-green-500/20";
  }
  if (tag === "Mobile Design") {
    return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
  }
  return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
};

export default function BlogGrid() {
  return (
    <section className="w-full bg-[#020617] py-12">

      <div className=" px-8 sm:px-10 md:px-15">

        <div className="flex flex-col md:flex-row gap-6 w-full">

          {/* CATEGORY */}
          <div className="w-full md:w-[230px] shrink-0 
            h-[290px]
            bg-gradient-to-br from-[#0b1220] via-[#0b1220]/90 to-[#020617]
            border border-[#1e293b] rounded-xl 
            p-5 text-sm text-gray-300">

            <p className="mb-6 text-white font-medium">Categories</p>

            <ul className="space-y-5">
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

          {/* BLOG GRID */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-[#1e293b] 
                bg-gradient-to-br from-[#0b1220] via-[#0b1220]/90 to-[#020617]"
              >
                <div className="h-[200px] sm:h-[220px] w-full overflow-hidden">
                  <img
                    src={blog.img}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-5">

                  <span
                    className={`text-[11px] px-2 py-1 rounded-full 
                    ${getTagStyle(blog.tag)}`}
                  >
                    {blog.tag}
                  </span>

                  <h3 className="text-white text-[16px] font-medium mt-3 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-[13px] mt-2 leading-relaxed">
                    {blog.desc}
                  </p>

                  <div className="text-gray-500 text-[11px] mt-3 flex gap-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.read}</span>
                  </div>

                  <p className="text-blue-500 text-[13px] mt-3 cursor-pointer hover:underline">
                    Read More →
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10 gap-2">
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