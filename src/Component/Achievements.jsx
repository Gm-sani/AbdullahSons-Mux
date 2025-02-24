import React from 'react'

export default function Achievements() {
  return (
    <div className='lg:flex flex-row justify-center gap-4'>
      <div className='p-2 bg-white w-fit hover:border-b-4 hover:border-b-red-900 shadow-md rounded-md lg:mt-0 mt-6 lg:ml-0 ml-6'>
        <p className='text-red-900 text-[3.5rem] px-12 font-semibold'>25 +</p>
        <p className='text-[1.2rem] text-red-900 px-12 tracking-wider font-semibold '>Years of Expertise in <br/> Rubber Components</p>
      </div>
      <div className='p-2 bg-white w-fit hover:border-b-4 hover:border-b-red-900 shadow-md rounded-md lg:mt-0 mt-6 lg:ml-0 ml-6'>
        <p className='text-red-900 text-[3.5rem] px-12 font-semibold'>1 +</p>
        <p className='text-[1.2rem] text-red-900 px-12 tracking-wider font-semibold '>Integrated <br/> Manufacturing Plants</p>
      </div>
      <div className='p-2 bg-white w-fit hover:border-b-4 hover:border-b-red-900 shadow-md rounded-md lg:mt-0 mt-6 lg:ml-0 ml-6'>
        <p className='text-red-900 text-[3.5rem] px-12 font-semibold'>5 +</p>
        <p className='text-[1.2rem] text-red-900 px-12 tracking-wider font-semibold '>Tons of Production <br/> Capacity Per Month</p>
      </div>
      <div className='p-2 bg-white w-fit hover:border-b-4 hover:border-b-red-900 shadow-md rounded-md lg:mt-0 mt-6 lg:ml-0 ml-6'>
        <p className='text-red-900 text-[3.5rem] px-12 font-semibold'>20 +</p>
        <p className='text-[1.2rem] text-red-900 px-12 tracking-wider font-semibold '>Skilled <br/> Employees</p>
      </div>
    </div>
  )
}
