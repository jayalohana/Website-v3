import Link from "next/link";

const Navbar = () => {


    return (
        <nav className="nav hidden md:block">
            <ul className="mt-16 w-max">
                <li>
                    <a className="group flex items-center py-3" href="#about">
                        <span className="nav-indicator nr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-white group-focus-visible:text-slate-200 ml-2">About</span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#experience">
                        <span className="nav-indicator nr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-white group-focus-visible:text-slate-200 ml-2">Experience</span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#projects">
                        <span className="nav-indicator nr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-white group-focus-visible:text-slate-200 ml-2">Project</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}       

export default Navbar;