import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
      <div className=' w-full flex flex-col'>
      <div className='w-full  border-black flex flex-col gap-5 text-left mt-20 sticky top-0'>
        <h1 className='text-5xl font-bold text-zinc-200'>Aradhya Singh</h1>
        <h2 className='text-xl font-semibold text-zinc-200'>Software Developer</h2>
        <p className='md:w-1/2 text-zinc-400'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
        
      </div>
      <div className='mt-20'>
        <Navbar />
      </div>
      </div>
      
  )
}

export default Header