const Apply = () => {
    return (
        <section className="px-6 lg:px-16 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="bg-yellow-400 text-black p-8 rounded-lg w-full lg:w-1/2 flex flex-col justify-between">
                        <h4 className="text-lg font-bold mb-4">APPLY FOR FALL 2019</h4>
                        <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button type="button" className="bg-black text-white font-bold px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-300 cursor-pointer">Apply Now</button>
                    </div>

                    <div className="bg-yellow-400 text-black p-8 rounded-lg w-full lg:w-1/2 flex flex-col justify-between">
                        <h4 className="text-lg font-bold mb-4">APPLY FOR SCHOLARSHIP</h4>
                        <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <button type="button" className="bg-black text-white font-bold px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-300 cursor-pointer">Apply Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apply