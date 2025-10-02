"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con React, Node.js y Stripe para pagos.",
    image: "/modern-ecommerce-website-interface--clean-design.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/monchiviri27",
  },
  {
    id: 2,
    title: "Portafolio De Maquillaje",
    description: "Este es un portafolio digital de alta velocidad para Luxury Makeup, maquillaje profesional.",
    image: "lurury-makeup.png",
    technologies: ["Astro", "TypeScript", "Markdown", "Tailwind"],
    liveUrl: "https://maquillaje-portfolio.vercel.app/",
    githubUrl: "https://github.com/monchiviri27",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico con visualización de datos y pronósticos interactivos.",
    image: "/weather-dashboard-interface--charts--modern-design.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "Weather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/monchiviri27",
  },
  {
    id: 4,
    title: "Pool Tournament Manager",
    description: "Herramienta de análisis de redes sociales con métricas avanzadas y reportes.",
    image: "/analytics-dashboard--social-media-metrics--graphs.jpg",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "https://pool-tournament-manager.vercel.app/",
    githubUrl: "https://github.com/monchiviri27",
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Sistema de gestión de aprendizaje con cursos online y seguimiento de progreso.",
    image: "nfl-blog.png",
    technologies: ["Next.js", "Supabase", "Tailwind", "Stripe"],
    liveUrl: "https://blog-nfl.vercel.app/",
    githubUrl: "https://github.com/monchiviri27",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description: "Plataforma inmobiliaria con búsqueda avanzada y tours virtuales 360°.",
    image: "nba-blog.png",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
    liveUrl: "https://monchiviri27.github.io/nba-blog/",
    githubUrl: "https://github.com/monchiviri27",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full-stack, desde aplicaciones web
            hasta sistemas complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up overflow-hidden p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" className="border-border hover:bg-card bg-transparent" asChild>
                    <a 
  href={project.githubUrl} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="transition-colors duration-200 text-foreground hover:text-primary"
>
  <Github className="h-4 w-4" />
</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
