import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="px-10 py-12 text-center bg-black text-white">
            <div className="flex items-center justify-between max-w-6xl mx-auto mb-5">

                {/* Logo */}
                <Logo/>

                
                <ul className="flex flex-col gap-3">
                    <li>
                        <a href="#" className="text-sm font-bold text-white hover:text-yellow-500 transition-all duration-300 cursor-pointer">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm font-bold text-white hover:text-yellow-500 transition-all duration-300 cursor-pointer">What We Do</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm font-bold text-white hover:text-yellow-500 transition-all duration-300 cursor-pointer">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="h-px w-full bg-gray-700 mb-2"></div>
            <h3 className="text-xs text-gray-400">©{new Date().getFullYear()} <span className="text-yellow-500">Edugrade</span> | Copyright Reserved</h3>
        </footer>
    )
}

export default Footer