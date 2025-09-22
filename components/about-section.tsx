"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "text-blue-400",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    color: "text-green-400",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "AWS, Docker, Vercel, CI/CD",
    color: "text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, Progressive Web Apps",
    color: "text-orange-400",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Acerca de <span className="text-primary">Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            He dedicado mi carrera a dominar el arte y la ciencia de la programación. Mi enfoque se centra en el desarrollo full stack, construyendo aplicaciones web completas y robustas. Desde el diseño de interfaces intuitivas hasta la optimización del rendimiento en el servidor, mi pasión es crear experiencias digitales fluidas y funcionales. Como desarrollador, valoro la innovación y la mejora continua, siempre explorando nuevas herramientas para ofrecer las mejores soluciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full bg-background mb-4 ${skill.color}`}>
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Mi Historia</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Desarrollador Full Stack enfocado en la creación de soluciones digitales eficientes y escalables. Con experiencia en la construcción de aplicaciones desde el front-end hasta el back-end, mi objetivo es desarrollar productos robustos y centrados en el usuario. Estoy en constante aprendizaje y siempre en busca de nuevas tecnologías que optimicen el flujo de trabajo y la experiencia del desarrollador.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cuando no estoy escribiendo código, me dedico a explorar nuevas tecnologías, leer artículos técnicos y mantenerme al día con las últimas tendencias de la industria. Mi objetivo es mejorar constantemente la experiencia de desarrollo, siempre en busca de herramientas que optimicen mi flujo de trabajo y la calidad de mis proyectos.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">JavaScript/TypeScript</span>
                    <span className="text-primary">75%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">React/Next.js</span>
                    <span className="text-primary">75%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Node.js/Python</span>
                    <span className="text-primary">70%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Cloud/DevOps</span>
                    <span className="text-primary">60%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
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
