import React, { useState } from 'react'
import HomeIcon from '../assets/images/logo.svg';
import menuOpen from '../assets/images/icon-menu.svg';
import menuClose from '../assets/images/icon-menu-close.svg';

function Navbar() {
    const [menu, setMenu] = useState(true);
  return (
    <div className='flex justify-between pt-5 relative'>
      <div className='Img-Icon'>
        <img src={HomeIcon} alt='Home Icon'/>
      </div>
      
      <div className='Menu hidden md:flex'>
        <p className='pl-16 pr-2 cursor-pointer text-lg'>Home</p>
        <p className='pl-16 pr-2 cursor-pointer text-lg'>New</p>
        <p className='pl-16 pr-2 cursor-pointer text-lg'>Popular</p>
        <p className='pl-16 pr-2 cursor-pointer text-lg'>Trending</p>
        <p className='pl-16 pr-2 cursor-pointer text-lg'>Categories</p>
      </div>

      <div className='Img-Icon md:hidden absolute right-0' onClick={()=>setMenu(!menu)}>
        <img src={menu?menuOpen:menuClose} alt='Home Icon'/>
      </div>
      {
        !menu &&

        <div className='Menu md:hidden absolute h-screen right-0 top-20 left-1/4'>
        <p className='pl-8 pt-8 font-semibold text-start cursor-pointer text-2xl text-black'>Home</p>
        <p className='pl-8 pt-8 font-semibold text-start cursor-pointer text-2xl text-black'>New</p>
        <p className='pl-8 pt-8 font-semibold text-start cursor-pointer text-2xl text-black'>Popular</p>
        <p className='pl-8 pt-8 font-semibold text-start cursor-pointer text-2xl text-black'>Trending</p>
        <p className='pl-8 pt-8 font-semibold text-start cursor-pointer text-2xl text-black'>Categories</p>
      </div>
      }
      
    </div>
  )
}

export default Navbar
