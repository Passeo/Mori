import clock from '@/assets/Symbol/Clock.svg'
import mail from '@/assets/Symbol/Mail.svg'
import location from '@/assets/Symbol/Location.svg'
import phone from '@/assets/Symbol/Phone.svg'
import map from '@/assets/map.png'

function ContactUs() {
    return (
        <section className="w-full my-20">
            <div
                className="
            mx-auto max-w-6xl
            px-4 sm:px-6 lg:px-8
            flex flex-col lg:flex-row
            gap-10 lg:gap-16
            items-start
        "
            >
                <div className="w-full lg:w-1/2 font-inter">
                    <h2 className="head text-foreground text-3xl sm:text-4xl">
                        Contact Us
                    </h2>

                    <p className="text-xl sm:text-2xl underline mt-6">
                        MORI Official Store
                    </p>

                    <div className="flex flex-col gap-4 mt-6 text-base sm:text-lg">
                        <div className="flex items-start gap-4">
                            <img src={location} className="size-6 sm:size-8 mt-1" />
                            <div className="max-w-[525px]">
                                Jalan Jalan sajah No.99 Kemayoran, Jakarta Pusat, Indonesia
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={clock} className="size-6 sm:size-8 mt-1" />
                            <div className="flex flex-col">
                                <span className="font-medium">Weekdays</span>
                                <span>9:00AM - 6:00PM</span>
                                <span className="font-medium mt-2">Weekend</span>
                                <span>Closed</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={phone} className="size-6 sm:size-8 mt-1" />
                            <span>+62 812-3456-7890</span>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={mail} className="size-6 sm:size-8 mt-1" />
                            <span>mofiigadget</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <img
                        src={map}
                        alt="Store map"
                        className="
                w-full
                max-h-[420px] sm:max-h-[520px]
                object-cover
                rounded-2xl
            "
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactUs
