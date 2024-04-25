import React from 'react'

function About() {
    return (
        <section id='about' className='mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">about</h2>
            </div>
            <div className='text-slate-300 border rounded-xl py-5 px-5'>
                <p className='mb-4'>Graduating from
                    <a className='text-white font-bold mx-1' href="https://www.yorku.ca/" target='_blank'>
                        <span>York University</span>
                    </a>
                    with a Bachelor of Science in Computer Science, My career has spanned roles such as a Software Engineer Intern at
                    <a className='text-white font-bold mx-1' href="https://fibrainc.ca/" target='_blank'>
                        <span>Fibra Inc.</span>
                    </a>
                    and a Quality Engineering Intern at
                    <a className='text-white font-bold mx-1' href="https://www.thescore.com/" target='_blank'>
                        <span>theScore</span>
                    </a>
                    in Toronto. In these positions, I have led initiatives to optimize quality assurance processes and engineer robust software solutions, always focusing on innovation and user satisfaction.</p>

                <p className='mb-4'>I excel in 
                <span className='text-white font-bold mx-1'>backend development</span>,
                proficiently utilizing technologies such as Node.js, Spring Boot, and Python, alongside databases like PostgreSQL and MySQL. My toolkit is further enhanced by expertise in developer tools like AWS, Docker, and GraphQL, which I leverage to build scalable, efficient, and reliable systems.</p>


                <p className='mb-4'>My project work includes creating
                    <a className='text-white font-bold mx-1' href="https://pagemind.app/" target='_blank'>
                        <span>PageMind</span>
                    </a>, an
                <span className='text-white font-bold mx-1'>AI-driven</span>
                platform that revolutionizes how users interact with digital documents, and leading my team to a first-prize victory at yuHacks 2022 with a web application that significantly increased engagement for non-profits. These projects not only deepen my development skills but also highlight my ability to lead and innovate in the tech space.</p>
            </div>
        </section>
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