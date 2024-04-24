import {ArrowUp} from "./ui/ArrowUp"
import Aradhya_Singh_Website from '../public/static/Resume/Aradhya_Singh_Website.pdf'



const experience = [
  {
    date: 'Jan 2023 - Sept 2023',
    role:"Software Enginner Intern",
    company: 'Fibra Inc',
    description: 'Led the development of Fibra’s mobile app, integrating Figma design with React Native for the frontend and Firebase for backend solutions. Achieved a successful beta launch and increased initial user engagement by 20%. Implemented a community engagement platform within the app, featuring real-time chat and social posting functionalities.',
    tools: ['React Native', 'Firebase', 'Figma', 'JIRA', 'Confluence', 'Bitbucket']
  },
  {
    date: "Jan 2023-Sept 2023",
    role:"QA Analyst",
    company: "theScore",
    description: "Conducted cross-platform testing (Android, iOS, and Web) to assess readiness for production releases of sports media and betting apps. Developing test cases in TestRail and executed test plans to ensure high-quality feature delivery, and participated in bug triaging, priority assessment, and coverage tracking. Collaborating with cross-functional teams to ensure adherence to best practices and standards in QA, and working with the Test Automation team to review, prioritize and analyze test cases for automation results.",
    tools: ["TestRail", "JIRA", "Confluence", "Charles Proxy"]
  },
  {
    date: "Jan 2023 - Present",
    role: 'Business Analyst',
    company: 'CIBC',
    description: 'Reviewing and assessing confirmed fraud claims using internal systems and policies to minimize losses and mitigate fraud. Managing incoming claims by categorizing and accurately identifying fraudulent transactions, utilizing SharePoint for efficient assignment.',
    tools: [],

  },
  { 
    date: 'October 2022-April 2023',
    company: 'CS HUB',
    role:'Software Developer',
    description: 'Designed and developed the backend architecture for the merch store, utilizing Spring Boot to create robust and scalable APIs and DAO layer. Implemented complex business logic and optimized database queries to enhance API performance, resulting in a 20% reduction in response time. Leveraged AWS and Docker for automated deployment and scaling of the backend infrastructure, reducing deployment time by 50% and increasing system uptime.',
    tools: ['SpringBoot', 'REST APIs', 'PostgreSQL']
    
  },
  {
    date: 'September 2022 - August 2023',
    company: 'York International',
    description:'Mentored students from Lassonde, providing guidance on EECS assignments, course selection, and university transition. Assisted students experiencing difficulties by developing support plans in collaboration with Student Support Staff.',
    tools: [],
  }
]

const  Exp = () =>  {
  return (
    <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">experience</h2>
      </div>
      {experience.map((exp, index) => (
        <div key={index} className='group relative grid transition-all sm:grid-cols-7 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 border rounded-lg p-4 pb-4 mb-16'>
          <div className='mb-2 mt-1 text-xs font-semibold uppercase tracking-tight text-slate-500 sm:col-span-2'>{exp.date}</div>
          <div className='sm:col-span-5'>
            <h3 className='font-medium leading-snug text-slate-200'>
              <div>
                <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 flex-wrap gap-2 '>
                  <span className='-inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block mr-2'>{exp.role}</span>
                  <span>·</span>

                  <span className='inline-block ml-2'>{exp.company}</span>
                </a>
              </div>
            </h3>
            <p className='mt-2 text-sm leading-normal tracking-wide text-slate-300'>
             {exp.description}
            </p>
            <ul className='mt-2 flex flex-wrap'>
          {exp.tools.map((tool, toolIndex) => (
            <li key={toolIndex} className='mr-1.5 mt-2'>
              <div className='flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-medium leading-5 text-slate-100'>{tool}</div>
            </li>
          ))}
            </ul>
          </div>
        </div>
      ))}
      <a className='inline-flex items-center text-slate-200 leading-tight font-semibold group' href={Aradhya_Singh_Website}>
        <span className='border-b border-transparent pb-px transition group-hover:text-white/70 flex gap-2'>
          View Resume <ArrowUp />
        </span>
      </a>
    </div>
  )
}

export default Exp