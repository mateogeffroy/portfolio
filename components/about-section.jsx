import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Globe, Mail } from "lucide-react"

const skills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Python", "Django", "MySQL", "PostgreSQL"],
  herramientas: ["GitHub", "VS Code", "Visual Studio", "Figma", "Docker"],
}

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Sobre Mi</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información Personal */}
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Información Personal</h3>
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

          {/* Educación */}
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Educación</h3>
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

          {/* Habilidades */}
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Mis Habilidades</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Herramientas</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.herramientas.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
