import { useState } from "react";
import logo from "../asset/imgs/Honey-LOGO.svg"

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <section>
            <div className="flex justify-between items-center px-10 lg:px-20 py-6">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul className="hidden md:flex items-center gap-6 text-white">
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About </li>
                    <li>Contact</li>
                </ul>
                <div className="md:hidden" onClick={()=>setOpenMenu((prev) => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

                </div>
            </div>
            {openMenu && <ul className="absolute bg-zinc-800 w-full z-10 py-2 pb-4 flex flex-col px-10 lg:px-20 gap-6 text-white">
                <li>Home</li>
                <li>Portfolio</li>
                <li>About </li>
                <li>Contact</li>
            </ul>}
        </section>
    )
}

export default NavBar;