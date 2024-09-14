import React from 'react'
import { Typed } from "react-typed"

const Hero = () => {
  return (
    <div className='max-w-[800px] w-full h-screen mt-[100px] mx-auto text-center flex flex-col'>
        <p className='text-[#00df9a] font-bold p-2'>
            Growing with data analytics
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl text-white font-bold '>
            Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl text-white font-bold'>
                Fast, flexible, financing for
            </p>
            {/* <Typed
            className='text-xl font-bold text-white'
                strings={['BTB', 'BTC', 'SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
            /> */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
            Monitor ypur data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 '>Get Started</button>
    </div>
  )
}

export default Hero