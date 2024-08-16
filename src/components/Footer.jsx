import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import map from '../assets/images/map.png'
function Footer() {
    return (
        <>
            <div className='p-10 sm:w-full m-auto w-[1390px] bg-gray-100  flex sm:flex-col justify-around rounded-2xl'>
                <div className=' sm:w-full sm:p-5  w-96 flex flex-col gap-5'>
                    <div className='flex items-center '>
                        <Box className=" w-10 h-10"><StorefrontIcon style={{ fontSize: '40px' }} /></Box>
                        <p className='text-2xl'>Ebzy</p>
                    </div>
                    <p>Selling premuim products, designed to elevate your everyday experience</p>
                    <hr className='border-2 border-gray-300 border-t-0 w-10/12' />
                    <div className='flex gap-5'>
                        <Box className='border-2 w-12 h-12 rounded-full text-center pt-2 bg-gray-200'><a href="http://"><FacebookIcon /></a></Box>
                        <Box className='border-2 w-12 h-12 rounded-full text-center pt-2 bg-gray-200'><a href="http://"><InstagramIcon /></a></Box>
                        <Box className='border-2 w-12 h-12 rounded-full text-center pt-2 bg-gray-200'><a href="http://"><LinkedInIcon /></a></Box>
                        <Box className='border-2 w-12 h-12 rounded-full text-center pt-2 bg-gray-200'><a href="http://"><XIcon /></a></Box>

                    </div>
                </div>

                <div className='flex items-center gap-16  p-5 w-80 justify-between sm:w-full sm:justify-start'>
                    <ul>
                        <li className='text-gray-800 mb-5'>Pages</li>
                        <li className='text-gray-500 mb-3'><a href="http://">Home</a></li>
                        <li className='text-gray-500 mb-3'><a href="http://">shop</a></li>
                        <li className='text-gray-500 mb-3'><a href="http://">About</a></li>
                        <li className='text-gray-500 mb-3'><a href="http://">Blog</a></li>
                    </ul>
                    <ul> 
                        <li className='text-gray-800 mb-5'>Support</li>
                        <li className='text-gray-500 mb-3'><a href="http://">FAQ</a></li>
                        <li className='text-gray-500 mb-3'><a href="http://">Contact</a></li>
                        <li className='text-gray-500 mb-3'><a href="http://">Product</a></li>
                        <li className='text-gray-500 mb-3'><a href="http://">404</a></li>
                    </ul>

                </div>
                
                <div>
                    <img className=' w-80 sm:w-full' src={map} alt="locationImg" />
                </div>
            </div>
        </>
    )
}

export default Footer