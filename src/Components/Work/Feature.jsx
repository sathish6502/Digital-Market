import React from "react";
import featuredIcon from "../../assets/Icon.png"; // your icon
import portfolio from '../../assets/WorkPortfolio.png'

const Feature = () => {
  return (
    <div className='min-h-screen bg-[linear-gradient(135deg,#0A0E27_0%,#000000_50%,#0D1B3A_100%)]'>
    <div className="relative min-h-screen bg-[linear-gradient(135deg,#0A0E27_0%,#000000_50%,#0D1B3A_100%)] overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute w-[456.7923889160156px] h-[456.7923889160156px] 
                      bg-[#0066FF33] 
                      backdrop-blur-[128px] 
                      opacity-[0.30] 
                      top-[43.6px] left-[-36.4px] 
                      rounded-[26843500px]">
      </div>

      {/* Main content */}
      <div className="container mx-auto px-12 pt-20 md:pt-32 lg:pt-40 relative z-10">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          {/* Featured Work with Icon */}
          <div className="inline-flex items-center gap-2 text-[#FFFFFFE5] px-3 py-1 rounded-3xl text-sm font-medium bg-white/5 backdrop-blur-xl border-[0.8px] border-white/10 shadow-[4px_6px_25px_0px_rgba(0,0,0,0.14)]">
            <img src={featuredIcon} alt="Featured Work Icon" className="w-4 h-4"/>
            <span>Featured Work</span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-[72px]">
            Transforming Ideas Into<br/>Digital Excellence
          </h1>

          {/* Hero Subtext */}
          <p className="text-[#FFFFFFB2] text-lg md:text-xl max-w-xl">
            Explore our portfolio of successful projects where creativity<br/> 
            meets technology to deliver exceptional digital experiences.
          </p>
            <div className="flex items-center justify-between 
            w-full">
          {/* leftside Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["All Work","UI/UX","Web","Mobile","Branding"].map((label) => (
              <button 
                key={label}
                className="bg-white/10 border-t-[0.8px] border-t-[#FFFFFF1A] 
                           shadow-[4px_6px_25px_0px_#00000024] 
                           hover:bg-[#0066FF] 
                           hover:shadow-[0px_0px_40px_0px_#0066FF1A] 
                           hover:shadow-[0px_0px_20px_0px_#0066FF4D] 
                           text-[#FFFFFF] rounded-full px-6 py-3 ">
                {label}
              </button>
            ))}
          </div>
          {/* Rightside image  */}
          <div>
          <img src={portfolio} alt="" className="w-[89px] h-[45px]"/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;