import React from 'react'
import { ArrowRight } from 'lucide-react'

const GetStarted = () => {
  return (
    <div className='max-w-[980px] mx-auto px-6 py-12'>
        <div className='w-full bg-gradient-to-br from-[#0066FF]/20 to-[#00D98C]/20 border-[0.8px] bg-white/10 border-t-[0.8px] border-white/20 shadow-[4px_6px_25px_0px_#00000024] rounded-[24px] p-12'>
                      <div className='flex flex-col items-center max-w-[640px] mx-auto text-center justify-center gap-6'>
                <h1 className='font-normal text-[48px] leading-[48px] 
                text-[#FFFFFF]'>Ready to Start Your Project?</h1>
                <p className='font-normal text-[20px] leading-[28px] text-[#FFFFFFB2]'>Let's collaborate and create something extraordinary that makes an impact.</p>
                
            </div>
                        <div className='flex flex-wrap md:nowrap gap-6 items-center justify-center mt-6'>
                <button className='bg-white/5 border-t-[0.8px] border-t-white/10 shadow-[4px_6px_25px_rgba(0,0,0,0.14)]  hover:bg-[#0066FF]
  hover:shadow-[0px_0px_40px_rgba(0,102,255,0.1),0px_0px_20px_rgba(0,102,255,0.3)] transition-all duration-300 px-6 py-3 rounded-[8px] text-[#FFFFFF] flex items-center gap-2'>
    GetStarted
    <ArrowRight size={16} className= 'text-[#FFFFFF] shrink-0' />
  </button>
                    <button className='bg-white/5 border-t-[0.8px] border-t-white/10 shadow-[4px_6px_25px_rgba(0,0,0,0.14)]  hover:bg-[#0066FF]
  hover:shadow-[0px_0px_40px_rgba(0,102,255,0.1),0px_0px_20px_rgba(0,102,255,0.3)] transition-all duration-300 px-6 py-3 rounded-[8px] text-[#FFFFFF]'>
 Our Process</button>
            </div>


        </div>
      
    </div>
  )
}

export default GetStarted
