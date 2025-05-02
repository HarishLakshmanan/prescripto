import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'



export default function Navbar() {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='' />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/' className={({ isActive }) =>
          isActive
            ? 'text-blue-600 border-b-3 border-blue-600 '
            : 'text-black'
        }
        >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) =>
          isActive
            ? 'text-blue-600 border-b-3 border-blue-600 '
            : 'text-black'
        }
        >
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) =>
          isActive
            ? 'text-blue-600 border-b-3 border-blue-600 '
            : 'text-black'
        }
        >
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) =>
          isActive
            ? 'text-blue-600 border-b-3 border-blue-600 '
            : 'text-black'
        }
        >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto' />
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt=' ' />
              <img className='w-2.5' src={assets.dropdown_icon} alt=' ' />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='cursor-pointer text-white px-8 py-3 rounded-full font-light hidden md:block' style={{ background: "#5f6FFF" }}>Create account</button>

        }
      </div>
    </div>
  )
}
