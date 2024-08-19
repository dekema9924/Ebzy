import React from 'react'

function Newsletter() {
    return (
        <form className='flex flex-col gap-5 items-center justify-center bg-gray-100 h-80 my-5' action="">
                <h1 className='font-semi-bold text-center w-80 text-2xl'>Subscribe to our newsletter and get 15% off</h1>
                <p className='text-sm font-thin w-full text-center'>Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing to our newsletter.</p>
            <div className='flex sm:flex-col gap-6 items-center justify-center '>
                <input className='w-[400px] text-gray-700 sm:w-80 h-16 bg-white outline-none rounded-2xl pl-10  ' type="email" name="" id="" placeholder='your email address' />
                <button className='bg-black sm:w-80 h-16 text-white rounded-2xl w-[400px]'>Subscribe</button>
            </div>
        </form>
    )
}

export default Newsletter