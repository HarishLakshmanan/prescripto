import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Myappointments() {

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b border-gray-200'>My Appointment</p>
      <div>
        {doctors.slice(0,3).map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-200' key={index}>
           <div>
            <img className='w-32 bg-indigo-50' src={item.image} />
           </div>
           <div className='flex-1 text-sm text-zinc-600'>
            <p className='text-neutral-800 font-semibold'>{item.name}</p>
            <p>{item.speciality}</p>
            <p className='text-zinc-700 font-medium mt-1'>Address:</p>
            <p className='text-xs'>{item.address.line1}</p>
            <p className='text-xs'>{item.address.line2}</p>
            <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25,mar,2025 | 5.30 PM</p>
           </div>
           <div></div>
           <div className='flex flex-col gap-2 justify-end'>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-gray-200 rounded hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer'>Pay Online</button>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-gray-200 rounded hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer'>Cancel appointment</button>
           </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}
