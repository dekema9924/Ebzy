import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className='pl-20 pt-10 sm:p-5 flex flex-col gap-8 '>
        <h1 className='text-4xl w-[460px] sm:w-[300px] font-semibold sm:font-medium sm:text-2xl ' >Accessible exellence:
          Perfect tech for everyone!
        </h1>

        <p className=' text-lg text-thin text-gray-600 w-[740px] sm:w-[290px]'>
          With over two decades of expertise, we've meticulously crafted collections that epitomize enduring quality and technological innovation, catering to the diverse needs of our clients.
        </p>
        <img className='rounded-3xl h-[600px] w-[1200px] sm:h-[400px] object-cover ' src="https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className='flex gap-16 justify-center sm:flex-col sm:justify-start sm:gap-10'>
          <div className='flex gap-3 items-center'>
            <LocalShippingIcon />
            <div>
              <p className='font-semi-bold'>Free Shipping</p>
              <p className='text-gray-800 font-thin'>$24+ orders ship free</p>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <PaymentIcon />
            <div>
              <p className='font-semi-bold'>Secure Payments</p>
              <p className='text-gray-800 font-thin'>Trusted payment options</p>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <KeyboardReturnIcon />
            <div>
              <p className='font-semi-bold'>35 Days Free Return</p>
              <p className='text-gray-800 font-thin'>Easy, risk-free returns</p>
            </div>
          </div>

        </div>

        <div className='flex justify-center gap-10 sm:flex-col'>
          <div className=' w-96 sm:w-full '>
            <img className='w-96 h-96 rounded-3xl object-cover' src="https://images.unsplash.com/photo-1724044753951-5f12c30dd461?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 className='font-semi-bold my-3 text-2xl'>Exclusive Range</h3>
            <p className='text-gray-800 font-thin'>Immerse yourself in our meticulously curated selection, backed by over 20 years of industry experience.</p>
          </div>

          <div className=' w-96 sm:w-full '>
            <img className='w-96 h-96 rounded-3xl object-cover ' src="https://images.unsplash.com/photo-1476365518243-f738bf58443d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 className='font-semi-bold my-3 text-2xl'>Enduring Innovatione</h3>
            <p className='text-gray-800 font-thin'>Our products transcend fleeting trends, embodying timeless innovation that ensures they remain relevant and cutting-edge for years.</p>
          </div>

          <div className=' w-96 sm:w-full '>
            <img className='w-96 h-96 rounded-3xl object-cover ' src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 className='font-semi-bold my-3 text-2xl'>Ethical Sourcing</h3>
            <p className='text-gray-800 font-thin'>Shop with confidence knowing that our products are sourced from reputable factories worldwide, adhering to stringent compliance standards.</p>
          </div>
        </div>

        <div className='flex flex-col gap-20 mt-10 justify-center m-auto sm:w-full'>
          <div className='flex sm:flex-col  justify-around items-center'>
            <img className='w-[600px] h-[420px] rounded-2xl object-cover' src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='flex flex-col justify-center  items-center gap-3'>
              <h1 className='font-meduim  w-72 text-2xl mt-3'>Premuim Tech Selections</h1>
              <p className=' w-[590px] sm:w-80 text-center text-gray-700'>Our pursuit of excellence involves extensive exploration of top-tier factories globally, ensuring our tech lineup mirrors the standards upheld by renowned brands. We forge strong partnerships with these facilities, prioritizing factors like sustainability and ethical production practices.</p>
              <Link to={'/allproducts'}>
                <button className='border-2 border-black w-40  h-16 rounded-3xl font-thin'>Check our Store</button>
              </Link>
            </div>
          </div>

          <div className='flex flex-row-reverse justify-around items-center sm:flex-col m-auto sm:w-full '>
            <img className='w-[600px] h-[420px] rounded-2xl object-cover' src="https://images.unsplash.com/photo-1521649415036-659258dc424f?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='flex flex-col justify-center  items-center gap-3'>
              <h1 className='font-meduim  w-72 text-2xl mt-3'>Premuim Tech Selections</h1>
              <p className=' w-[590px] sm:w-80 t text-center text-gray-700'>Our pursuit of excellence involves extensive exploration of top-tier factories globally, ensuring our tech lineup mirrors the standards upheld by renowned brands. We forge strong partnerships with these facilities, prioritizing factors like sustainability and ethical production practices.</p>
              <Link to={'/blog'}>
                <button className='border-2 border-black w-40  h-16 rounded-3xl font-thin'>Check our Blog</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About