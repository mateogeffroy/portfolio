"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ project }) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/proyecto/${project.id}`)
  }

  const handleGithubClick = (e) => {
    e.stopPropagation()
  }

  return (
    <Card
      onClick={handleCardClick}
      className="
        overflow-hidden p-0 flex flex-col h-full
        bg-card
        border-0
        shadow-2xl shadow-black/100
        cursor-pointer
      "
    >
      <div className="w-full h-48 relative bg-white">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{project.description}</p>
      </div>
      <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-4">
        <Button asChild size="sm">
          <Link href={`/proyecto/${project.id}`}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Ver detalles
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild onClick={handleGithubClick}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:bg-transparent hover:underline hover:text-foreground"
          >
            <Github className="w-4 h-4 mr-2" />
            Ver repositorio
          </a>
        </Button>
      </div>
    </Card>
  )
}