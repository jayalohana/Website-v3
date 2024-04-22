import React from 'react'
import { Card, CardTitle, CardHeader, CardDescription } from './ui/card'

function Exp() {
  return (
    <Card>
      <div className='grid grid-cols-3'>
        <CardHeader className='h-full col-span-1  text-sm'>Jan 2023 - Sept 2023</CardHeader>
       <div className='col-span-2 mb-5 mr-2'>
          <CardHeader className=' pl-0 pb-1'>QA Analyst * theScore</CardHeader>
          <CardDescription>Conducting cross-platform testing (Android, iOS, and Web) to assess readiness for production releases of sports media and betting apps.
            Developing test cases in TestRail and executed test plans to ensure high-quality feature delivery, and participated in bug triaging, priority assessment, and coverage tracking.
            Collaborating with cross-functional teams to ensure adherence to best practices and standards in QA, and working with the Test Automation team to review, prioritize and analyze test cases for automation results.</CardDescription>
       </div>
      </div>
    </Card>
  )
}

export default Exp