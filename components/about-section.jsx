"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Globe, Mail, User, GraduationCap, Code, Database, Wrench, Monitor } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const skills = {
  Frontend: {
    icon: Monitor,
    style: "text-primary bg-primary/10",
    items: ["Next", "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  Backend: {
    icon: Database,
    style: "text-primary bg-primary/10",
    items: ["Python", "Node", "Django", "Flask", "PostgreSQL", "SQLite"],
  },
  Herramientas: {
    icon: Wrench,
    style: "text-primary bg-primary/10",
    items: ["GitHub", "VS Code", "Visual Studio", "Figma", "Docker", "Postman"],
  },
}

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">{t.AboutSection.titulo}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="bg-card border-0 shadow-2xl shadow-black/20 flex flex-col min-h-[420px]">
            <CardContent className="p-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <User className="w-6 h-6" />
                {t.AboutSection.infoPersonal}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">{t.AboutSection.ubicacion}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">{t.AboutSection.idiomas}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">mateogeffroy.dev@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-2xl shadow-black/20 flex flex-col min-h-[420px]">
            <CardContent className="p-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                {t.AboutSection.educacion}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground">{t.AboutSection.educacionTitulo1}</h4>
                  <p className="text-muted-foreground">{t.AboutSection.educacionSubtitulo1}</p>
                  <p className="text-sm text-muted-foreground">2014 - 2019</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {t.AboutSection.educacionTitulo2}
                  </h4>
                  <p className="text-muted-foreground">{t.AboutSection.educacionSubtitulo2}</p>
                  <p className="text-sm text-muted-foreground">2022 - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {t.AboutSection.educacionTitulo3}
                  </h4>
                  <p className="text-muted-foreground">{t.AboutSection.educacionSubtitulo2}</p>
                  <p className="text-sm text-muted-foreground">{t.AboutSection.periodo}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-2xl shadow-black/20 flex flex-col min-h-[420px]">
            <CardContent className="p-8 flex-grow">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Code className="w-6 h-6" />
                {t.AboutSection.habilidades}
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, { icon: Icon, style, items }]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className={`px-3 py-1 rounded-full text-sm ${style}`}>
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