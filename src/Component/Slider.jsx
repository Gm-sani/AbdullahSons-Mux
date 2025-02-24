import React from 'react'
import Slider1 from './Pics/Slider_1.jpg'
import Slider2 from './Pics/Slider_2.png'
import Slider3 from './Pics/Slider_3.jpg'
import Slider4 from './Pics/Slider_4.png'
import { useNavigate } from 'react-router-dom';

export default function Slider() {
  const navigate =useNavigate();

  return (
    <div>
        {/* outer main div */}
      <div className='lg:flex flex-row justify-center  mx-4 lg:mt-0 mt-12' onClick={()=>{navigate("Services")}}>
        {/* ---------------slider 1------------------- */}
            <div>
                <img src={Slider1} alt="" className='lg:h-[90vh] h-[25vh] lg:w-[23vw] w-[95vw] opacity-80 hover:opacity-100 hover:cursor-pointer' />
            </div>
        {/* ---------------slider 2------------------- */}

            <div>
                <img src={Slider2} alt="" className='lg:h-[90vh] h-[25vh] lg:w-[23vw] w-[95vw] opacity-80 hover:opacity-100 hover:cursor-pointer' />
            </div>
        {/* ---------------slider 3------------------- */}

            <div>
                <img src={Slider3} alt="" className='lg:h-[90vh] h-[25vh] lg:w-[23vw] w-[95vw] opacity-80 hover:opacity-100 hover:cursor-pointer' />
            </div>
        {/* ---------------slider 4------------------- */}

            <div>
                <img src={Slider4} alt="" className='lg:h-[90vh] h-[25vh] lg:w-[23vw] w-[95vw] opacity-80 hover:opacity-100 hover:cursor-pointer' />
            </div>
      </div>
    </div>
  )
}
