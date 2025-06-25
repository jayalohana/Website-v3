import React from 'react'

function About() {
    return (
        <section id='about' className='mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">about</h2>
            </div>
            <div className='text-slate-300 border rounded-xl py-5 px-5'>
                <p className='mb-4'>
                    I’m currently pursuing a Bachelor of Arts in Computer Science at
                    <a className='text-white font-bold mx-1' href="https://www.yorku.ca/" target='_blank'>
                        York University
                    </a>, where I’ve developed a strong foundation in full-stack development and quality engineering.
                    My professional journey includes roles as a Software Developer Intern at
                    <a className='text-white font-bold mx-1' href="https://www.gaotek.com/" target='_blank'>
                        GAOtek Inc.
                    </a> and a Quality Assurance Analyst at
                    <a className='text-white font-bold mx-1' href="https://transformersacademy.com/" target='_blank'>
                        Transformers Academy
                    </a>. Through these experiences, I’ve optimized testing workflows, implemented full-stack features, and championed user experience improvements.
                </p>

                <p className='mb-4'>
                    My technical toolkit includes
                    <span className='text-white font-bold mx-1'>Java, Python, JavaScript, and TypeScript</span>. I specialize in building scalable and performant applications using
                    <span className='text-white font-bold mx-1'>React.js, Node.js, Next.js, MongoDB, and REST APIs</span>. I also leverage tools like AWS, GraphQL, and Docker to bring robust solutions to life.
                </p>

                <p className='mb-4'>
                    Some of my recent projects include
                    <a className='text-white font-bold mx-1' href="https://github.com/jayalohana/PageMind" target='_blank'>
                        PageMind
                    </a>, an
                    <span className='text-white font-bold mx-1'>AI-powered PDF assistant</span>
                    that enables real-time interaction with documents, and
                    <a className='text-white font-bold mx-1' href="https://github.com/jayalohana/Notably" target='_blank'>
                        Notably
                    </a>, a
                    <span className='text-white font-bold mx-1'>TypeScript-based</span> task and note management app. I’m passionate about using technology to create intuitive tools that empower users.
                </p>
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