"use client"

import { projectsData } from "@/lib/projectsData"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectGallery from "@/components/project-gallery"
import { useLanguage } from "@/components/language-provider"
import ReactMarkdown from "react-markdown"
import { useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const { locale, t } = useLanguage() // Obtenemos la función de traducción 't'
  const project = projectsData.find((p) => p.id.toString() === params.id)

  // Modificación: Chequea si no existe O si está oculto explícitamente
  if (!project || project.isVisible === false) {
    notFound()
  }

  // Si 't' aún no se ha cargado, puedes mostrar un estado de carga o null
  if (!t) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pb-16">
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="ghost" className="pl-0 text-muted-foreground hover:text-foreground hover:bg-transparent">
            <Link href="/#proyectos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.ProjectDetailPage.backButton}
            </Link>
          </Button>
        </div>
        <section className="relative h-96 w-full overflow-hidden">
          {project.imageNeedsBackground && (
            <div className="absolute inset-0 bg-white z-0" />
          )}
          
          <div className="absolute inset-0 flex items-center justify-center p-12 md:p-24 z-10">
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title[locale]}
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
                {t.ProjectDetailPage.backButton}
              </Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-16 relative z-30 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            {project.title[locale]}
          </h1>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6">{t.ProjectDetailPage.descriptionTitle}</h2>
            <div className="prose prose-lg max-w-none text-xl text-muted-foreground leading-relaxed text-pretty">
              <ReactMarkdown>{project.detailedDescription[locale]}</ReactMarkdown>
            </div>
          </div>
          
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mb-12">
              <ProjectGallery media={project.galleryImages} />
            </div>
          )}

          {project.demoVideoUrl && (
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-6">{t.ProjectDetailPage.demoVideoTitle}</h2>
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
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  {t.ProjectDetailPage.repositoryButton}
                </a>
              </Button>
            )}
            {project.blogUrl && (
              <Button asChild variant="outline" size="lg">
                <a href={project.blogUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  {t.ProjectDetailPage.blogButton}
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild size="lg">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {t.ProjectDetailPage.liveButton}
                </a>
              </Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}