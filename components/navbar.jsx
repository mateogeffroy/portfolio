"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio")
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { locale, setLocale, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    { id: "inicio", key: "inicio" },
    { id: "proyectos", key: "proyectos" },
    { id: "sobre-mi", key: "sobreMi" },
    { id: "contacto", key: "contacto" },
  ]

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

          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    transition-all duration-300 cursor-pointer font-semibold
                    ${activeSection === section.id 
                      ? "text-primary scale-105"
                      : "text-foreground/70 scale-100"
                    }
                    hover:text-primary hover:scale-105
                  `}
                >
                  {t.Navbar[section.key]}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                aria-label="Cambiar tema"
              >
                {!mounted ? <div className="w-5 h-5" /> : (resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}>
                {locale.toUpperCase()}
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
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menú de Navegación</SheetTitle>
                    <SheetDescription>
                      Enlaces para navegar por las diferentes secciones del portafolio.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col items-center gap-6 pt-12 pb-12">
                    {sections.map((section) => (
                      <SheetClose asChild key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`
                            text-xl transition-colors font-semibold
                            ${activeSection === section.id 
                              ? "text-primary"
                              : "text-foreground"
                            }
                          `}
                        >
                          {t.Navbar[section.key]}
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