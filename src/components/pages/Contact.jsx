import React from 'react'

function Contact() {
  return (
    <>
      <div className='p-5  flex flex-col gap-5'>
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
        <p className='text-lg font-thin w-[600px] mb-5 sm:w-full'>
          We're here to assist you with any inquiries, feedback, or assistance you may need. Whether you have questions about products, orders, or general inquiries, our dedicated customer support team is ready to help.
          Phone number + 123 456 789
          Call our team directly. We will provide information, answer technical questions, or schedule an appointment.
          E-mail example@gmail.com Use email to provide information about the project. We will respond as soon as possible, providing comprehensive support.
        </p>

        <form className='flex sm:flex-col gap-5' action="">
          <div className=' w-[420px] sm:w-full flex flex-col gap-5'>
            <div className=' h-[300px] bg-gray-100 rounded-3xl'>
              <div className=' flex flex-col justify-between h-[280px] p-5'>
                <div>
                  <p className='text-gray-700 text-lg '>Phone number</p>
                  <p className='text-gray-700 text-lg'>+ 123 456 789</p>
                </div>
                <div>
                  <p className='text-lg font-thin'>Call our team directly. We will provide information, answer technical questions, or schedule an appointment.</p>
                </div>
              </div>
            </div>

            <div className=' h-[300px] bg-gray-100 rounded-3xl'>
              <div className='flex flex-col justify-between h-[280px] p-5'>
                <div>
                  <p className='text-gray-700 text-lg '>E-mail</p>
                  <p className='text-gray-700 text-lg'>example@gmail.com</p>
                </div>
                <div>
                  <p className='text-lg font-thin'>Use email to provide information about the project. We will respond as soon as possible, providing comprehensive support.</p>
                </div>
              </div>

            </div>
          </div>

          <div className='bg-gray-100 p-5 flex flex-col  gap-4 rounded-3xl '>
            <h1 className='text-2xl font-semibold'>Drop us a message</h1>
            <p className='text-2xl font-thin '>
               We're always here to assist you at Etec. Our customer support team is dedicated to addressing your inquiries.
            </p>
            <div className='flex gap-3 flex-wrap'>
              <input className='h-14 rounded-3xl w-80 pl-10 sm:w-full' type="text" placeholder='Name' />
              <input className='h-14 rounded-3xl w-80 pl-10 sm:w-full' type="email" placeholder='Email'/>
            </div>
            <input className=' pl-5 text outline-none rounded-2xl h-[300px]'  type="text" placeholder='Message' />
            <button className='bg-black text-white rounded-2xl h-14'>Send a message</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default Contact