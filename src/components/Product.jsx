import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Accordian from './pages/Accordian'




function Buy() {
  const { id } = useParams();
  const [isproduct, setproduct] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        setLoading(false)
        setproduct(response.data)
        console.log(response.data)
      })
  }, [])



  return (
    <>
      <div className='flex  sm:flex-col flex-wrap gap-10 p-5   sm:p-3å '>
        <div className='flex flex-col gap-4'>
          {
            !isLoading ? <>
              <img className='w-[700px] flex sm:w-[80vw] sm:h-80 object-cover h-[300px] rounded-xl' src={isproduct.images[0]} alt="" />
              <div className='flex gap-5 sm:gap-2'>
                <img className='w-[340px] sm:w-[37vw]  sm:h-[35vw] h-[300px] rounded-xl' src={isproduct.images[1]} alt="" />
                <img className='w-[340px] sm:w-[37vw]  sm:h-[35vw] h-[300px] rounded-xl' src={isproduct.images[2]} alt="" />
              </div>
            </> : ""
          }
        </div>
        <div className=' w-[500px] sm:w-full p-5'>
          <h1 className='font-semi-bold text-2xl w-64'>{isproduct.title}</h1>
          <p className='w-11/12 my-3 font-thin sm:w-64  '>{isproduct.description}</p>
          <p className='font-semi-bold text-2xl'>$<span>141</span></p>
          <button className='w-full sm:w-64 rounded-3xl bg-black text-white cursor-pointer my-3'>Buy Now</button>
          <p className='text-gray-800 mb-3 font-thin w-10/12 m-auto  text-sm text-center '>Estimate delivery times: 3-6 days (International)
            Return within 45 days of purchase. Duties & taxes are non-refundable.
            Warranty
          </p>
          <Accordian/>
        </div>

      </div>
    </>
  )
}

export default Buy