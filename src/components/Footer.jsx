import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            {/* left  */}
            <div className="">
                <img className='mb-5 w-40' src={assets.banerlogo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum illum non laborum architecto repudiandae repellendus rem ab assumenda neque eius.</p>
            </div>

            {/* center  */}
            <div className="">
                <p className='text-xl mb-5 font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right  */}
            <div className="">
                    <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+021-1212-2121</li>
                        <li>Importan123@gmail.com</li>
                    </ul>
            </div>
        </div>
            {/* --copyright  */}
        <div className="">
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer