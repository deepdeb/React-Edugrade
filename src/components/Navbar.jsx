import Button from "./Button"
import Logo from "./Logo"

const navLinks = [
    "Home",
    "Courses",
    "Event",
    "Pages",
    "Teachers",
    "Shop",
    "Blog",
    "Contact"
]

const Navbar = () => {
    return (
        <nav className="shadow bg-black text-white border-t border-gray-600">
            <div className="px-6 lg:px-16 py-1">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between py-3">

                        {/* Logo  */}
                        <Logo />

                        <div className="flex items-center gap-8">
                            {/* navlinks  */}
                            <ul className="flex list-none p-0 m-0 gap-6">
                                {navLinks.map((link, index) => (
                                    <li key={index}><a href="#" className="hover:text-yellow-400 transition-colors font-medium">{link}</a></li>
                                ))}
                            </ul>


                            {/* authlinks  */}
                            <div className="flex items-center gap-4">
                                <a href="#" className="font-medium hover:text-yellow-400 transition-colors">Login</a>
                                <Button title={"Register"} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar