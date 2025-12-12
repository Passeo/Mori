function Footer() {
    return (
        <footer className="w-full py-8 text-center bg-[radial-gradient(50%_50%_at_50%_50%,#342b4a_0%,#7c66b0_100%)] text-white">
            <p className="font-Inter text-base sm:text-lg lg:text-xl">
                © {new Date().getFullYear()} MORI. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer