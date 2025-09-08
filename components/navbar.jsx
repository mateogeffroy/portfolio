"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-mag.png"
              alt="Logo MAG"
              width={120}
              height={80}
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Sobre Mi
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contacto
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" disabled>
                🌙
              </Button>
              <Button variant="ghost" size="sm" disabled>
                ES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}