import React from 'react'
import { Card, CardTitle, CardHeader, CardDescription } from './ui/card'

function Exp() {
  return (
    <div className='border border-zinc-500  backdrop-blur-smd rounded-lg shadow-sm'>
      <div className='flex gap-10 m-5 '>
        <div>Time</div>
        <div>
          <div>Company</div>
          <div>Content</div>
        </div>
      </div>
    </div>
    
  )
}

export default Exp