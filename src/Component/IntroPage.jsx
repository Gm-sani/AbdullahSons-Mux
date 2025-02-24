import React from 'react'
import OverViewPic6 from './pics/OverViewPic6.jpg'
import { useNavigate } from 'react-router-dom';

export default function IntroPage(props) {
    const navigate =useNavigate();
  
  return (
    <div className='lg:pb-[22rem] pb-[12rem] lg:mt-0 mt-12'>
      <div className=' my-4 '>
        <img src={OverViewPic6} alt="OverViewPic" className=' lg:h-[22rem] md:h-[12rem] lg:w-[78rem] lg:mx-12 rounded-3xl absolute ' />
      </div>
      <div className='lg:ml-28 ml-10 lg:mt-16 mt-6 absolute '>
        <p className='lg:text-[4rem] text-[2.5rem] font-bold text-slate-100 lg:tracking-wider tracking-tighter '>{props.namm}</p>
        <div className='flex gap-2'>
        <p onClick={()=>{navigate("/")}}  className='text-xl text-slate-100 hover:text-red-200 cursor-pointer'>Abdullah Sons /</p>
        <p className='text-xl text-white'>{props.namm}</p>
        </div>
        
      </div>
    </div>
  )
}
