import React from 'react'
import since from './pics/Since.png'
import hndshk from './pics/handShake.png'
import intropic from './pics/IntroMilitaryPic.jpg'
export default function Intro() {
  return (
    <div className=''>
    <div className='min-[310px]:ml-[10rem] min-[310px]:m-12 lg:m-12  '>
            <div className='flex gap-8 justify-center'>
            <div>
            <p className='text-[1rem] text-red-600 tracking-wider font-semibold'>INTRODUCTION</p>
                <p className='text-[2rem] font-semibold mt-4'>Abdullah Sons</p>
                <p className='lg:w-[21rem] w-[20rem] text-gray-800 lg:tracking-wider tracking-tight mt-4 text-[1rem]'>Abdullah Sons is a leading manufacturer of high-quality industrial rubber and plastic parts, delivering precision-engineered solutions for various industries. With advanced technology and expertise, we ensure durability, reliability, and superior performance in every product we manufacture. </p>
            <div className='flex gap-5 mt-12'>
            <img src={hndshk} alt="hand shake" className='h-[2.5rem]' />
                <div>
                    <p className='text-xl font-semibold mt-[-0.7rem]'>Our Mission</p>
                    <p className='lg:w-[21rem] w-[17rem] text-gray-800 tracking-tight mt-2 text-[0.92rem]'>To be a global leader in industrial rubber and plasticsolutions, setting the benchmark for quality, innovation, and reliability in every product we deliver.</p>
                </div>
            </div>
            <div className='flex gap-3 mt-12'>
            <img src={since} alt="since" className='h-[2.7rem]' />
                <div>
                    <p className='text-xl font-semibold mt-[-0.7rem]'>Established </p>
                    <p className='lg:w-[21rem] w-[17.5rem] text-gray-800  tracking-tight  mt-2 text-[0.92rem]'>Established in 2000, It has been a trusted manufacturer of high-quality industrial rubber and plastic parts.</p>
                </div>
            </div>
            </div>
    {/* -------------------------------------Right img---------------------------------- */}
            <div>
                <img src={intropic} alt="intropic" className='h-[30rem] w-[45rem] md:block hidden' />
            </div>
            </div>
          
        </div>
        </div>
  )
}
