import edit from '../../assets/edit-tools 1.svg'
import clicker from '../../assets/mouse-clicker 1.svg'
import performance from '../../assets/performance 1.svg'

function Feature() {
    const data = [
        {
            image: edit,
            header: "Designs that speak for themselves",
            description:
                "Rabbits, cats, and bold gaming shapes each mouse is crafted to reflect your personality and make your workspace uniquely yours.",
        },
        {
            image: clicker,
            header: "Comfort built to last",
            description:
                "Ergonomic grips and thoughtful curves reduce fatigue, whether you're working eight hours or gaming all night.",
        },
        {
            image: performance,
            header: "Performance you can trust",
            description:
                "Precision sensors and responsive tracking deliver the reliability professionals and gamers demand.",
        },
    ]

    return (
        <section className="w-full feature-gradient">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

                <div className="text-center space-y-4">
                    <div className="head text-2xl sm:text-3xl lg:text-4xl">
                        What sets MORI apart from the rest
                    </div>

                    <p className="desc text-white text-sm sm:text-base lg:text-lg mx-auto max-w-2xl">
                        We believe a mouse is more than a tool. It's an extension of who you are, how you work, and what you create.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {data.map((item) => (
                        <div
                            key={item.header}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            <img src={item.image} alt="" className="h-16 w-16 sm:h-20 sm:w-20" />

                            <div className="font-Nobile text-xl sm:text-2xl lg:text-[32px] text-white font-medium max-w-xs">
                                {item.header}
                            </div>

                            <div className="font-inter text-sm sm:text-base text-white max-w-sm">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Feature
