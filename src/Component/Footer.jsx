import React from 'react'
import footerPic from "./Pics/footer4.jpg" 
import logo from "./Pics/AB logo.png" 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
      const navigate =useNavigate();
    
  return (
    <div className='md:block hidden mt-4'>
    {/* -----------------------------------backpic----------------------------- */}
    <div className='absolute'>
        <img src={footerPic} alt="" className='h-[75vh] w-[100vw] '/>
        </div>
{/* ---------------------------------Front pic-------------------------------------- */}
    <div className=' absolute'>
     <div className='flex  pt-12 gap-24'>
        {/* ----------------------------------Intro------------------------------------------- */}
     <div className='ml-20'> 
            <img src={logo} alt="" onClick={()=>{console.log("home")}} className='h-[7rem] cursor-pointer'/>
            {/* <p className='text-[1.1rem] text-white font-semibold tracking-tighter mt-5 w-44'>
            Is working since 2009 and serve the nation with many services. We are putting our best with our dedication and sincerity.
            </p> */}
            {/* -----------------------------------Links------------------------------------- */}
            <div className='flex gap-2 px-1 mt-5'>
            <div className=' p-1 px-3 rounded-full border-2 text-white border-red-900 hover:bg-white hover:text-red-800 cursor-pointer'>
            <a href="https://web.facebook.com/">
            <p className='text-xl font-bold  '>f</p>
            </a>
            </div>
            
            <div  className=' rounded-full border-2 text-white border-red-900 hover:bg-white  hover:text-red-800 cursor-pointer'>
            <a href="https://www.linkedin.com/">
            <p className='p-[0.15rem]  font-semibold text-[1rem] px-[0.75rem] mt-[0.3rem]  rounded-full'>in</p>
            </a>
            </div>
            
            <div  className=' p-1 rounded-full border-2 text-white border-red-900 hover:bg-white hover:text-red-800 cursor-pointer'>
            <a href="https://www.instagram.com/">
            <InstagramIcon className='text-xl font-bold '/>
            </a>
           
            </div>
            </div>
        </div>
        {/* ---------------------------------1st box ------------------------------ */}
        <div className=''>
            <p className='text-[2rem] pl-12 text-[#760422] font-semibold '>Services</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16 ">
                <li className='hover:text-red-500 cursor-pointer'>Rubber O-Ring</li>
                <li className='hover:text-red-500 cursor-pointer'>Oil Seals</li>
                <li className='hover:text-red-500 cursor-pointer'>Rubber Coupling Bush</li>
                <li className='hover:text-red-500 cursor-pointer'>Rubber Foundations</li>
                <li className='hover:text-red-500 cursor-pointer'>Rubber Cords</li>
                <li className='hover:text-red-500 cursor-pointer'>Teflon Sheets</li>
            </ul>
        </div>
        {/* ----------------------------------2nd list ----------------------------- */}
        <div className=''>
            <p className='text-[2rem] text-[#760422] font-semibold pl-12'>Explore Link</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16">
                <li onClick={()=>{navigate("OverView")}} className='hover:text-red-500 cursor-pointer'>Comapny Overview</li>
                <li onClick={()=>{navigate("Services")}} className='hover:text-red-500 cursor-pointer'>Services</li>
                {/* <li onClick={()=>{navigate("destination")}} className='hover:text-red-500 cursor-pointer'>Contact Details</li> */}
                <li onClick={()=>{console.log("event")}} className='hover:text-red-500 cursor-pointer'>Event & Media</li>
                <li onClick={()=>{navigate("contact")}} className='hover:text-red-500 cursor-pointer'>Contact us</li>
                {/* <li onClick={()=>{console.log("apply")}} className='hover:text-red-500 cursor-pointer'>Appointment</li> */}
            </ul>
        </div>
        {/* ----------------------------------------3rd list---------------------------------- */}
        <div className=''>
            <p className='text-[2rem] text-[#760422] font-semibold pl-12'>Our Branch</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16">
                <li className='hover:text-red-500 cursor-pointer'>Head Office: 5-A , Saddique Center</li>
                <p className='hover:text-red-500 cursor-pointer'> Akbar Road, Chowk Shaheedan , Multan</p>
                
                <li className='hover:text-red-500 cursor-pointer'>zeshanshah0308739@gmail.com</li>
                <li className='hover:text-red-500 cursor-pointer'>92-308-7397758</li>
                
            
            </ul>
        </div>
        
     </div>
     {/* ------------------------------------list end------------------------------ */}
     <p className='text-[1.5rem] ml-9 mt-12  text-gray-200 font-semibold '>Do you have questions or want more</p>
     <p className='text-[1.5rem] ml-9  text-gray-200 font-semibold border-b border-white '>information? Contact us now</p>
     <div className='flex justify-between '>
        <div>
        <p className='text-[0.9rem] text-gray-200 ml-9 pt-2 pb-2 cursor-pointer'>Copyright © 2025 abdullahsons All rights reserved.</p>
        </div>
        <div className=''>
            <a href="https://gmsportfolio.netlify.app/">
            <p  className='text-[0.9rem] text-white mx-5 pt-2 pb-2 cursor-pointer hover:text-slate-400'>Developed by Gms</p>
            </a> 
        </div>
     </div>
    
    </div>
    </div>
  )
}
