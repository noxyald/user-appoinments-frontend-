import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className="text-center text-2xl pt-10 text-gray-600">
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
        </div>


        <div className=" my-10 flex flex-col justify-center  md:flex-row gap-10 mb-28 text-sm">
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className="flex flex-col justify-center items-start gap-6">
            <p className='font-semibold text-large text-gray-600'>Our Office</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis!</p>
            <p className='text-gray-500'>telp: 0212-12-21212</p>
            <p>lorem@gamil.com</p>
            <p className='font-semibold text-lg text-gray-600'>CARREER</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-md'>explore job</button>

          </div>
        </div>
    </div>
  )
}

export default Contact