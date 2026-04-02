import React from "react";
<<<<<<< HEAD
import teamImage from "../../Assets/About/team.png";
=======
import teamImage from "./../../assets/About/Team.jpg";
>>>>>>> Sathish

const OurStory = () => {
  return (
    <section className="bg-[#020617] text-white py-30 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-5 md:mb-6 tracking-tight">
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
            ongoing optimization.
          </p>

          <p className="text-gray-400 leading-[1.7] text-sm md:text-[15px]">
            Today, we work with innovative startups and established enterprises
            alike, bringing the same level of dedication and expertise to every
            project.
          </p>
        </div>

        {/* IMAGE - ALL DEVICES */}
        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-2xl shadow-xl w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]">
            <img
              src={teamImage}
              alt="Team discussion"
              className="w-full h-[300px] sm:h-[380px] md:h-[480px] lg:h-[600px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;