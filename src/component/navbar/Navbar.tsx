import { useEffect, useRef, useState } from "react"
import logo from '../../assets/MORI.svg'
import tripledash from '@/assets/Symbol/TripleNavbar.svg'
import { X, Sun, Moon } from 'lucide-react'
import { useTheme } from "../../context/ThemeContext"

interface NavbarProps {
  onLoginClick?: () => void;
}

function Navbar({ onLoginClick }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastScrollY.current

        // small threshold to avoid flicker
        const THRESHOLD = 8

        if (Math.abs(delta) > THRESHOLD) {
          // hide when scrolling down, show when scrolling up
          // Only hide if mobile menu is closed
          if (delta > 0 && currentY > 158 && !mobileMenuOpen) {
            setHidden(true)
          } else if (delta < 0) {
            setHidden(false)
          }
          lastScrollY.current = currentY
        }

        ticking.current = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [mobileMenuOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <div
        className={`
        bg-background text-foreground
        fixed top-0 left-0 right-0
        z-50
        transition-transform duration-500 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
      >
        <div className="h-[158px] align-middle flex items-center px-4 sm:px-6 lg:px-[68px]">
          <div className="h-[41px]">
            <img src={logo} alt="MORI logo" className="size-40 lg:size-full w-fit h-fit" />
          </div>

          <div className="hidden lg:flex lg:ml-auto lg:gap-[61px] lg:font-inter lg:font-semibold lg:text-[24px]">
            <button className="cursor-pointer hover:text-mori-lilac transition-colors">Product</button>
            <button className="cursor-pointer hover:text-mori-lilac transition-colors">Buy MORI</button>
            <button className="cursor-pointer hover:text-mori-lilac transition-colors">Contact</button>
            <button
              className="cursor-pointer px-6 py-2 rounded-full bg-mori-dark text-white dark:bg-white dark:text-mori-dark hover:bg-mori-deep dark:hover:bg-gray-200 transition-colors"
              onClick={onLoginClick}
            >
              Login
            </button>
          </div>

          <div className="lg:flex hidden ml-[61px] items-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="cursor-pointer p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="size-6" /> : <Moon className="size-6" />}
            </button>
          </div>

          <div className="lg:hidden ml-auto flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="cursor-pointer p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="size-6" /> : <Moon className="size-6" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-pointer mr-7"
            >
              <img src={tripledash} alt="Menu" className="size-8 dark:invert" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-60 bg-background text-foreground lg:hidden transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="h-[158px] flex items-center justify-between px-4 sm:px-6">
            <div className="h-[41px]">
              <img src={logo} alt="MORI logo" className="size-40 w-fit h-fit" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer mr-7 text-foreground hover:text-mori-purple transition-colors"
            >
              <X className="size-10" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10 font-inter font-semibold text-2xl pb-20">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-mori-lilac transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-mori-lilac transition-colors"
            >
              Buy MORI
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-mori-lilac transition-colors"
            >
              Contact
            </button>
            <div className="h-px w-20 bg-border my-2"></div>
            <button
              className="cursor-pointer px-10 py-3 rounded-full bg-mori-dark text-white dark:bg-white dark:text-mori-dark hover:bg-mori-deep dark:hover:bg-gray-200 transition-colors text-xl"
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick?.();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );

}

export default Navbar
