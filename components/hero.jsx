"use client"

import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder-code-bg.png"
          alt="Fondo de código difuminado"
          fill
          sizes="100vw"
          className="object-cover filter blur-sm brightness-75"
          priority
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative text-white">
        <div className="flex items-center justify-center min-h-[96px] md:min-h-[128px]">
          <TypeAnimation
            sequence={["Mateo Arturo Geffroy"]}
            wrapper="h1"
            cursor={true}
            speed={50}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance"
          />
        </div>
        <h2
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto text-pretty"
        >
          Estudiante de ingeniería en sistemas de información y desarrollador de software capacitado en la creación de
          soluciones tecnológicas.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection("proyectos")} className="text-lg px-8 py-3">
            Ver proyectos
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            <a href="/mateo-arturo-geffroy-cv.pdf" target="_blank" rel="noopener noreferrer">
              Ver CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}