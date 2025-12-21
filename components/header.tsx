"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Instagram, Youtube } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { BookingModal } from "./booking-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  // Transparent header only on home page when not scrolled
  const isTransparent = isHomePage && !isScrolled

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent" 
          : "bg-white shadow-md"
      }`}
    >
      <div className={`border-b ${isTransparent ? "border-white/20" : "border-slate-200"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className={`flex items-center gap-2 ${isTransparent ? "text-white/90" : "text-slate-600"}`}>
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">313 Evans Avenue, Etobicoke, Ontario M8Z 1K2</span>
              <span className="sm:hidden">Etobicoke, ON</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:6479670336"
                className={`flex items-center gap-2 transition-colors ${
                  isTransparent 
                    ? "text-white/90 hover:text-white" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>647-967-0336</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/cortfitness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isTransparent 
                      ? "text-white/90 hover:text-white" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@AndrewCortFitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isTransparent 
                      ? "text-white/90 hover:text-white" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/Personal-Training-near-Etobicoke-226082.png"
              alt="Cort Fitness"
              width={180}
              height={60}
              className={`h-14 w-auto transition-all duration-300 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/programs"
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-white/90 hover:text-white" 
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Programs
            </Link>
            <Link
              href="/#team"
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-white/90 hover:text-white" 
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Team
            </Link>
            <Link
              href="/#reviews"
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-white/90 hover:text-white" 
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Reviews
            </Link>
            <Link
              href="/#faq"
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-white/90 hover:text-white" 
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              FAQ
            </Link>
            <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Request More Info
            </Button>
          </nav>

          <button
            className={`lg:hidden transition-colors ${
              isTransparent ? "text-white" : "text-slate-700"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 bg-white border border-slate-200 rounded-lg p-4 -mx-2 shadow-lg">
            <Link
              href="/programs"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/#team"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/#reviews"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Request More Info
            </Button>
          </nav>
        )}
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Information" />
    </header>
  )
}
