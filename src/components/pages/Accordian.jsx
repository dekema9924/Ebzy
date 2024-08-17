import React from 'react'
import ShieldIcon from '@mui/icons-material/Shield';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from 'react';


function Warranty() {
    const [isclicked, setClicked] = useState(false)

    const HandleCLick = ()=>{
        setClicked((prev)=>!prev)
    }

    return (
        <>
            <div className='h-20 overflow-hidden transition-all delay-200' style={{height: isclicked ? "230px" : ""}}>
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center ml-3 p-5'>
                        <ShieldIcon />
                        <p className='text-gray-600 font-thin'>Warranty</p>
                    </div>
                    <ArrowRightAltIcon style={{rotate: isclicked ? "90deg": ""}}  onClick={HandleCLick} className='mr-3 cursor-pointer transition-all delay-200' />
                </div>
                <hr className='border-2 border-gray-300 border-t-0 w-10/12 m-auto' />
                <div className='flex flex-col gap-4 p-5'>
                        <p className='text-sm font-thin'>Etec offers a two-year manufacturer warranty on all new headphones purchased from authorized retailers in most countries. Refurbished products purchased from authorized retailers are covered by a one-year manufacturer warranty. If you believe your product is faulty and is within the warranty period, please fill out this form to submit a warranty claim here.</p>
                </div>
            </div>
        </>
    )
}

export default Warranty