import amazon from '@/assets/Platform/Amazon.png'
import alibaba from '@/assets/Platform/Alibaba.png'
import lazada from '@/assets/Platform/Lazada.png'
import tokopedia from '@/assets/Platform/Tokopedia.png'
import shopee from '@/assets/Platform/Shopee.png'
import tiktok from '@/assets/Platform/Tiktok.png'

function Available() {
    const platforms = [
        { image: shopee, alt: "Shopee" },
        { image: tiktok, alt: "TikTok" },
        { image: tokopedia, alt: "Tokopedia" },
        { image: lazada, alt: "Lazada" },
        { image: amazon, alt: "Amazon" },
        { image: alibaba, alt: "Alibaba" },
    ]

    return (
        <section className="w-full py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <div className="text-center space-y-4">
                    <h3 className="head text-foreground text-2xl sm:text-3xl md:text-4xl">
                        MORI is now available online!
                    </h3>
                    <p className="desc text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Shop directly through your favorite e-commerce platforms by clicking the logos below.
                    </p>
                </div>

                <div
                    className="
            mt-10 sm:mt-12
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
            gap-6 sm:gap-8 lg:gap-10
            place-items-center
          "
                >
                    {platforms.map((platform, i) => (
                        <button
                            key={platform.alt}
                            className={`
                group
                ${i === 4 ? "lg:col-start-2" : ""} 
              `}
                            aria-label={platform.alt}
                            type="button"
                        >
                            <img
                                src={platform.image}
                                alt={platform.alt}
                                className="
                  h-full
                  w-auto
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-105
                "
                            />
                        </button>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Available
