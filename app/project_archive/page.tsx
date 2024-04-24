import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ArrowBack, ArrowUp } from "@/components/ui/ArrowUp"


const projects = [
    {
        year: '2024',
        name: 'PageMind',
        tools: ['Typescript','Nextjs', 'Prisma', 'LangChain', 'Pinecone', 'tRPC', 'Zod', 'Kinde', 'Stripe', 'shadcn - ui',],
        url: "pagemind.app"
    },
    {
        year: '2024',
        name: 'Serverus',
        tools: ['TypeScript', 'Nextjs',  'Node.js', 'Express', 'AWS EC2', 'Redis', 'S3', 'Docker', ],
        url: 'serverus.us'
    },
    {
        year: '2023',
        name: 'yuHacks',
        tools: ['TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'Express', 'TailwindCSS', 'shadcn - ui'],
        url: 'yuhacks.ca',
    },

    {
        year: '2023',
        name: 'Data Visualizer',
        tools: ['Java', 'Java Swing'],
        url: 'github.com/aradhyas8/World-Bank-Analysis',

    },
    {
        year: '2023',
        name: 'Vending Machine',
        tools: ['Java', 'Design Patterns'],
        url: 'github.com/aradhyas8/Vending-Machine',
    },
    {
        year: '2023',
        name: 'API Generator',
        tools: ['JavaScript', 'Node.js','MongoDB', 'GraphQL', 'Express.js', 'React', 'Tailwind CSS'],
        url: 'github.com/aradhyas8/API-Generator',
    },
    {
        year: '2023',
        name: 'CS Hub . Local Hack Day',
        tools: ['JavaScript', 'Bootstrap', 'React'],
        url: 'cshublhd.tech',
    },
    {
        year: '2023',
        name: 'Portfolio-v1',
        tools: ['javaScript', 'Bootstrap', 'React', ],
        url: 'github.com/aradhyas8/Personal-Website-Template'
    },
    {
        year: '2022',
        name: 'FaceTrack',
        tools: ['Python', 'openCV', 'face_recognition',],
        url: 'github.com/aradhyas8/FaceRecognitionAttendaceProject',
    },
    {
        year: '2022',
        name: 'Sorting Visualizer',
        tools: ['JavaScript', 'React'],
        url: 'aradhyas8.github.io/Sorting-Algorithmn-Visualizer',
    },
    {
        year: '2022',
        name: 'yuHacks 2022 - First Prize',
        tools: ['JavaScript', 'React', 'Node.js', 'Express'],
        url: 'github.com/aradhyas8/ForTheHorses'
    },
    {
        year: '2022',
        name: 'TalkSmart',
        tools: ['Python'],
        url: 'github.com/aradhyas8/speech_assistant'
    },
    {
        year: '2022',
        name: 'Instagram Bot',
        tools: ['Python' ,'Selenium'],
        url: 'github.com/aradhyas8/Instagram_bot'
    }
]

const projectArchivePage = () => {

    return (
        <MaxWidthWrapper>
            <div className="lg:py-24">
                <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-slate-200" href="/"><ArrowBack />Aradhya Singh</a>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-2">All Projects</h1>
                <table className="mt-12 w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden lg:table-cell">Built with</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden sm:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr className="border-b border-slate-300/20">
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px">{project.year}</div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div className="sm:block text-sm">{project.name}</div>
                                </td>
                                <td className='py-4 pr-4 align-top hidden  lg:table-cell'>
                                    <ul className="flex flex-wrap -translate-y-1.5 ">
                                    {project.tools.map((tool, toolIndex) => (
                                        <li className="my-1 mr-1.5">
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
                                                    <span className="inline-flex gap-1">{project.url} <ArrowUp /></span>
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