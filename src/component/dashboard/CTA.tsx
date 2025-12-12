import ctaImage from '@/assets/bg-2.svg'

function CTA() {
    return (
        <section className="w-full relative">
            {/* Background image */}
            <img
                src={ctaImage}
                alt="CTA background"
                className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-full object-cover block"
            />

            {/* Text overlay */}
            <div
                className="
            absolute
            top-8 sm:top-12 md:top-16 lg:top-20
            left-4 sm:left-8 md:left-12 lg:left-20
            right-4
            font-Nobile font-medium
            text-white
            max-w-[775px]
            text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
            leading-snug
        "
            >
                Upgrade your workspace with comfort and character.
            </div>
        </section>
    )
}

export default CTA
