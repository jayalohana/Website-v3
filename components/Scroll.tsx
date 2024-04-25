'use client'
import React from 'react'
import About from './About'
import Exp from './Exp'
import Projects from './Projects'
import Footer from './Footer'

function Scroll() {
  return (
    <div className='pt-24 lg:w-1/2 lg:py-24'>
        
          <About />
          <Exp />
          <Projects />
    </div>
  )
}

export default Scroll