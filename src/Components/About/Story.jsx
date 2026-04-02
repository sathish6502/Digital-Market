import React from "react";
import teamImage from "./../../Assets/About/team.png";

const OurStory = () => {
  return (
    <section className="bg-[#020617] text-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-lg mb-5 md:mb-6 tracking-tight">
            Our Story
          </h2>

          <p className="text-gray-400 leading-[1.7] text-sm md:text-[15px] mb-4 md:mb-5">
            Graphikrafts is a full-service digital agency specializing in premium,
            modern digital experiences. From branding and UX design to AI-powered
            automation and marketing, we transform brands and businesses with
            creative and intuitive digital solutions.
          </p>

          <p className="text-gray-400 leading-[1.7] text-sm md:text-[15px] mb-4 md:mb-5">
            Our expertise spans website and UI/UX design, web development, AI
            chatbots, AI-powered creative services, mobile app design, and
            ongoing optimization. We've delivered exceptional results for clients
            including Primeairtech Engineers, Taxii, Bitxe, and Corteva Agriscience.
          </p>

          <p className="text-gray-400 leading-[1.7] text-sm md:text-[15px]">
            Today, we work with innovative startups and established enterprises
            alike, bringing the same level of dedication and expertise to every
            project, regardless of size.
          </p>
        </div>

{/* MOBILE VIEW ONLY */}
<div className="block md:hidden flex justify-center">
  <div className="overflow-hidden shadow-xl w-full max-w-[420px] rounded-3xl">
    <img
      src={teamImage}
      alt="Team discussion"
      className="w-[280px] h-[300px] object-cover ml-6 rounded-3xl"
    />
  </div>
</div>

{/* TABLET + DESKTOP VIEW */}
<div className="hidden md:flex justify-end">
  <div className="overflow-hidden shadow-xl w-full max-w-[440px] lg:max-w-[460px]">
    <img
      src={teamImage}
      alt="Team discussion"
      className="w-full h-[500px] lg:h-[900px] object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default OurStory;