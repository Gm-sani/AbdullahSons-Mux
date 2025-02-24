import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function ServiceBox(props) {
  return (
    <div className='lg:mt-0 mt-[14rem]'>
          <img src={props.pic} alt="servicepic1" className='h-[15rem] w-[18.5rem]'/>
          <div className='p-6 bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
              <p className='text-xl font-semibold text-center '>{props.title}</p>
              <p className='text-gray-700  text-[0.9rem] mt-3 text-center w-[14.5rem]'>{props.description}
              {/* <ArrowCircleRightIcon onClick={()=>{console.log("Service  clicked")}}/> */}
              </p>
          </div>
      </div>
  )
}
