import OurTeamImage from "./../../assets/About/Team.png";

export default function OurStory() {
  return (
    <section className="w-full bg-[#020617] text-white  px-4 sm:px-8 md:px-12 py-10 sm:py-12">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 sm:space-y-6 max-w-xl ">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200">
            Our Story
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-md leading-relaxed">
            Graphikrafts is a full-service digital agency specializing in premium,
            modern digital experiences. From branding and UX design to AI-powered
            automation and marketing, we transform brands and businesses with
            creative and intuitive digital solutions.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-md leading-relaxed">
            Our expertise spans website and UI/UX design, web development, AI
            chatbots, AI-powered creative services, mobile app design, and ongoing
            optimization. We've delivered exceptional results for clients including
            Primeairtech Engineers, Taxii, Bitxe, and Corteva Agriscience.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-md leading-relaxed">
            Today, we work with innovative startups and established enterprises
            alike, bringing the same level of dedication and expertise to every
            project, regardless of size.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 ">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl  rounded-2xl overflow-hidden shadow-2xl">
            
            <img
              src={OurTeamImage}
              alt="Team discussion"
              className="w-[950px] h-[800px] object-cover"
            />

          </div>
        </div>

      </div>

    </section>
  );
}