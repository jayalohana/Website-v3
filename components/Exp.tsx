import React from 'react'
import { Card, CardTitle, CardHeader, CardDescription } from './ui/card'

function Exp() {
  return (
    <div className='group relative grid pb-1 transition-all sm:grid-cols-9 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3'>Jan 2023-Sept 2023</div>
      <div className='sm:col-span-6'>
        <h3 className='font-medium leading-snug text-slate-200'>
          <div>
            <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 '>
              <span className='-inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block'>QA Analyst · </span>
              
              <span className='inline-block'>theScore</span>
            </a>
          </div>
        </h3>
        <p className='mt-2 text-sm leading-normal'>Description</p>
        <ul className='mt-2 flex flex-wrap'>
          <li className='mr-1.5 mt-2'>
            <div className='flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-medium leading-5 text-slate-100'>Tools</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Exp