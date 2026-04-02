import React from 'react'
import container1 from '../../assets/container1.png'
import container from '../../assets/container.png'
import container3 from '../../assets/container3.png'
import container4 from '../../assets/container4.png'
import container5 from '../../assets/container5.png'
import container6 from '../../assets/container6.png'

const statsData = [
  { id: 1, value: "150+", label: "Projects Completed" },
  { id: 2, value: "98%", label: "Client Satisfaction" },
  { id: 3, value: "50+", label: "Happy Clients" },
  { id: 4, value: "15+", label: "Industry Awards" },
];

const Featurework = () => {
  return (
    <section className="w-full bg-[#020617] py-16 px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto">

        {/* IMAGE STACK */}
        <div className="flex flex-col gap-6">

          <img
            src={container1}
            alt=""
            className="w-full h-auto object-cover rounded-xl"
          />

          <img
            src={container}
            alt=""
            className="w-full h-auto rounded-xl bg-white/5 border border-white/10 shadow-[4px_6px_25px_0px_rgba(0,0,0,0.14)]"
          />

          <img
            src={container3}
            alt=""
            className="w-full h-auto object-cover rounded-xl"
          />

          <img
            src={container4}
            alt=""
            className="w-full h-auto rounded-xl bg-white/5 border border-white/10 shadow-[4px_6px_25px_0px_#00000024]"
          />

 <div className="flex flex-col md:flex-row md:-space-x-10">
  
  <div className="w-full md:w-1/2">
    <img
      src={container5}
      alt=""
      className="w-[1000px] object-cover rounded-2xl -ml-5"
    />
  </div>

  <div className="w-full md:w-1/2">
    <img
      src={container6}
      alt=""
      className="w-[1000px] object-cover rounded-2xl ml-6"
    />
  </div>



          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {statsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/10 border border-white/10 shadow-[4px_6px_25px_0px_#00000024] p-8 flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl md:text-5xl text-white text-center">
                {item.value}
              </h1>

              <p className="text-center text-[#FFFFFFB2] mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Featurework