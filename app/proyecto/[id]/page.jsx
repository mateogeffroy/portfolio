import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock data - en el futuro esto vendría de una base de datos
const projectsData = {
  1: {
    title: "Sistema de Gestión Empresarial",
    description:
      "Una aplicación web completa desarrollada con React en el frontend y Django en el backend, diseñada para optimizar la gestión empresarial. El sistema incluye módulos integrados para el control de inventarios con alertas automáticas de stock bajo, gestión completa de clientes con historial de compras, sistema de facturación automatizado, y reportes analíticos en tiempo real. La arquitectura implementa patrones de diseño como MVC y utiliza PostgreSQL para el almacenamiento de datos, garantizando escalabilidad y rendimiento óptimo.",
    images: [
      "/business-dashboard-main-interface.jpg",
      "/inventory-management-system.png",
      "/customer-management-interface.jpg",
      "/sales-analytics-dashboard.png",
    ],
    githubUrl: "https://github.com/mateogeffroy/sistema-gestion",
    liveUrl: "https://sistema-gestion-demo.vercel.app",
  },
  2: {
    title: "E-commerce Moderno",
    description:
      "Plataforma de comercio electrónico desarrollada con tecnologías modernas, implementando Next.js para el frontend con renderizado del lado del servidor (SSR) para optimizar el SEO. Incluye un carrito de compras persistente con localStorage, integración completa con pasarelas de pago (Stripe y MercadoPago), sistema de gestión de productos con categorías y filtros avanzados, panel administrativo para vendedores, y sistema de reseñas y calificaciones. La aplicación está optimizada para dispositivos móviles y cuenta con Progressive Web App (PWA) capabilities.",
    images: [
      "/ecommerce-homepage-modern-design.jpg",
      "/product-catalog-with-filters.jpg",
      "/shopping-cart-checkout-process.jpg",
      "/admin-dashboard-ecommerce.jpg",
    ],
    githubUrl: "https://github.com/mateogeffroy/ecommerce-moderno",
    liveUrl: "https://ecommerce-moderno-demo.vercel.app",
  },
  3: {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación full-stack para la gestión de proyectos y tareas, desarrollada con React Native para móviles y React.js para web, compartiendo la misma API REST construida con Django. Implementa funcionalidades avanzadas como colaboración en tiempo real usando WebSockets, sistema de notificaciones push, gestión de equipos con roles y permisos, tableros Kanban interactivos, seguimiento de tiempo dedicado a tareas, y generación de reportes de productividad. La sincronización entre dispositivos es automática y funciona offline con sincronización posterior.",
    images: [
      "/task-management-kanban.png",
      "/project-collaboration-interface.jpg",
      "/mobile-task-app-interface.jpg",
      "/team-productivity-dashboard.jpg",
    ],
    githubUrl: "https://github.com/mateogeffroy/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData[params.id]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Botón volver */}
          <Button asChild variant="outline" className="mb-8 bg-transparent">
            <Link href="/#proyectos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Link>
          </Button>

          {/* Título del proyecto */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{project.title}</h1>

          {/* Descripción detallada */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
          </div>

          {/* Galería de imágenes */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Galería del Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Imagen ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver proyecto en vivo
              </a>
            </Button>
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
