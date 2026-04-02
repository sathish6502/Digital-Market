import React from "react";
import container1 from "../../assets/container1.png";
import container from "../../assets/container.png";
import container3 from "../../assets/container3.png";
import container4 from "../../assets/container4.png";
import container5 from "../../assets/container5.png";
import container6 from "../../assets/container6.png";

const statsData = [
  { id: 1, value: "150+", label: "Projects Completed" },
  { id: 2, value: "98%", label: "Client Satisfaction" },
  { id: 3, value: "50+", label: "Happy Clients" },
  { id: 4, value: "15+", label: "Industry Awards" },
];

const Featurework = () => {
  return (
    <section className="w-full bg-[#020617] py-12">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* IMAGE STACK */}
        <div className="flex flex-col gap-6">

          <img src={container1} alt="" className="w-full rounded-lg object-cover" />

          <img
            src={container}
            alt=""
            className="w-full rounded-lg bg-white/5 border border-white/10 shadow-md"
          />

          <img src={container3} alt="" className="w-full rounded-lg object-cover" />

          <img
            src={container4}
            alt=""
            className="w-full rounded-lg bg-white/5 border border-white/10 shadow-md"
          />

          {/* LAST TWO IMAGES */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
  
  <div className="flex flex-col md:flex-row gap-6 w-full">
  
  <img
    src={container5}
    alt=""
    className="w-full md:w-1/2 rounded-lg object-cover"
  />

  <img
    src={container6}
    alt=""
    className="w-full md:w-1/2 rounded-lg object-cover"
  />

</div>

</div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-2xl bg-white/10 border border-white/10 shadow-md p-6 flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-4xl text-white">
                {item.value}
              </h1>

              <p className="text-white/70 text-center mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Featurework;