import React, { useEffect, useState } from 'react'
import slider1 from "./Pics/Slider1pic.jpg"
import slider2 from "./Pics/Slider2pic.jpg"
import slider3 from "./Pics/Slider3pic.jpg"
import slider4 from "./Pics/Slider4pic.jpg"
import slider5 from "./Pics/Slider5pic.jpg"
import slider6 from "./Pics/Slider6pic.jpg"

export default function Slider() {
    const [selected, setSelected] = useState(0);
    const images = [slider1, slider2, slider3, slider4, slider5, slider6];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected((prevSelected) => (prevSelected < images.length - 1 ? prevSelected + 1 : 0));
        }, 5000);

        // Cleanup function to prevent memory leaks
        return () => clearInterval(interval);
    }, []); // Ensure it runs once on mount
    //   ----------------------------------------------------------------------------------

  return (
    <div className='mt-4'>
    <div className='object-cover mx-6'>
    <img src={images[selected]} alt="Slider images" className='lg:h-[100vh] w-[100vw]    '/>
    </div>
  
</div> 
  )
}
