import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import ProjectCard from "./project-card"

const mockProjects = [
  {
    id: 1,
    title: "Sistema de Gestión Empresarial",
    description:
      "Aplicación web completa para la gestión de inventarios, ventas y clientes desarrollada con React y Django.",
    image: "/business-management-system-dashboard.jpg",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 2,
    title: "E-commerce Moderno",
    description: "Tienda online responsive con carrito de compras, sistema de pagos y panel administrativo.",
    image: "/modern-ecommerce-website.png",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 3,
    title: "App de Gestión de Tareas",
    description: "Aplicación móvil y web para organizar proyectos y tareas con colaboración en tiempo real.",
    image: "/task-management-app.png",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 4,
    title: "Sistema de Reservas",
    description: "Plataforma para reservas de servicios con calendario interactivo y notificaciones automáticas.",
    image: "/booking-system-calendar.png",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 5,
    title: "Dashboard Analítico",
    description: "Panel de control con visualización de datos en tiempo real usando gráficos interactivos.",
    image: "/analytics-dashboard-charts.png",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 6,
    title: "API REST Completa",
    description: "API robusta con autenticación JWT, documentación automática y tests unitarios.",
    image: "/rest-api-documentation.jpg",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 7,
    title: "Chat en Tiempo Real",
    description: "Aplicación de mensajería instantánea con salas privadas y notificaciones push.",
    image: "/real-time-chat-application.png",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 8,
    title: "Sistema de Blog",
    description: "CMS personalizado con editor de contenido, categorías y sistema de comentarios.",
    image: "/blog-cms-interface.jpg",
    githubUrl: "https://github.com/mateogeffroy",
  },
  {
    id: 9,
    title: "App de Finanzas Personales",
    description: "Herramienta para el control de gastos e ingresos con reportes detallados y gráficos.",
    image: "/personal-finance-app.jpg",
    githubUrl: "https://github.com/mateogeffroy",
  },
]

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
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
