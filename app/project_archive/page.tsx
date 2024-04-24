import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ArrowBack, ArrowUp } from "@/components/ui/ArrowUp"


const projects = [
    {
        year: '2023',
        project: 'PageMind',
        buildWith: ['Typescript','Nextjs', 'Prisma', 'LangChain', 'Pinecone', 'tRPC', 'Zod', 'Kinde', 'Stripe', 'shadcn - ui',],
        url: "pagemind.app"
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
                        <tr className="border-b border-slate-300/20">
                            <td className="py-4 pr-4 align-top text-sm">
                                <div className="translate-y-px">2023</div>
                            </td>
                            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                <div className="hidden sm:block text-sm">PageMind</div>
                            </td>
                            <td className='py-4 pr-4 align-top hidden  lg:table-cell'>
                                <ul className="flex -translate-y-1.5 flex-wrap">
                                    <li className="my-1 mr-1.5">
                                        <div className="flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-medium leading-5 text-slate-100">Nextjs</div>
                                    </li>
                                </ul>
                            </td>
                            <td className="hidden py-4 align-top sm:table-cell">
                                <ul className="translate-y-1">
                                    <li className="mb-1 flex items-center">
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-white focus-visible:text-white text-sm" href="/" target="_blank">
                                            <span>
                                                <span className="inline-flex gap-1">pagemind.app <ArrowUp /></span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </MaxWidthWrapper>
    )
}

export default projectArchivePage