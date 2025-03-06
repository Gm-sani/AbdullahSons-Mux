import React from 'react'
import gallery1 from './Pics/Gallery2.jpg'
import gallery2 from './Pics/Gallery3.jpg'
import gallery3 from './Pics/Gallery4.jpg'
import gallery4 from './Pics/Gallery5.jpg'
import gallery5 from './Pics/Gallery6.jpg'
import gallery6 from './Pics/Gallery7.jpg'

export default function Gallery() {
  return (
    <div>
    <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>Explore Our Journey</p>
  <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold text-center '> Explore our Exclusive Gallery </p>
<div className='lg:flex md:flex-row  justify-center gap-10 mt-6 lg:mx-0 mx-[5rem]'>
    <div className=''>
        <img src={gallery1} alt="gallery1" className='rounded-2xl h-[23rem] w-[17.3rem]'/>
    </div>
    <div className='lg:my-0 my-6'> 
        <img src={gallery2} alt="gallery2" className='rounded-2xl h-[23rem] w-[17.3rem]'/>
    </div>
    <div>
        <img src={gallery3} alt="gallery3" className='rounded-2xl h-[23rem] w-[17.3rem]'/>
    </div>
</div>
<div className='lg:flex md:flex-row  justify-center gap-10 mt-8 lg:mx-0 mx-[5rem] '>
    <div >
        <img src={gallery4} alt="gallery4" className='rounded-2xl h-[23rem] w-[17.3rem]'/>
    </div>
    <div className='lg:my-0 my-6'>
        <img src={gallery5} alt="gallery5" className='rounded-2xl h-[23rem] w-[17.3rem]'/>
    </div>
    <div>
        <img src={gallery6} alt="gallery6" className='rounded-2xl h-[23rem] w-[17.3rem]'/>
    </div>
</div>
</div>
  )
}
