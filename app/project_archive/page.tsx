import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ArrowBack, ArrowUp } from "@/components/ui/ArrowUp"


const projects = [
    // 2025
    {
      year: '2025',
      name: 'Ad Genie',
      tools: ['Next.js', 'React', 'Akool AI', 'Convex'],
      url: 'https://github.com/jayalohana/ad-genie',
      urlName: 'GitHub',
      description: 'AI-powered video ad generator using Akool AI and Convex. Converts product info into high-quality, on-brand video ads in seconds.'
    },
  
    // 2024
    {
      year: '2024',
      name: 'autosyncer',
      tools: ['Next.js 14', 'Clerk', 'Neon Tech', 'Uploadcare', 'Ngrok', 'Stripe'],
      url: 'https://github.com/jayalohana/autosyncer',
      urlName: 'GitHub',
      description: 'SaaS automation builder with Stripe payments, Clerk auth, and file handling via Uploadcare and Neon Tech.'
    },
    {
      year: '2024',
      name: 'ResumeGenie',
      tools: ['Vite', 'React', 'Tailwind CSS', 'OpenAI API', 'PDFKit'],
      url: 'https://github.com/jayalohana/resumegenie',
      urlName: 'GitHub',
      description: 'AI resume builder that generates polished, export-ready resumes using custom templates and GPT-powered prompts.'
    },
    {
      year: '2024',
      name: 'DevDash',
      tools: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Tailwind CSS'],
      url: 'https://github.com/jayalohana/devdash',
      urlName: 'GitHub',
      description: 'Developer dashboard with GitHub activity tracking, real-time charts, and customizable widgets for personal metrics.'
    },
    {
      year: '2024',
      name: 'QuickPoll',
      tools: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
      url: 'https://github.com/jayalohana/quickpoll',
      urlName: 'GitHub',
      description: 'Anonymous, no-login polling app with instant sharing and live result tracking.'
    },
  
    // 2023
    {
      year: '2023',
      name: 'Flowrite',
      tools: ['TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'React'],
      url: 'https://github.com/jayalohana/Flowrite',
      urlName: 'GitHub',
      description: 'Real-time collaborative editor using WebSockets and Quill for seamless group document editing.'
    },
    {
      year: '2023',
      name: 'The Blog Spot',
      tools: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      url: 'https://github.com/jayalohana/blog-spot',
      urlName: 'GitHub',
      description: 'Full-stack blog application supporting create, update, and delete functionality with user-friendly UI.'
    },
    {
      year: '2023',
      name: 'Sorting Visualizer',
      tools: ['JavaScript', 'React', 'Redux'],
      url: 'https://github.com/jayalohana/Sorting-VIsualizer',
      urlName: 'GitHub',
      description: 'Animated sorting algorithm visualizer showing step-by-step comparisons and transitions for learners.'
    },
    {
      year: '2023',
      name: 'Vending Machine',
      tools: ['Java', 'Design Patterns'],
      url: 'https://github.com/jayalohana/Vending-Machine',
      urlName: 'GitHub',
      description: 'Object-oriented vending machine simulator built with the State and Strategy patterns in Java.'
    },
    {
      year: '2023',
      name: 'StudySync',
      tools: ['Next.js', 'Clerk', 'Firebase', 'React', 'Quill', 'Zustand'],
      url: 'https://github.com/jayalohana/studysync',
      urlName: 'GitHub',
      description: 'Collaborative study notes app with rich-text editing and real-time sync — perfect for group revisions.'
    }
  ]
  

const projectArchivePage = () => {

    return (
        <MaxWidthWrapper>
            <div className="lg:py-24">
                <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-slate-100" href="/"><ArrowBack />Jaya Lohana</a>
                <h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-5xl mt-2">All Projects</h1>
                <table className="mt-12 w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10 border-b  bg-white/10 px-6 py-5 backdrop-blur border border-white/10 ">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 pl-2 rounded-tl">Year</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden lg:table-cell">Built with</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden sm:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr className="border-b border-slate-300/20" key={index}>
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px text-slate-400 pl-2">{project.year}</div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div className="block sm:hidden">
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 sm:hidden text-base group" href={project.url} target="_blank">
                                            <span className="flex gap-1 group-hover:text-white/70">{project.name}
                                                <span className="group-hover:-translate-y-1 group-hover:transition-transform group-hover:translate-x-1">
                                                    <ArrowUp />
                                            </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="hidden sm:block text-sm">{project.name}</div>
                                </td>
                                <td className='py-4 pr-4 align-top hidden  lg:table-cell'>
                                    <ul className="flex flex-wrap -translate-y-1.5 ">
                                        {project.tools.map((tool, toolIndex) => (
                                            <li className="my-1 mr-1.5" key={toolIndex}>
                                                <div className="flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-medium leading-5 text-slate-100">{tool}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-top sm:table-cell">
                                    <ul className="translate-y-1">
                                        <li className="mb-1 flex items-center">
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-white focus-visible:text-white text-sm" href={project.url} target="_blank">
                                                <span>
                                                    <span className="inline-flex gap-1">{project.urlName} <ArrowUp /></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MaxWidthWrapper>
    )
}

export default projectArchivePage

//daily
//daily
//daily
