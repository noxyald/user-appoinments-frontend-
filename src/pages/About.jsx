import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">

        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

        <div className="my-10 flex flex-col md:flex-row gap-12">

          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate et sapiente voluptatum dolorum fuga, minima eius ipsa eligendi ullam ratione unde eaque error sed ducimus animi voluptatibus asperiores autem cumque amet distinctio veniam illo? Quisquam voluptatem nam laudantium corrupti laboriosam quidem deserunt tempore nihil, aspernatur cum iste fuga ad!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, necessitatibus, distinctio perspiciatis saepe pariatur ea unde soluta, eum natus temporibus corrupti blanditiis. Aliquam amet ipsam eos aliquid inventore doloremque totam.</p>
            <b className='text-primary'>Our Vison</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iure voluptatibus blanditiis nobis totam? Est ipsa facilis perferendis laboriosam optio. Sapiente error nesciunt labore distinctio minus? Deleniti, soluta ullam nam quas sint harum in voluptates.</p>
          </div>
        </div>

        <div className="text-xl my-4">
            <p className=' uppercase'>Why Choose Us</p>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[16px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
            <b>Effeciency</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eius libero? Sed velit adipisci in.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[16px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b>Convience</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus aliquam ipsam, nesciunt illum repudiandae accusantium.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[16px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b>Personalization</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo iusto pariatur doloribus at laudantium.</p>
          </div>
        </div>
    </div>
  )
}

export default About