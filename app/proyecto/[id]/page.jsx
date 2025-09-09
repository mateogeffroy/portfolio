import { projectsData } from "@/lib/projectsData"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectGallery from "@/components/project-gallery"
import ReactMarkdown from "react-markdown"

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-16">
        <section className="relative h-96 w-full overflow-hidden">
          {project.imageNeedsBackground && (
            <div className="absolute inset-0 bg-white z-0" />
          )}
          
          <div className="absolute inset-0 flex items-center justify-center p-12 md:p-24 z-10">
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`Logo de ${project.title}`}
                fill
                sizes="50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />

          <div className="absolute top-6 left-6 z-30">
            <Button asChild variant="outline" className="bg-transparent border-foreground/20 text-foreground/80 hover:bg-foreground hover:text-background">
              <Link href="/#proyectos">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-16 relative z-30 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            {project.title}
          </h1>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Descripción del Proyecto</h2>
            <div className="prose prose-lg max-w-none text-xl text-muted-foreground leading-relaxed text-pretty">
              <ReactMarkdown>{project.detailedDescription}</ReactMarkdown>
            </div>
          </div>
          
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mb-12">
              <ProjectGallery media={project.galleryImages} />
            </div>
          )}

          {project.demoVideoUrl && (
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-6">Video Demostración</h2>
              <div className="overflow-hidden rounded-lg border aspect-video">
                <video
                  src={project.demoVideoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="container mx-auto px-4 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.liveUrl && (
                <Button asChild size="lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver proyecto en vivo
                    </a>
                </Button>
                )}
                <Button asChild variant="outline" size="lg">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    Ver código en GitHub
                </a>
                </Button>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}