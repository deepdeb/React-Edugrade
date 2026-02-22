import Button2 from "./Button2"

const Apply = () => {

    const applyContent = [
        {
            id: 1,
            heading: "APPLY FOR FALL 2019",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        },
        {
            id: 2,
            heading: "APPLY FOR SCHOLARSHIP",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        }
    ]

    return (
        <section className="px-6 lg:px-16 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6">
                    {
                        applyContent.map((content) => (
                            <div key={content.id} className="bg-yellow-400 text-black p-8 rounded-lg w-full lg:w-1/2 flex flex-col justify-between">
                                <h4 className="text-lg font-bold mb-4">{content.heading}</h4>
                                <p className="text-sm mb-6">{content.para}</p>
                                <Button2 text={"Apply Now"} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Apply