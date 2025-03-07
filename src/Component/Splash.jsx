import React, { useEffect } from 'react'
import logo from './Pics/AB logo.png' 
import gsap from 'gsap';


export default function Splash() {

    useEffect(()=>{
        const tl =gsap.timeline();

        tl.to("#logo",{
             opacity:1,
            duration:2,
            scale:3,
        })
        
    },[])

  return (
    <div id="main" className=' bg-red-50 h-screen w-screen'>
        <div className='flex justify-center content-center pt-52'>
        <img id='logo' src={logo} alt="logo" className='h-[3rem] opacity-0'/>
        </div>
    </div>
  )
}
