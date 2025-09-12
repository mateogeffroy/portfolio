"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-30 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t.ContactSection.titulo}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.ContactSection.subtitulo}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button asChild size="lg" className="h-16">
              <a href="mailto:mateogeffroy@gmail.com" className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">{t.ContactSection.email}</div>
                  <div className="text-sm opacity-90">mateogeffroy@gmail.com</div>
                </div>
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="h-16 bg-transparent">
              <a
                href="https://linkedin.com/in/mateogeffroy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Linkedin className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">{t.ContactSection.linkedin}</div>
                  <div className="text-sm opacity-70">{t.ContactSection.linkedinSub}</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}