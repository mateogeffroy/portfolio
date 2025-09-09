import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import ProjectCard from "./project-card"
import { projectsData } from "@/lib/projectsData"

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Mis Proyectos</h2>
          <Button variant="outline" asChild className="mb-8 bg-transparent">
            <a href="https://github.com/mateogeffroy" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Perfil de GitHub
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}