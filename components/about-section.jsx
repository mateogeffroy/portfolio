"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Globe, Mail, User, GraduationCap, Code } from "lucide-react"

const skills = {
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Python", "Django", "MySQL", "PostgreSQL"],
  Herramientas: ["GitHub", "VS Code", "Visual Studio", "Figma", "Docker"],
}

const skillStyles = {
  Frontend: "bg-primary/10 text-primary",
  Backend: "bg-accent/10 text-accent",
  Herramientas: "bg-accent/10 text-accent",
}

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Sobre Mí</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="bg-card border-0 shadow-2xl shadow-black/20 flex flex-col">
            <CardContent className="p-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <User className="w-6 h-6" />
                Información Personal
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">La Plata, Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Español (Nativo), Inglés (Intermedio)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">mateogeffroy@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-2xl shadow-black/20 flex flex-col">
            <CardContent className="p-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                Educación
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground">Colegio Sagrado Corazón de Jesús</h4>
                  <p className="text-muted-foreground">Bachiller en Ciencias Naturales</p>
                  <p className="text-sm text-muted-foreground">2014 - 2019</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Universidad Tecnológica Nacional - Facultad Regional de La Plata
                  </h4>
                  <p className="text-muted-foreground">Ingeniería en Sistemas de Información</p>
                  <p className="text-sm text-muted-foreground">2022 - Actualidad</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-2xl shadow-black/20 flex flex-col">
            <CardContent className="p-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Code className="w-6 h-6" />
                Mis Habilidades
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-sm ${skillStyles[category] || 'bg-muted/10 text-muted'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}