import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ArrowBack, ArrowUp } from "@/components/ui/ArrowUp"


const projects = [
    {
        year: '2024',
        name: 'PageMind',
        tools: ['Typescript', 'Nextjs', 'Prisma', 'LangChain', 'Pinecone', 'tRPC', 'Zod', 'Kinde', 'Stripe', 'shadcn - ui',],
        url: 'https://pagemind.app',
        urlName: 'pagemind.app',
    },
    {
        year: '2024',
        name: 'Serverus',
        tools: ['TypeScript', 'Nextjs', 'Node.js', 'Express', 'AWS EC2', 'Redis', 'S3', 'Docker',],
        urlName: 'serverus.us',
        url: 'https://serverus.us'
    },
    {
        year: '2024',
        name: 'Flowrite',
        tools: ['TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'React'],
        urlName: 'Github',
        url: 'https://github.com/aradhyas8/Flowrite'
    },
    {
        year: '2023',
        name: 'yuHacks',
        tools: ['TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'Express', 'TailwindCSS', 'shadcn - ui'],
        url: 'https://yuhacks.ca',
        urlName: 'yuhacks.ca'
    },

    {
        year: '2023',
        name: 'Data Visualizer',
        tools: ['Java', 'Java Swing'],
        url: 'https://github.com/aradhyas8/World-Bank-Analysis',
        urlName: 'GitHub'

    },
    {
        year: '2023',
        name: 'Vending Machine',
        tools: ['Java', 'Design Patterns'],
        url: 'https://github.com/aradhyas8/Vending-Machine',
        urlName: 'GitHub'
    },
    {
        year: '2023',
        name: 'API Generator',
        tools: ['JavaScript', 'Node.js', 'MongoDB', 'GraphQL', 'Express.js', 'React', 'Tailwind CSS'],
        url: 'https://github.com/aradhyas8/API-Generator',
        urlName: 'GitHub'
    },
    {
        year: '2023',
        name: 'CS Hub . Local Hack Day',
        tools: ['JavaScript', 'Bootstrap', 'React'],
        url: 'https://cshublhd.tech',
        urlName: 'cshublhd.tech'
    },
    {
        year: '2023',
        name: 'Portfolio-v1',
        tools: ['javaScript', 'Bootstrap', 'React',],
        url: 'https://v1.aradhya.dev',
         urlName: 'v1.aradhya.dev'
    },
    {
        year: '2022',
        name: 'FaceTrack',
        tools: ['Python', 'openCV', 'face_recognition',],
        url: 'https://github.com/aradhyas8/FaceRecognitionAttendaceProject',
        urlName: 'GitHub'
    },
    {
        year: '2022',
        name: 'Sorting Visualizer',
        tools: ['JavaScript', 'React'],
        url: 'https://aradhyas8.github.io/Sorting-Algorithmn-Visualizer',
        urlName: 'github.io/sort-vis'
    },
    {
        year: '2022',
        name: 'yuHacks 2022 - First Prize',
        tools: ['JavaScript', 'React', 'Node.js', 'Express'],
        url: 'https://github.com/aradhyas8/ForTheHorses',
         urlName: 'GitHub'
    },
    {
        year: '2022',
        name: 'TalkSmart',
        tools: ['Python'],
        url: 'https://github.com/aradhyas8/speech_assistant',
        urlName: 'GitHub'
    },
    {
        year: '2022',
        name: 'Instagram Bot',
        tools: ['Python', 'Selenium'],
        url: 'https://github.com/aradhyas8/Instagram_bot',
        urlName: 'GitHub'
    }
]

const projectArchivePage = () => {

    return (
        <MaxWidthWrapper>
            <div className="lg:py-24">
                <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-slate-100" href="/"><ArrowBack />Aradhya Singh</a>
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