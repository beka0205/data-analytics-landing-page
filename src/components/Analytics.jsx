import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='grid max-w[1240px] mx-auto md:grid-cols-2'>
            <img className='w-[400px] md:w-[500px] lg:w-[600px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='p-6 m-auto flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold uppercase'>Data Analytics Dashboard</p>
                <h1 className='text-2xl sm:3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Adipisci voluptates 
                    illum sint libero nobis, deserunt fugit! 
                    Et asperiores possimus accusamus, soluta 
                    totam dolores autem facere sapiente 
                    voluptate maiores porro voluptatibus!
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>Get Started</button>

            </div>
        </div>
    </div>
  )
}

export default Analytics