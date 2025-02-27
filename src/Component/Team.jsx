import React from 'react'
import Team1 from './Pics/zeeshanShah2.jpg'
export default function Team() {
  return (
    <div className='mb-[8rem]'>
      <div className='pt-2 h-fit pb-6  mt-3'>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-4'>The Visionary Collective</p>
      <p className='text-[2rem] font-semibold mt-[0.1rem] text-center tracking-wide'>Our Core Team</p>
      <div className='lg:flex flex-row justify-center gap-[12rem] mt-6'>
      
      {/* ----------------------------CEO message------------------- */}
      <div className='bg-slate-50 pt-7'>
              <div className='flex justify-center '>
                {/* ------------------------pic ceo----------------- */}
                <div className=''>
          <img src={Team1} alt="servicepic1" className=' lg:h-[24rem] md:h-[12rem] lg:w-[fit] lg:mt-12 mt-[6rem]'/>
          <div className='p-6 bg-white lg:ml-[3rem] ml-[8rem] text-center absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-[1.2rem]  font-serif '>Mr.Zeeshan Shah</p>
              <p className='text-xl cursor-pointer text-[0.9rem] text-slate-700'>CEO</p>
          </div>
      </div>
            {/* ----------------------------------end pic ceo-------------------- */}
            <div className='bg-white p-5 hover:border-b-4 hover:border-b-red-600 shadow-xl'>
            <p className='text-[0.85rem] text-red-600 tracking-wider font-semibold  mt-4'>CEO Message</p>
            <p className='text-[1.4rem] font-semibold mt-2  '>Experts in High-Quality Rubber Seals for Superior Performance</p>
            {/* ----------------------------1------------------------------- */}
            <div className='  mt-1 border-b border-red-300 py-4'>         
                      <p className=' text-gray-800 tracking-tight mt-1 text-[0.87rem]'>Abdullah Sons, a leading rubber and seal manufacturing company since 2000, has flourished under the</p>
              </div>
              {/* ----------------------------2------------------------------- */}
            <div className='mt-1 border-b border-red-300 py-4 '>
            <p className=' text-gray-800 tracking-tight mt-1 text-[0.87rem]'>visionary leadership of its CEO. With a deep commitment to innovation, quality, and customer</p>
              </div>
              {/* ----------------------------3------------------------------- */}
            <div className=' mt-1 border-b border-red-300 py-4'>
            <p className=' text-gray-800 tracking-tight mt-1 text-[0.87rem]'>satisfaction, he has played a pivotal role in expanding the company’s global reach. His strategic</p>
              </div>
               {/* ----------------------------4------------------------------- */}
            <div className=' mt-1 border-b border-red-300 py-4'>
            <p className=' text-gray-800 tracking-tight mt-1 text-[0.87rem]'>approach to manufacturing excellence, sustainable practices, and advanced technology has positioned</p>
              </div>
              {/* ----------------------------5------------------------------- */}
            <div className=' mt-1 border-b border-red-300 py-4'>
            <p className=' text-gray-800 tracking-tight mt-1 text-[0.87rem]'>Abdullah Sons as a trusted name in the industry. Through dedication and expertise, he continues to</p>
              </div>
              {/* ----------------------------6------------------------------- */}
            <div className=' mt-1 border-b border-red-300 py-4 mb-4'>
            <p className=' text-gray-800 tracking-tight mt-1 text-[0.87rem]'>drive the company toward greater success and market leadership.</p>
              </div>
            </div>
              </div>
            
          </div>
      
      
       
        {/* <div className=''>
          <img src={Team2} alt="servicepic1" className=' lg:h-[22rem] md:h-[12rem] lg:w-[fit] rounded-3xl lg:mt-0 mt-[6rem]'/>
          <div className='p-6 bg-white lg:ml-[1rem] ml-[6rem] text-center absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-[1.2rem]  font-serif '>Mr.Abdul Ghani Shah</p>
              <p className='text-xl cursor-pointer text-[0.9rem] text-slate-700'>Managing Partner</p>
          </div>
      </div> */}
        
        
      </div>

      </div>

    </div>
  )
}
