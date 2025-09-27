"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="text-foreground">Hola, soy</span>
              <br />
              <span className="text-primary">Wellington Bazurto</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl">
              Desarrollador Full Stack especializado en experiencias web modernas con React y Node.js. Experto en la creación de soluciones escalables con TypeScript y despliegue en la nube.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Ver mis proyectos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-card text-foreground px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 bg-transparent"
              >
                Descargar CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/monchiviri27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-200 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:wellingtonbazurto.dev@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-200 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src="wellington-bazurto.jpg"
                  alt="Wellington Bazurto - Desarrollador Full Stack"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/100 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
