function BundleSpecial() {
    return (
        <section className="bg-mori-lilac w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 lg:px-20 py-10">
                <h3 className="font-Nobile font-bold italic text-2xl sm:text-3xl md:text-[40px] text-center md:text-left text-mori-dark">
                    MORI Bundle Special
                </h3>

                <p className="desc font-black max-w-md text-center md:text-left text-sm sm:text-base text-mori-dark">
                    Get <span className="font-bold">15% off</span> when you buy 2 or more mice. Perfect for gifts or matching with friends!
                </p>

                <button className="bg-mori-deep w-[180px] h-[39px] rounded-[20px] cursor-pointer text-white shrink-0 hover:opacity-90 transition-opacity">
                    SHOP NOW!
                </button>
            </div>
        </section>
    )
}

export default BundleSpecial
