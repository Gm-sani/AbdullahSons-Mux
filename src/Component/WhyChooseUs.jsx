import React from 'react'
import hndshk from './Pics/handShake.png'
import growingGraph from './Pics/growingGraph.png'
import chat from './Pics/chat.png'
import plane from './Pics/plane.png'
import choosepic from './Pics/choosePic.jpg'

export default function WhyChooseUs() {
  return (
    <div className='bg-slate-50 pt-7'>
        <div className='flex justify-center '>
        <div className='mt-[4.3rem] md:block hidden'>
        <img src={choosepic} alt="choosepic" className='h-[30rem] w-[35rem]'/>
      </div>
      <div className='bg-white p-5 hover:border-b-4 hover:border-b-red-600 shadow-xl'>
      <p className='text-[0.85rem] text-red-600 tracking-wider font-semibold  mt-3'>Why Choose Us</p>
      <p className='text-[1.4rem] font-semibold mt-2  w-[23rem]'>Experts in High-Quality Rubber Seals for Superior Performance</p>
      {/* ----------------------------1------------------------------- */}
      <div className='flex gap-3 mt-2 border-b border-red-300 py-5'>
        <img src={growingGraph} alt="growingGraph" className='h-[3.3rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>Superior Quality Materials</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>use only premium-grade rubber compounds to ensure durability ,flexibility, and resistance </p>
            </div>
        </div>
        {/* ----------------------------2------------------------------- */}
      <div className='flex gap-5 mt-2 border-b border-red-300 py-5 pl-3'>
        <img src={hndshk} alt="hndshk" className='h-[2rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>Custom Solutions for Every Need</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>we offer custom-designed rubber seals to meet your specific requirements.</p>
            </div>
        </div>
        {/* ----------------------------3------------------------------- */}
      <div className='flex gap-1 mt-2 border-b border-red-300 py-5'>
        <img src={chat} alt="chat" className='h-[2rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>Exceptional Customer Support</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>From product selection to after-sales service, our dedicated support team is here to assist you.</p>
            </div>
        </div>
        {/* ----------------------------4------------------------------- */}
      <div className='flex gap-3 mt-2 py-5'>
        <img src={plane} alt="plane" className='h-[3.3rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>
                Industry Expertise & Experience</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>Our deep industry knowledge allows us to provide expert recommendations and solutions</p>
            </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}
