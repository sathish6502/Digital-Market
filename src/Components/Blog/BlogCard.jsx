import containerImg from "../../assets/Blog/container.jpg";

function BlogCard() {
  return (
    <section className="relative w-full bg-[#020617] pb-16 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-140px] right-[-120px] w-[520px] h-[520px] bg-blue-1000/30 blur-[150px]" />
        <div className="absolute bottom-[-160px] left-[-120px] w-[520px] h-[520px] bg-indigo-1000/70 blur-[190px]" />
      </div>

      {/* Container */}
      <div className="w-full px-3 sm:px-4 md:px-6">

        {/* ✅ FIX: reduced width so padding becomes visible */}
        <div className="w-[95%] mx-auto min-h-[340px] rounded-2xl overflow-hidden 
          border border-white/10 border-b-0
          bg-[#0b1220] 
          shadow-[0_30px_60px_rgba(0,0,0,0.9)]">

          <div className="flex flex-col md:flex-row md:gap-6 h-full">

            {/* IMAGE */}
            <div className="w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-auto">
              <img
                src={containerImg}
                alt="AI"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 px-5 sm:px-6 md:px-8 py-5 sm:py-6 flex flex-col justify-between 
              bg-gradient-to-br from-[#0b1220] via-[#0b1220]/95 to-[#0b1220]/80">

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                  bg-green-500/10 text-green-400 text-[11px] sm:text-[12px] 
                  border border-green-500/20 w-fit mb-3 sm:mb-4">
                  ✨ Featured Post
                </div>

                <h2 className="text-white text-[20px] sm:text-[24px] md:text-[30px] leading-[1.2] font-semibold mb-3 sm:mb-4">
                  AI Integration in <br />
                  Modern Web <br />
                  Design: The Future <br />
                  is Now
                </h2>

                <p className="text-gray-400 text-[13px] sm:text-[14px] mb-4 sm:mb-5">
                  Exploring how AI-powered automation, chatbots, and creative <br />
                  services are transforming digital experiences and <br />
                  revolutionizing customer engagement.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 text-gray-500 text-[11px] mb-3 sm:mb-4">
                  <span>📅 October 15, 2025</span>
                  <span>⏱ 8 min read</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-300 text-[10px]">
                    AI & Automation
                  </span>
                </div>

                <button className="px-4 py-2 text-[12px] sm:text-[13px] rounded-md bg-blue-600 hover:bg-blue-500 text-white">
                  Read Article →
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogCard;