import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button asChild size="sm" className="flex-1">
          <Link href={`/proyecto/${project.id}`}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Ver detalles
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
