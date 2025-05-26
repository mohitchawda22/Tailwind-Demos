import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
function Navbar() {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="" width={130} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item,index)=>(
                        <li key={index}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-400">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <img src={hamburger} width={25} height={25} className="hidden max-lg:block" alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
