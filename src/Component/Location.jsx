import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PhoneIcon from '@mui/icons-material/Phone';
import Ofc from './Pics/Ofc.jpg'

export default function Location() {
  return (
    <div>
      <div className='text-center '>
        <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold '>Step into Our Premier Office </p>
    </div>
    <div>
      <div className='flex gap-36 bg-red-100 py-8 px-8 m-auto lg:w-fit w-[100vw] mt-10 rounded-2xl'>
        <div>
            {/* ----------------------------1_1---------------------------- */}
        <div className='flex gap-3'>
            <div className=''>
                <PhoneIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600'>Requesting A Call:</p>
                <p  className='text-sm text-slate-600'>+92-308-7397758</p>
            </div>
        </div>
        {/* ----------------------------------1_2-------------------------------- */}
        <div className='flex gap-3 mt-5'>
            <div className=''>
                <MailIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600'>E-mail</p>
                <p  className='text-sm text-slate-600'>zeshanshah0308739@gmail.com</p>
            </div>
        </div>
        {/* ------------------------------1_3------------------------------- */}
        <div className='flex gap-3 mt-5'>
            <div className=''>
                <LocationOnIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600  '>Location</p>
                <p  className='text-sm text-slate-600 w-[16rem]'>5-A Saddique Center Akbar Road,Chowk Shaheedan Multan</p>
            </div>
        </div>
        {/* ------------------------------1_4------------------------------- */}
        <div className='flex gap-3 mt-5'>
            <div className=''>
                <AccessTimeFilledIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600'>Saturday - Thrusday</p>
                <p  className='text-sm text-slate-600'>9 am - 6 pm</p>
            </div>
        </div>
        </div>
        
        <div>
            <img src={Ofc} alt="Office image" className='mt-3 h-[13rem] rounded-xl md:block hidden'/>
        </div>
    </div>
    </div>
    </div>
  )
}
