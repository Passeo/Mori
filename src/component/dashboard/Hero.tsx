import hero from '../../assets/hero.svg'


function Hero() {
    return (
        <section className="w-full relative overflow-hidden">
            <div className="relative text-center w-full">

                {/* Heading */}
                <h1 className="
                    font-Nobile italic font-bold
                    text-foreground lg:text-white
                    text-3xl sm:text-4xl md:text-5xl lg:text-[40px]
                    
                    lg:absolute lg:top-20 lg:left-0 lg:right-0 lg:z-10
                    lg:w-full lg:mx-auto
                    
                    mt-10 mb-6 lg:mt-0 lg:mb-0
                    px-4
                ">
                    YOUR MOUSE SHOULD TELL YOUR STORY
                </h1>

                {/* Hero Image */}
                <div className="relative w-full mx-auto">
                    <img
                        src={hero}
                        alt="Hero"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Description */}
                <div className="
                    mx-auto px-6
                    
                    text-foreground lg:text-white
                    font-Inter text-sm sm:text-base lg:text-lg
                    
                    lg:absolute lg:bottom-20 lg:left-0 lg:right-0
                    lg:max-w-xl xl:max-w-2xl
                    
                    mt-8 mb-16 lg:mt-0 lg:mb-0
                ">
                    <p className="desc text-left sm:text-center text-inherit">
                        MORI crafts computer mice that blend personality with precision. From whimsical character shapes to high-performance gaming models, each design brings comfort and expression to your desk.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Hero;