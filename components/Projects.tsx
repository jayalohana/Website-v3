import Image from 'next/image'
import {ArrowUp} from './ui/ArrowUp';


const projects = [
  {
    title: "Ad Genie",
    description: "A powerful AI-powered video ad generator using Akool AI and Convex. Built with Next.js and React, it helps marketers produce high-quality, branded video content from text prompts in seconds.",
    tools: ['Next.js', 'React', 'Akool AI', 'Convex'],
    imagePath: '/static/Images/adgenie.png',
    url: "https://github.com/jayalohana/ad-genie",
  },
  {
    title: "Notably",
    description: "A task and note management app built with TypeScript and MongoDB. Offers clean UI, project tagging, and persistent data — ideal for daily productivity.",
    tools: ['TypeScript', 'React.js', 'Node.js', 'MongoDB'],
    imagePath: '/static/Images/notably.png',
    url: "https://github.com/jayalohana/Notably",
  },
  {
    title: "CoWrite",
    description: "A real-time collaborative editor powered by Socket.io and Quill. Enables live editing across users, with custom formatting and MongoDB persistence.",
    tools: ['TypeScript', 'React.js', 'Socket.io', 'MongoDB', 'Material-UI', 'Quill'],
    imagePath: '/static/Images/cowrite.png',
    url: "https://github.com/jayalohana/CoWrite",
  },
  {
    title: "ResumeGenie",
    description: "An AI-powered resume builder that turns experience into polished resumes. Includes PDF export and real-time editing via templates.",
    tools: ['Vite', 'React', 'Tailwind CSS', 'OpenAI API', 'PDFKit'],
    imagePath: '/static/Images/resumegenie.png',
    url: "https://github.com/jayalohana/resumegenie",
  },
  {
    title: "Schizophrenia Society Website",
    description: "Responsive club website built with React and Tailwind CSS. Designed for accessibility, clean UX, and fast load times on all devices.",
    tools: ['React.js', 'Tailwind CSS'],
    imagePath: '/static/Images/ssy.png',
    url: "https://github.com/jayalohana/schizophrenia-society-site",
  },
  {
    title: "DevDash",
    description: "A developer dashboard that tracks GitHub commits, open PRs, and issue activity with real-time charts. Includes dark mode and modular widgets.",
    tools: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Tailwind CSS'],
    imagePath: '/static/Images/devdash.png',
    url: "https://github.com/jayalohana/devdash",
  }
]

const Projects = () => {
  return (
    <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="sm:order-2 sm:col-span-5">
                <h3>
                  <a className="group group-hover:text-white/70 inline-flex items-baseline font-medium leading-tight text-slate-200 gap-0.5" target='_blank' href={project.url}>
                    {project.title}
                    <span className='group-hover:-translate-y-1 group-hover:transition-transform group-hover:translate-x-1 mt-0.5'>
                      <ArrowUp />
                    </span>
                    
                  </a>
                  
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-300">
                  {project.description}
                </p>
                <ul className='mt-2 flex flex-wrap'>
              {project.tools.map((tool, toolIndex) => (
                <li className='mr-1.5 mt-2' key={toolIndex}>
                  <div className='flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-medium leading-5 text-slate-100'>{tool}</div>
                </li>
              ))}
                </ul>
              </div>
                <Image height={40} width={200} src={project.imagePath} alt='project-img' className='rounded-xl transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-3 md:text-7xl sm:translate-y-1 border border-slate-200/20 group:hover:border-slate-200/30 ' />
            </div>
          </li>
        ))}
      </ul>
      <a className='group inline-flex items-center text-slate-200 leading-tight font-semibold group-hover:text-white/70' href='/project_archive'>
          <span className='border-b border-transparent pb-px transition flex gap-1'>
            View Full Project Archive 
          <span className='group-hover:-translate-y-1 group-hover:transition-transform group-hover:translate-x-1'><ArrowUp /></span>
          </span>
      </a>
    </section>
  )
}

export default Projects;
