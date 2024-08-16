import React, { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const [isopen, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(true)
  }
  const HandleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <header className='h-20 flex items-center justify-between'>
      <Link to={'/'}>
        <div className='flex items-center gap-1 ml-10'>
           <Box className=" w-10 h-10"><StorefrontIcon style={{ fontSize: '40px' }} /></Box>
          <p className='text-2xl'>Ebzy</p>
        </div>
        </Link>
        <nav className='list-none sm:hidden  flex w-[600px] justify-between text-xl text-gray-400 capitalize mr-10  '>
         <Link to={'/allproducts'}><li className='hover:text-gray-600 transition-all delay-200'>All Products</li></Link>
         <Link to={'/about'}><li className='hover:text-gray-600 transition-all delay-200'>About Us</li></Link>
         <Link to={'/'}><li className='hover:text-gray-600 transition-all delay-200'>Home</li></Link>
         <Link to={'/blog'}><li className='hover:text-gray-600 transition-all delay-200'>Blog</li></Link>
         <Link to={'/contact'}><li className='hover:text-gray-600 transition-all delay-200'>Contact</li></Link>
        </nav>
        {
          !isopen ? <Box onClick={HandleOpen} className="hidden cursor-pointer sm:block "><MenuIcon className=' mr-5 ' /></Box>
            : <Box onClick={HandleClose} className="hidden cursor-pointer sm:block " ><CloseIcon className=' mr-5 ' /></Box>
        }
        <nav style={{top: isopen ? "75px" : "-500px", transitionDelay: ".3s"}} className='list-none flex flex-col px-5 py-5 justify-between text-xl text-gray-400 capitalize mr-10 h-96 z-50 w-full pb-16 bg-white sm:flex md:hidden absolute transition-all'>
        <Link onClick={HandleClose} to={'/allproducts'}><li className='hover:text-gray-600 transition-all delay-200'>All Products</li></Link>
        <hr className='border-2 border-gray-300 border-t-0' />
        <Link onClick={HandleClose} to={'/about'}><li className='hover:text-gray-600 transition-all delay-200'>About Us</li></Link>
        <hr className='border-2 border-gray-300 border-t-0' />
        <Link onClick={HandleClose} to={'/'}><li className='hover:text-gray-600 transition-all delay-200'>Home</li></Link>
        <hr className='border-2 border-gray-300 border-t-0' />
        <Link onClick={HandleClose} to={'/blog'}><li className='hover:text-gray-600 transition-all delay-200'>Blog</li></Link>
        <hr className='border-2 border-gray-300 border-t-0' />
        <Link onClick={HandleClose} to={'/contact'}><li className='hover:text-gray-600 transition-all delay-200'>Contact</li></Link>
        </nav>

      </header>

    </>
  )
}

export default Header