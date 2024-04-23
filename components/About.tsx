import React from 'react'

function About() {
    return (
       <div className='mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-6 backdrop-blur md:-mx-12 md:px-12 md:sr-only md:relative md:top-auto md:max-auto md:w-full md:px-0 md:py-0 md:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking- text-slate-200 lg:sr-only'>About</h2>
            </div>
            <div className='text-slate-300 border rounded-xl py-5 px-5'>
                <p className='mb-4'>Graduating from York University with a Bachelor of Science in Computer Science, I have channeled my enthusiasm for technology into impactful software engineering roles. My experience spans from optimizing quality assurance processes to engineering robust software solutions, always with a focus on innovation and user satisfaction.</p>
                <p className='mb-4'>I excel in backend development, proficiently utilizing technologies such as Node.js, Spring Boot, and Python, alongside databases like PostgreSQL and MySQL. My toolkit is further enhanced by expertise in developer tools like AWS, Docker, and GraphQL, which I leverage to build scalable, efficient, and reliable systems.</p>
                <p className='mb-4'>My project work includes creating PageMind, an AI-driven platform that revolutionizes how users interact with digital documents, and leading my team to a first-prize victory at yuHacks 2022 with a web application that significantly increased engagement for non-profits. These projects not only deepen my development skills but also highlight my ability to lead and innovate in the tech space.</p>
            </div>
       </div>
    )
}

export const about = [
    {
        title: '',
        description: '🚀',
        link: '',
    }
]
export default About