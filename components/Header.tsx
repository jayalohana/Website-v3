import React from 'react'

function Header() {
  return (
      <div className='w-full border border-black flex flex-col gap-5 items-left md:h-screen py-10 sticky top-0'>
        <h1 className='text-5xl font-bold text-zinc-200'>Aradhya Singh</h1>
        <h2 className='text-xl font-semibold text-zinc-200'>Software Developer</h2>
          <p className='md:w-1/2 text-zinc-400'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
      </div>
  )
}

export default Header