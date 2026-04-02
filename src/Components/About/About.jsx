export default function AboutHero() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-14 bg-[#020617] flex items-center justify-center">

      {/* CARD */}
      <div
        className="w-full mx-auto
        bg-gradient-to-r from-[#0066FF0D] via-[#00D98C0D] to-[#000000]
        shadow-xl
        py-6 sm:py-8 md:py-10
        text-center
        -mb-12 sm:-mb-16 md:-mb-20 lg:-mb-25
        px-4 sm:px-6 md:px-10"
      >
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lg text-gray-200 leading-tight py-2">
          About Graphikrafts
        </h1>

        <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl mx-auto">
          A full-service digital agency crafting premium, modern, and high-impact
          digital experiences through creative design and AI-powered innovation.
        </p>

      </div>

    </section>
  );
}