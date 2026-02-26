import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 sm:px-10 py-14">
            <div className="max-w-6xl mx-auto">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

                    <Logo />

                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
                        <div>
                            <h4 className="text-sm font-semibold mb-4 text-yellow-400">Company</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        What We Do
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold mb-4 text-yellow-400">Resources</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold mb-4 text-yellow-400">Legal</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300">
                                        Cookies Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-yellow-400 font-medium">Edugrade</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <a href="#" className="hover:text-yellow-400 transition-all duration-300">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition-all duration-300">
                            Terms
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition-all duration-300">
                            Support
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer