'use client'
import React from 'react'
import About from './About'
import { LampContainer } from './ui/Lamp'
import { motion } from 'framer-motion'

function Scroll() {
  return (
    <div className='w-full border border-black mt-20'>
        
        <LampContainer>
              <motion.h1
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                  }}
                  className="mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
              >
                  \Experience
              </motion.h1>
        </LampContainer>
          <About />
    </div>
  )
}

export default Scroll