export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-[#020617] to-[#0f172a] py-16 sm:py-20 text-center text-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl sm:text-4xl md:text-4xl font-lg mb-4">
          Let's Work Together
        </h2>

        <p className="text-gray-400 text-sm sm:text-lg md:text-md mb-8">
          Ready to start your next project? We'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-[320px] sm:max-w-full mx-auto">
          
          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-lg text-sm sm:text-base font-semibold w-full sm:w-auto md:px-7">
            Get in Touch
          </button>

          <button className="border border-gray-600 hover:border-gray-400 hover:bg-white/10 transition px-5 py-3 rounded-lg text-sm sm:text-base font-semibold w-full sm:w-auto md:px-7">
            View Our Work
          </button>

        </div>

      </div>
    </section>
  );
}