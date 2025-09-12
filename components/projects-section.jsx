"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, GraduationCap, HardHat, LayoutGrid, FlaskConical } from "lucide-react"
import ProjectCard from "./project-card"
import { projectsData } from "@/lib/projectsData"
import { useLanguage } from "@/components/language-provider"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("todos")
  const { t } = useLanguage()

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "todos") return true
    return project.category === filter
  })

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t.ProjectsSection.titulo}</h2>
          <Button variant="outline" asChild className="bg-transparent">
            <a href="https://github.com/mateogeffroy" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              {t.ProjectsSection.botonGithub}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:flex md:justify-center md:flex-wrap gap-2 mb-12">
          <Button className="cursor-pointer" variant={filter === 'todos' ? 'default' : 'ghost'} onClick={() => setFilter("todos")}>
            <LayoutGrid className="w-4 h-4 mr-2" />
            {t.ProjectsSection.filtroTodos}
          </Button>
          <Button className="cursor-pointer" variant={filter === 'academico' ? 'default' : 'ghost'} onClick={() => setFilter("academico")}>
            <GraduationCap className="w-4 h-4 mr-2" />
            {t.ProjectsSection.filtroAcademico}
          </Button>
          <Button className="cursor-pointer" variant={filter === 'laboral' ? 'default' : 'ghost'} onClick={() => setFilter("laboral")}>
            <HardHat className="w-4 h-4 mr-2" />
            {t.ProjectsSection.filtroLaboral}
          </Button>
          <Button className="cursor-pointer" variant={filter === 'investigacion' ? 'default' : 'ghost'} onClick={() => setFilter("investigacion")}>
            <FlaskConical className="w-4 h-4 mr-2" />
            {t.ProjectsSection.filtroInvestigacion}
          </Button>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}