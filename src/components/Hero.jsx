import Button from "./Button"

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="px-6 lg:px-16 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* text  */}
                        <div className="w-full lg:max-w-xl space-y-5 text-center lg:text-left">
                            <h5 className="text-sm tracking-widest text-yellow-400 font-medium">WE ARE HERE TO HELP YOU</h5>
                            <h1 className="text-4xl font-bold">WELCOME TO EDUGRADE</h1>
                            <p className="text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button title={"Get Started"}/>
                        </div>

                        {/* image */}
                        <div className="relative hidden shadow-md lg:flex w-full lg:w-1/2 rounded-lg justify-end p-3 bg-white">
                            <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" alt="image1" className='w-full rounded-lg' />

                            <div className="absolute -bottom-5 -left-5 shadow-xl bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-2">

                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <span className="font-bold">+10k </span>Students
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero