import React from 'react'
import Marquee from "react-fast-marquee";

import Client1 from './Pics/Client1.png'
import Client2 from './Pics/Client2.png'
import Client3 from './Pics/Client3.png'
import Client4 from './Pics/Client4.png'
import Client5 from './Pics/Client5.png'
import Client6 from './Pics/Client6.png'
import Client7 from './Pics/Client7.png'
import Client8 from './Pics/Client8.png'

export default function Client() {
  return (
    <div className='pt-2 h-fit pb-6  mt-3'>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-4'>Honored Collaborators</p>
      <p className='text-[2rem] font-semibold mt-[0.1rem] text-center tracking-wide'>Our Clients</p>
      <Marquee pauseOnHover gradient >
      <div className='flex gap-12 justify-center'>
        {/* ---------------------------------box 1-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client1} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>FATIMA SUGAR MILSS</p>
        </div>
         {/* ---------------------------------box 2-------------------------- */}
         <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client2} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>SHEIKHOO SUGAR MILLS</p>
        </div>
         {/* ---------------------------------box 3-------------------------- */}
         <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client3} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>PAK ARAB FERTILIZERS</p>
        </div>
        {/* ---------------------------------box 4-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client4} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>FATIMA FERTILIZERS</p>
        </div>
        {/* ---------------------------------box 5-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client5} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>OGDP</p>
        </div>
        {/* ---------------------------------box 6-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client6} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>KAPCO</p>
        </div>
        {/* ---------------------------------box 7-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={Client7} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>DG CEMENT</p>
        </div>
        {/* ---------------------------------box 8-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500 mr-10'>
            <img src={Client8} alt="Client1" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <p className='text-sm mt-1'>QASBA</p>
        </div>
        
      </div>
      </Marquee>
    </div>
  )
}
