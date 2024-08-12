import React, { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

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
        <div className='flex items-center gap-1 ml-10'>
          <Box className=" w-10 h-10"><StorefrontIcon style={{ fontSize: '40px' }} /></Box>
          <p className='text-2xl'>Ebzy</p>
        </div>
        <nav className='list-none sm:hidden  flex w-[600px] justify-between text-xl text-gray-400 capitalize mr-10  '>
          <li>All Products</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact</li>
        </nav>
        {
          !isopen ? <Box onClick={HandleOpen} className="hidden cursor-pointer sm:block "><MenuIcon className=' mr-5 ' /></Box>
            : <Box onClick={HandleClose} className="hidden cursor-pointer sm:block " ><CloseIcon className=' mr-5 ' /></Box>
        }
        <nav style={{top: isopen ? "75px" : "-500px", transitionDelay: ".5s"}} className='list-none flex flex-col px-5 py-5 justify-between text-xl text-gray-400 capitalize mr-10 h-80 w-full sm:flex md:hidden absolute transition-all'>
          <li>All Products</li>
          <hr className='border-2 border-gray-300 border-t-0' />
          <li>About Us</li>
          <hr className='border-2 border-gray-300 border-t-0' />
          <li>FAQ</li>
          <hr className='border-2 border-gray-300 border-t-0' />
          <li>Blog</li>
          <hr className='border-2 border-gray-300 border-t-0' />
          <li>Contact</li>
        </nav>

      </header>

    </>
  )
}

export default Header