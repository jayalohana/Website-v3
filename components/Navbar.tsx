import Link from "next/link";

const Navbar = () => {


    return (
        <div className="">

            <ul className=" list-none w-48 text-left bg-black">
                <li className="relative py-2">
                    <a href="#" className="text-white uppercase  tracking-wide inline-block px-5 py-3 relative after:bg-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full">
                        About
                    </a>
                </li>
                <li className="relative py-2">
                    <a href="#" className="text-white uppercase no-underline tracking-wide inline-block px-5 py-3 relative after:bg-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full">
                        Portfolio
                    </a>
                </li>
                <li className="relative py-2">
                    <a href="#" className="text-white uppercase no-underline tracking-wide inline-block px-5 py-3 relative after:bg-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full">
                        Blog
                    </a>
                </li>
                <li className="relative py-2">
                    <a href="#" className="text-white uppercase no-underline tracking-wide inline-block px-5 py-3 relative after:bg-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}       

export default Navbar;