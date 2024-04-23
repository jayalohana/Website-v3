'use client'
import React from 'react'
import About from './About'
import Exp from './Exp'
import Projects from './Projects'

function Scroll() {
  return (
    <div className='w-full border border-black mt-20 md:w-1/2'>
        
          <About />
          <Exp />
          <Projects />
    </div>
  )
}

export default Scroll