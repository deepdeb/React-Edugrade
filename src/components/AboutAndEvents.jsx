import Button from "./Button"

const AboutAndEvents = () => {
    return (
        <section className='px-6 lg:px-16 py-16'>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* about/welcome div  */}
                    <div className='w-full lg:w-7/12 space-y-5'>
                        <h3 className='text-3xl font-bold'>
                            Welcome to <br /> Write My Disso
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </p>
                        <Button title={"Read More"} />
                    </div>

                    {/* upcoming events  */}
                    <div className='w-full lg:w-5/12 bg-yellow-400 p-6 rounded-lg'>
                        <h3 className='text-xl! font-bold! mb-4'>UPCOMING EVENTS</h3>
                        <ul className='list-none p-0 m-0 space-y-4'>
                            <li className='pb-4 border-b border-black/20 last:border-b-0'>
                                <strong className='block font-semibold mb-1 text-lg text-black' >2 December 2019</strong>
                                <p className="text-sm leading-relaxed">
                                    Sed ut perspiciatis unde omnis iste.
                                    <br />
                                    10:00 AM - 3:00 PM • Re Auditorium
                                </p>
                            </li>
                            <li className='pb-4 border-b border-black/20 last:border-b-0'>
                                <strong className='block font-semibold mb-1 text-lg text-black' >2 December 2019</strong>
                                <p className="text-sm leading-relaxed">
                                    Lorem ipsum gravida nibh vel.
                                    <br />
                                    10:00 AM - 3:00 PM • Re Auditorium
                                </p>
                            </li>
                            <li className='pb-4 border-b border-black/20 last:border-b-0'>
                                <strong className='block font-semibold mb-1 text-lg text-black' >2 December 2019</strong>
                                <p className="text-sm leading-relaxed">
                                    Morbi accumsan ipsum velit.
                                    <br />
                                    10:00 AM - 3:00 PM • Re Auditorium
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAndEvents