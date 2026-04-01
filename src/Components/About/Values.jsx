import userLogo from "./../../assets/About/Logo1.png";
import aiLogo from "./../../assets/About/Logo2.png";
import performanceLogo from "./../../assets/About/Logo3.png";
import scalableLogo from "./../../assets/About/Logo4.png";

const values = [
  {
    title: "User-First Philosophy",
    description:
      "Research-backed design that prioritizes user needs and drives engagement through seamless UX.",
    icon: userLogo,
  },
  {
    title: "AI Integration",
    description:
      "24/7 automation, intelligent support, and AI-enhanced creative services for maximum efficiency.",
    icon: aiLogo,
  },
  {
    title: "Performance-Driven",
    description:
      "Ongoing insights and optimization with measurable results through analytics and A/B testing.",
    icon: performanceLogo,
  },
  {
    title: "Scalable Solutions",
    description:
      "Built for future growth with flexible architecture that adapts to your evolving business needs.",
    icon: scalableLogo,
  },
];

export default function OurValues() {
  return (
    <section className="bg-gradient-to-b from-[#020617] to-[#020617] py-10 sm:py-12 px-4">
      
      <div className="w-full max-w-6xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 py-10 sm:py-12 text-center shadow-2xl">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-lg text-white">
          Our Values
        </h2>
      
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
          The principles that guide everything we do
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-8 sm:mt-10">

          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mx-auto max-w-[250px]"
            >
              
              {/* Logo */}
              <div className="w-15 h-14 sm:w-13 sm:h-16 md:w-18 md:h-18 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 shadow-lg">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 leading-relaxed px-2 sm:px-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}