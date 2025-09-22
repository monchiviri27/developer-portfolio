"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Loader2, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // 1. Verificar si el usuario está autenticado.
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        // Si no hay usuario, redirigir a la página de inicio de sesión.
        router.push("/login")
      } else {
        // Si hay usuario, cargar los mensajes.
        fetchMessages()
      }
    }

    checkUser()
  }, [router])

  // 2. Función para obtener los mensajes de la base de datos.
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false }) // Ordena los mensajes del más reciente al más antiguo.

    if (error) {
      console.error("Error al cargar los mensajes:", error.message)
    } else {
      setMessages(data || [])
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Error al cerrar sesión:", error.message)
    }
    router.push("/login")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-foreground">Panel de Control</h1>
        <Button onClick={handleLogout} variant="outline">
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>

      <p className="text-muted-foreground mb-6">Aquí puedes ver los mensajes enviados desde tu portafolio.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.length === 0 ? (
          <p className="col-span-full text-center text-muted-foreground">No tienes mensajes nuevos.</p>
        ) : (
          messages.map((message) => (
            <Card key={message.id} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{message.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{new Date(message.created_at).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-foreground font-medium">De: {message.email}</p>
                <Separator className="mb-2" />
                <p className="text-muted-foreground whitespace-pre-line">{message.message}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}