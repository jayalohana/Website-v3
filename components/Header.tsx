'use client'
import React from 'react'
import Navbar from './Navbar'
import { Github, LinkedIn, Email } from './Socials';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Spotlight } from './ui/Spotlight';

function Header() {
  return (
      <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          <TextGenerateEffect words='Jaya Lohana' />
        </h1>
        
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Software Developer</h2>
        <p className='mt-4 max-w-xs leading-normal text-slate-400'>I develop robust, scalable, and efficient backend systems that power seamless digital experiences.</p>
        <div className='nav hidden lg:block' aria-label='links'>
          <Navbar />
        </div>
      </div>
      
      <ul className='ml-1 mt-8 flex items-center'>
        <li className='mr-5 text-xs shrink-0'>
          <a className='block hover:text-slate-200' href='https://github.com/jayalohana'>
            <span><Github /></span>
          </a>
        </li>
        <li className='mr-5 text-xs shrink-0'>
          <a className='block hover:text-slate-200' href='https://www.linkedin.com/in/jayalohana/'>
            <span><LinkedIn /></span>
          </a>
        </li>
        <li className='mr-5 text-xs shrink-0'>
          <a className='block hover:text-slate-200' href='mailto:jaya.lohana24@gmail.com'>
            <span><Email /></span>
            <span></span>
          </a>
        </li>
      </ul>
      </div>
      
  )
}

export default Header