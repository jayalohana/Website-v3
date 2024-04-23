import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
      <div className='md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col md:justify-between py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>Aradhya Singh</h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Software Developer</h2>
        <p className='mt-4 max-w-xs leading-normal'>I like to solve problems.</p>
        <div className='nav hidden lg:block' aria-label='links'>
          <Navbar />
        </div>
      </div>
      </div>
      
  )
}

export default Header