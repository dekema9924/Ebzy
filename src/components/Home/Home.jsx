import React from 'react'
import { Link } from 'react-router-dom'
import Featured from './Featured'
import applewatch from '../../assets/images/applewatch.png'
import display from '../../assets/images/display.png'
import shoes from '../../assets/images/shoes.png'
import furniture from '../../assets/images/furniture.png'


function Home() {
  return (
    <>
      <div>
        <h1 className='font-semibold text-5xl w-[590px] sm:w-[300px] ml-5 mt-10'>Elevate your lifestyle with premuim essentials</h1>
        <div className='flex items-center sm:items-start sm:flex sm:flex-col justify-between'>
          <p className='ml-3 w-96 sm:w-72 font-thin text-lg mt-5'>Elevate your daily routine with our meticulously selected premuim goods and curated essentials.</p>
          <Link to={'/allproducts'}><p className='border-2 mr-5 sm:mr-0 border-gray-400 font-normal w-60 h-16 rounded-[300px] text-center py-4 mt-5'>Browse all products</p></Link>
        </div>
        <Featured />

        <h1 className='text-4xl font-semi-bold mt-24  ml-5 '>Browser by categories</h1>
        <p className='text-gray-600 mb-10 text-lg w-[400px] ml-5 sm:w-72 mt-3'>Explore our diverse range of categories tailored to meet your specific needs and interest.</p>


        <div className=' gap-10 p-5 flex sm:flex-col h-fit pb-7 w-full '>
          <div className=' w-11/12 sm:w-[100%] rounded-2xl bg-gray-100 p-5'>
            <h2 className='text-gray-800 font-semibold mb-5 '>All products</h2>
            <p className=' w-[500px] sm:w-64 font-thin '>Discover endless possibilities with our All products category. SHop now for everything you need at your finger tips.</p>
            <button className='border-2 border-gray-700 px-16 py-3 rounded-3xl font-thin mt-5 hover:bg-gray-200 transition-all delay-200 ' >
              <Link to={'/allproducts'}>All products</Link>
            </button>
            <img src={applewatch} alt="" />

          </div>

          <div className='flex gap-7 z-20 flex-wrap'>
            <div className='w-[600px] rounded-2xl h-60 flex sm:flex-col sm:w-[100%] sm:h-[400px] bg-gray-100 p-5 '>
              <div>
                <h1 className='text-gray-800 font-semibold mb-5'>Displays</h1>
                <p className=' w-[250px] sm:w-60 font-thin'>Experience crystal-clear clarity and vibrant visuals with our Displays</p>
                <button className='border-2 border-gray-700 px-10 py-3 rounded-3xl font-thin mt-5 hover:bg-gray-200 transition-all delay-200 ' >
                  <Link to={'/allproducts'}>Electronics</Link>
                </button>
              </div>

              <img className='w-80' src={display} alt="" />
            </div>


            <div className='flex h-[250px] rounded-2xl bg-gray-100 sm:w-full flex-col justify-center items-center  w-[270px] '>
              <img className='w-[300px]' src={shoes} alt="" />
              <button className='border-2 w-[130px] relative bottom-16 z-50 bg-white border-gray-700 px-10 py-3 rounded-3xl font-thin mt-5 hover:bg-gray-200 transition-all delay-200 ' >
                <Link to={'/allproducts'}>Shoes</Link>
              </button>

            </div>

            <div className='flex rounded-2xl bg-gray-100 h-[250px] flex-col sm:w-full justify-center items-center w-[270px] '>
              <img className='w-[170px]' src={furniture} alt="" />
              <button className='border-2 w-[130px] relative bottom-16 z-50 bg-white border-gray-700 px-10 py-3 rounded-3xl font-thin mt-5 hover:bg-gray-200 transition-all delay-200 ' >
                <Link to={'/allproducts'}>Furniture</Link>
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home