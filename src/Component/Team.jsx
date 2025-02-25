import React from 'react'
// import Team1 from './Pics/IshfaqShah.png'
import Team1 from './Pics/zeeshanShah2.jpg'
import Team2 from './Pics/HoneyShah.jpg'

export default function Team() {
  return (
    <div className='mb-[8rem]'>
      <div className='pt-2 h-fit pb-6  mt-3'>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-4'>The Visionary Collective</p>
      <p className='text-[2rem] font-semibold mt-[0.1rem] text-center tracking-wide'>Our Core Team</p>
      <div className='lg:flex flex-row justify-center gap-[12rem] mt-6'>
      {/* ----------------------------------team 1---------------------- */}
      {/* <div className='bg-black px-10 py-3  rounded-3xl' >
          <img src={Team1} alt="servicepic1" className=' lg:h-[22rem] md:h-[12rem] w-[12.5rem] rounded-3xl'/>
          <div className='p-6 bg-white ml-[0.1rem] text-center absolute mt-[-2.2rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-[1.2rem]  font-serif '>Mr.Zeeshan Shah</p>
              <p className='text-xl cursor-pointer text-[0.9rem] text-slate-700'>CEO</p>
          </div>
      </div> */}
      <div className=''>
          <img src={Team1} alt="servicepic1" className=' lg:h-[22rem] md:h-[12rem] lg:w-[fit] rounded-3xl lg:mt-0 mt-[6rem]'/>
          <div className='p-6 bg-white lg:ml-[2.2rem] ml-[7rem] text-center absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-[1.2rem]  font-serif '>Mr.Zeeshan Shah</p>
              <p className='text-xl cursor-pointer text-[0.9rem] text-slate-700'>CEO</p>
          </div>
      </div>
        {/* ----------------------------------team 1---------------------- */}
        <div className=''>
          <img src={Team2} alt="servicepic1" className=' lg:h-[22rem] md:h-[12rem] lg:w-[fit] rounded-3xl lg:mt-0 mt-[6rem]'/>
          <div className='p-6 bg-white lg:ml-[1rem] ml-[6rem] text-center absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-[1.2rem]  font-serif '>Mr.Abdul Ghani Shah</p>
              <p className='text-xl cursor-pointer text-[0.9rem] text-slate-700'>CEO</p>
          </div>
      </div>
        {/* ----------------------------------team 1---------------------- */}
        {/* <div className=''>
          <img src={Team1} alt="servicepic1" className=' lg:h-[22rem] md:h-[12rem] lg:w-[fit] rounded-3xl lg:mt-0 mt-[6rem]'/>
          <div className='p-6 bg-white ml-[5rem] text-center absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-[1.2rem]  font-serif '>Mr.Ishfaq Shah</p>
              <p className='text-xl cursor-pointer text-[0.9rem] text-slate-700'>CEO</p>
          </div>
      </div> */}
      </div>

      </div>

    </div>
  )
}
