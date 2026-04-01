export default function AboutHero() {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#020617] flex items-center justify-center">

      {/* 🧊 CARD ONLY WITH BORDER + GRADIENT COLOR */}
      <div className="w-full h-65 mx-auto border border-white/10 
     bg-gradient-to-b from-[#020617] to-[#020617] 
       shadow-2xl px-6 sm:px-10 py-10 text-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-200 leading-tight py-2">
          About Graphikrafts
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-md leading-relaxed  max-w-xl mx-auto">
          A full-service digital agency crafting premium, modern, and high-impact
          digital experiences through creative design and AI-powered innovation.
        </p>

      </div>

    </section>
  );
}