import Link from "next/link";

const Navbar = () => {


    return (
        <div className="nav hidden md:block">
            <ul className="mt-16 w-max">
                <li>
                    <a className="group flex items-center py-3" href="#">About</a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#">Experience</a>
                </li>
                <li>
                    <a className="group flex items-center py-3" href="#">Projects</a>
                </li>
            </ul>
        </div>
    )
}       

export default Navbar;