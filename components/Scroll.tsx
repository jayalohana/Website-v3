'use client'
import React from 'react'
import About from './About'
import { LampContainer } from './ui/Lamp'
import { motion } from 'framer-motion'
import Exp from './Exp'

function Scroll() {
  return (
    <div className='w-full border border-black mt-20'>
        
          <About />
          <Exp />
    </div>
  )
}

export default Scroll