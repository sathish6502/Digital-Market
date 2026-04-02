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

    <section className="container mx-auto bg-[#020617] px-6 py-12">

      {/* ✅ FIX 1: Equal left/right spacing */}
      <div className='w-full mx-auto py-12 px-6'>

        {/* IMAGE STACK */}
        <div className='flex flex-col gap-6'>

          <img src={container1} alt='' className='w-full object-cover rounded-lg' />

          <img src={container} alt='' className='w-full bg-white/5 border-t-[0.8px] border-white/10 shadow-[4px_6px_25px_0px_rgba(0,0,0,0.14)] rounded-lg' />

          <img src={container3} alt='' className='w-full object-cover rounded-lg' />

          <img src={container4} alt='' className='w-full rounded-lg bg-white/5 border-t-[0.8px] border-[#FFFFFF1A] shadow-[4px_6px_25px_0px_#00000024]' />

          {/* LAST TWO IMAGES */}
          <div className='flex flex-col md:flex-row  items-start gap-6 w-full'>

            <div>
              <img
                src={container5}
                alt=''
                className='w-[592px]  h-[442px] -mx-4 object-cover rounded-lg'
              />
            </div>

            <div>
              <img
                src={container6}
                alt=''
                className='w-[592px] h-[442px] object-cover rounded-[16px]
                border-t-[0.8px] border-[#FFFFFF1A] 
                shadow-[4px_6px_25px_0px_#00000024] pr-0'
              />
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>

          {statsData.map((item) => (

            // ✅ FIX 2: Proper spacing (no merge)
            <div
              key={item.id}
              className='max-w-[260px] w-full mx-auto rounded-2xl 
              bg-white/10 border-t border-white/10 
              shadow-[4px_6px_25px_0px_#00000024] 
              p-8 flex flex-col items-center'
            >
              <h1 className="font-normal text-5xl leading-[48px] text-center text-[#FFFFFF]">
                {item.value}
              </h1>

              <p className='font-normal leading-[24px] text-center text-[#FFFFFFB2]'>
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