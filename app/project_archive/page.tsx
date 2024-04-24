import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ArrowBack } from "@/components/ui/ArrowUp"

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
                        <tr className="border-b border-slate-300/20 last:border-none">
                            <td className="py-4 pr-4 align-top text-sm">
                                <div className="translate-y-px">2023</div>
                            </td>
                            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                <div className="block sm:hidden">
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-200 focus-visible:text-slate-300 sm:hidden group/link text-base">PageMind</a>
                                </div>
                            </td>
                            </tr>                        
                    </tbody>
                </table>
            </div>
        </MaxWidthWrapper>
    )
}

export default projectArchivePage