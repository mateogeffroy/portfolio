"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const sections = ["inicio", "proyectos", "sobre-mi", "contacto"]
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" } 
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

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
            <Image src="/logo-mag.png" alt="Logo MAG" width={120} height={80} priority />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {["inicio", "proyectos", "sobre-mi", "contacto"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    transition-all duration-300 cursor-pointer
                    ${activeSection === section 
                      ? "text-primary scale-105 font-semibold"
                      : "text-foreground font-normal"
                    }
                    hover:text-primary hover:scale-105
                  `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" disabled>
                🌙
              </Button>
              <Button variant="ghost" size="sm" disabled>
                ES
              </Button>
            </div>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <div className="flex flex-col items-center gap-6 pt-12 pb-12">
                    {["inicio", "proyectos", "sobre-mi", "contacto"].map((section) => (
                      <SheetClose asChild key={section}>
                        <button
                          onClick={() => scrollToSection(section)}
                          className={`
                            text-xl transition-colors
                            ${activeSection === section 
                              ? "text-primary font-semibold"
                              : "text-foreground"
                            }
                          `}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                        </button>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}