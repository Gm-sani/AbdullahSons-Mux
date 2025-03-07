import React, { useEffect } from 'react'
import logo from './Pics/AB logo.png' 
import { useNavigate } from 'react-router-dom';

import gsap from 'gsap';

import { IconButton } from '@mui/material';
import DialpadIcon from '@mui/icons-material/Dialpad';
import TimerIcon from '@mui/icons-material/Timer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

import InstagramIcon from '@mui/icons-material/Instagram';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function Navbar() {
  const navigate =useNavigate();

    useEffect(()=>{
        const tl =gsap.timeline();
    
        tl.to("#lownav",{
            x:-20,
            opacity:1,
            duration:1,
        })
        tl.to("#logo",{
          
          opacity:1,
          duration:1,
      })
    
        
    
    },[])

  return (
    <div className=''>
    <div className='lg:flex justify-between md:flex-row lg:px-7 px-2 bg-black text-white p-2 '>
      <div className='flex gap-2 '>
        <div> 
            <DialpadIcon className="p-[0.15rem] text-[#760422]"/>
        </div>
        <div className='py-[0.15rem] text-[0.93rem] font-mono'>HELP DESK :</div>
        <div className='py-[0.15rem] text-[0.93rem] font-semibold tracking-tighter'>+92-308-7397758 </div>
      </div>

      <div className='flex'>
      <TimerTwoToneIcon className="p-[0.15rem] text-[#760422] "/>
      <div className='py-[0.15rem] text-[0.90rem] font-semibold tracking-tighter'>Saturday - Thrusday 09:00 am - 06:00 Pm</div>
      </div>

      <div className='flex '>
      <FmdGoodIcon className="p-[0.15rem] text-[#760422]"/>
      <div className='py-[0.15rem] text-[0.90rem] font-semibold tracking-tighter'>Head Office: 5-A , Saddique Center , Akbar Road, Chowk Shaheedan , Multan</div>
      </div>
      
      <div>
        <div className='flex gap-2 px-2 '>
          <p className='text-[0.93rem] mt-[0.2rem] font-serif'>Follow us:</p>
          <div>
            <a href="https://www.facebook.com/">
            <FacebookOutlinedIcon className='p-[0.15rem] text-white '/>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/">
            <p className='p-[0.15rem] text-black font-semibold text-xs px-[0.25rem] mt-[0.3rem] bg-white rounded-full'>in</p>
            {/* <XIcon className=''/> */}
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
            <InstagramIcon className='p-[0.15rem] text-white '/>
            </a>
          </div>
        </div>
      </div>
    </div>
{/* ----------------------------------low navbar------------------------------------------------- */}
<div className='lg:px-12 px-8 lg:flex md:flex-row  gap-[10.3rem]'>
    <div >
        <img onClick={()=>{navigate("/")}} src={logo} alt="logo" id='logo' className='my-2 lg:ml-2 mx-auto  cursor-pointer opacity-5 h-[7.5rem]'/>
    </div>
    <div id='lownav' className='flex gap-16 lg:text-[1.15rem] text-xs pt-[3.2rem] font-light opacity-0'>
        <div onClick={()=>{navigate("Overview")}}  className='cursor-pointer h-1  '>Comapny Overview </div>
       
        <div onClick={()=>{navigate("Services")}} className='cursor-pointer h-1'> Services</div>
        
        <div onClick={()=>{navigate("Event")}} className='cursor-pointer h-1'>Event & Media</div>
        {/* <div onClick={()=>{navigate("contact")}} className='cursor-pointer h-1 '>Contact us</div> */}
    </div>
    {/* <div className=''>
    <div id='lownav' className='flex gap-2 text-[1.15rem] lg:mt-[1.5rem] mt-[4rem] lg:px-2 px-24 lg:mx-2 mx-4  p-2 font-light opacity-0 hover:gap-3 hover:bg-red-200 shadow-md shadow-red-400 bg-red-600 hover:shadow-lg hover:shadow-red-300 cursor-pointer hover:text-black text-white rounded-full '>
        <div onClick={()=>{console.log("Company Overview")}} className='cursor-pointer h-1 tracking-tight '>Appointment</div>
        <div><ArrowRightAltIcon className=''/></div>
    </div>
    </div> */}
    
</div>

</div>
  )
}
