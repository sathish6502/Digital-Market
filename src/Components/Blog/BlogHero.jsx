import React from "react";

function BlogHero() {
  return (
    <section className="relative w-full h-[420px] bg-[#020617] flex items-center justify-center overflow-hidden">

      {/* ✅ SMOOTH CENTER GLOW (BACKGROUND FIXED) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-blue-900/20 blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4">

        {/* ✅ PERFECT BADGE (MATCHES YOUR IMAGE) */}
        <div className="relative inline-flex items-center justify-center mb-6">

          {/* 🔥 OUTER GLOW */}
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl opacity-40"></div>

          {/* 🔥 MAIN BADGE */}
          <div className="relative flex items-center gap-2 px-6 py-2.5 rounded-full
            bg-white/[0.06]
            border border-white/20
            backdrop-blur-xl
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
            text-gray-200 text-[14px]">

            {/* ✅ EXACT ICON */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-green-400"
            >
              <path
                d="M4 16L10 10L14 14L20 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Industry Insights & Updates</span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-[64px] font-semibold text-white tracking-tight leading-[1.05]">
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