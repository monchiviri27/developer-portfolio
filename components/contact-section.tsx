"use client"

import type React from "react"
import { useState } from "react"
// Importamos la conexión a Supabase que creaste.
import { supabase } from "@/lib/supabaseClient" 

// Importaciones de los componentes de la interfaz de usuario.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Nuevos estados para manejar el envío y el estado del formulario.
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // La función principal que se conecta a Supabase.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setStatus("Enviando mensaje...")

    try {
      // Usamos el método `from` para seleccionar la tabla y `insert` para guardar los datos.
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([formData])

      if (error) {
        throw error
      }

      setStatus("¡Mensaje enviado con éxito! Te contactaré pronto.")
      setFormData({ name: "", email: "", message: "" }) // Limpiamos el formulario.

    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setStatus("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setStatus("")
      }, 3000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Hablemos de tu <span className="text-primary">Proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a convertirla en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Columna de la izquierda: Información de contacto */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground break-words text-sm">wellingtonbazurto.dev@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+34 000000000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Madrid, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">¿Por qué trabajar conmigo?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Experiencia en desarrollo full-stack</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enfoque en código limpio y escalable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comunicación clara y entregas puntuales</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Soporte post-lanzamiento incluido</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Columna de la derecha: Formulario de contacto */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Envíame un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      className="bg-background border-border text-foreground resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 transition-all duration-200 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                  
                  {status && (
                    <p className={`text-center text-sm ${status.includes("éxito") ? "text-green-500" : "text-red-500"}`}>
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
