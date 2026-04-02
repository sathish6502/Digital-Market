import React from "react";

function BlogHero() {
  return (
    <section className="relative w-full h-[420px] bg-[#020617] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GLOW (center only) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-blue-900/20 blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4">

        {/* ✅ CLEAN BADGE (NO GRADIENT / NO GLOW) */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
          bg-white/5
          border border-white/10
          text-gray-200 text-[14px]">

          {/* GREEN ARROW ICON */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-green-400"
          >
            <path
              d="M4 14L10 8L14 12L20 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 6V10M20 6H16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Industry Insights & Updates</span>
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-[64px] font-semibold text-white tracking-tight leading-[1.05]">
          Blog & Insights
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 text-gray-400 text-[16px] max-w-[720px] mx-auto">
          Thoughts on design, AI automation, and digital innovation from the Graphikrafts team.
        </p>

      </div>
    </section>
  );
}

export default BlogHero;