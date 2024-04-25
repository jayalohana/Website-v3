import Image from 'next/image'
import {ArrowUp} from './ui/ArrowUp';


const projects = [
  {
    title: "PageMind",
    description: "Elevate your PDF experience with PageMind! This innovative platform allows you to interact with your documents conversationally—upload your PDF, ask questions, and get precise answers instantly.",
    tools: ['Next.js', 'Prisma', 'LangChain', 'Pinecone', 'tRPC', 'Zod'],
    imagePath: '/static/Images/pagemind.png',
    url:"https://www.pagemind.app",
  },
  {
    title: "FaceTrack",
    description: 'FaceTrack records facial attendance by detecting and recognizing faces in real-time video and saving the data to a .csv file with a timestamp.',
    tools: ['Python','OpenCV'],
    imagePath: '/static/Images/facetrack.jpg',
    url:"https://github.com/aradhyas8/FaceRecognitionAttendaceProject"
  },
  {
    title:'Sorting Algorithm Visualizer',
    description: 'This web app visualizes sorting algorithms such as bubble sort, selection sort, insertion sort, quick sort, and merge sort.',
    tools: ['React', 'JavaScript'],
    imagePath: '/static/Images/sorting.jpg',
    url: "https://aradhyas8.github.io/Sorting-Algorithmn-Visualizer/"
  },
  {
    title: 'TalkSmart',
    description: 'TalkSmart is a web app that uses the OpenAI GPT-3 model to generate human-like text responses to user input.',
    tools: ['Python'],
    imagePath: '/static/Images/talksmart.jpg',
    url: "https://github.com/aradhyas8/speech_assistant"
  },
  {
    title: 'For The Horses',
    description: 'Animal rescue app that won first prize at YUHacks 2022 with search, dashboard, adopter matching and messaging features.',
    tools: ['React', 'Node.js', 'MongoDB'],
    imagePath: '/static/Images/forhorses.jpg',
    url: "https://github.com/aradhyas8/ForTheHorses"
  },
  {
    title: 'Data Visualizer',
    description: 'EECS 3311 project for York University in Fall 2022 analyzing World Bank API data in visual format.',
    tools: ['Java', 'REST APIs', 'Java Swing'],
    imagePath: '/static/Images/3311.jpg',
    url:"https://github.com/aradhyas8/World-Bank-Analysis"
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
                    <span className='group-hover:-translate-y-1 group-hover:transition-transform group-hover:translate-x-1'>
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
