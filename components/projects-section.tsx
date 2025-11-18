"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

// La lista de proyectos con rutas de imagen corregidas (TODAS deben empezar con /)
const projects = [
  {
    id: 1,
    title: "IA-Book-Store",
    description: "Plataforma de comercio electrónico completa con React, Node.js y Stripe para pagos.",
    image: "/ia-book-store.png",
    technologies: ["React", "Node.js", "Supabase", "Stripe"],
    liveUrl: "https://ia-ebook-store.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/ia-ebook-store",
  },
  {
    id: 2,
    title: "Portafolio De Maquillaje",
    description: "Este es un portafolio digital de alta velocidad para Luxury Makeup, maquillaje profesional.",
    image: "/lurury-makeup.png",
    technologies: ["Astro", "TypeScript", "Markdown", "Tailwind"],
    liveUrl: "https://maquillaje-portfolio.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/maquillaje-portfolio",
  },
  {
    id: 3,
    title: "ChatBot",
    description: "Chatbot guia literario creado con Google Ai Studio",
    image: "/chatbot.png",
    technologies: ["Google API", "Google AI Studio", "Vite", "Javascript"],
    liveUrl: "https://guia-literario-chatbot.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/guia-literario-chatbot",
  },
  {
    id: 4,
    title: "Pool Tournament Manager",
    description: "Herramienta de gestión de torneos de billar.",
    image: "/pool-tournament-manager.png",
    technologies: ["Typescript", "Javascript", "React", "Node.js"],
    liveUrl: "https://pool-tournament-manager.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/pool-tournament-manager",
  },
  {
    id: 5,
    title: "Blog NFL",
    description: "Sistema de gestión de aprendizaje con cursos online y seguimiento de progreso.",
    image: "/nfl-blog.png", // CORREGIDO: Añadido '/'
    technologies: ["Next.js", "Supabase", "Tailwind", "Stripe"],
    liveUrl: "https://blog-nfl.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/blog-nfl",
  },
  {
    id: 6,
    title: "Blog NBA",
    description: "Plataforma inmobiliaria con búsqueda avanzada y tours virtuales 360°.",
    image: "/nba-blog.png", // CORREGIDO: Añadido '/'
    technologies: ["React", "Node.js", "Astro", "Markdown"],
    liveUrl: "https://monchiviri27.github.io/nba-blog/",
    githubUrl: "",
  },
]

// Función auxiliar para crear un slug simple a partir del título (para las URLs)
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/[^\w\-]+/g, '') // Remueve caracteres no alfanuméricos
    .replace(/\-\-+/g, '-') // Reemplaza múltiples guiones con uno solo
    .trim()
}

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
          {projects.map((project, index) => {
            const projectSlug = createSlug(project.title) // Genera el slug
            return (
              <Card
                key={project.id}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up overflow-hidden p-0 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Usamos Link dentro de Card para que la sección de imagen/texto principal sea clickeable */}
                <Link 
                    href={`/projects/${projectSlug}`} 
                    className="block" // Asegura que el Link ocupe todo el espacio de imagen y texto
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
                </Link>

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
                    {/* Botón Ver Demo - Se mantiene sin cambios */}
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>

                    {/* Icono GitHub - Se mantiene sin cambios */}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}