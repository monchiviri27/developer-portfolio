"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  // Inicializar tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Aplicar tema
  const applyTheme = (newTheme: string) => {
    const html = document.documentElement

    if (newTheme === 'dark') {
      html.classList.add('dark')
      // TEMA OSCURO
      html.style.setProperty('--background', '#0f172a')
      html.style.setProperty('--foreground', '#f1f5f9')
      html.style.setProperty('--primary', '#60a5fa')
      html.style.setProperty('--primary-foreground', '#0f172a')
      html.style.setProperty('--border', '#334155')
      html.style.setProperty('--card', '#1e293b')
      html.style.setProperty('--accent', '#818cf8')
      html.style.setProperty('--muted-foreground', '#94a3b8')
    } else {
      html.classList.remove('dark')
      // TEMA CLARO
      html.style.setProperty('--background', '#ffffff')
      html.style.setProperty('--foreground', '#1e293b')
      html.style.setProperty('--primary', '#2563eb')
      html.style.setProperty('--primary-foreground', '#ffffff')
      html.style.setProperty('--border', '#cbd5e1')
      html.style.setProperty('--card', '#f1f5f9')
      // CAMBIO: Se ajusta el color del acento para que coincida con el primario
      html.style.setProperty('--accent', '#2563eb')
      html.style.setProperty('--muted-foreground', '#64748b')
    }

    localStorage.setItem('portfolio-theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { id: "about", label: "Acerca de" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" }
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      // CAMBIO: Se elimina la transparencia inicial para que el menú móvil no se mezcle con el fondo
      backgroundColor: 'var(--background)',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : 'none'
    }}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--foreground)'
          }}>
            Wellington Bazurto
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: 'var(--foreground)',
                  transition: 'color 0.3s',
                  position: 'relative',
                  padding: '0.5rem 0.75rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--foreground)'
                }}
              >
                {item.label}
                <span style={{
                  position: 'absolute',
                  bottom: '-0.25rem',
                  left: '0.75rem',
                  right: '0.75rem',
                  height: '2px',
                  backgroundColor: 'var(--primary)',
                  transition: 'transform 0.3s',
                  transform: 'scaleX(0)'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scaleX(1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scaleX(0)'
                  }} />
              </button>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex items-center space-x-4">
            {/* Botón Tema */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              style={{
                position: 'relative',
                borderColor: 'var(--border)'
              }}
            >
              <Sun style={{
                height: '1.2rem',
                width: '1.2rem',
                transition: 'all 0.3s',
                opacity: theme === 'light' ? 1 : 0,
                transform: theme === 'light' ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-90deg)'
              }} />
              <Moon style={{
                position: 'absolute',
                height: '1.2rem',
                width: '1.2rem',
                transition: 'all 0.3s',
                opacity: theme === 'dark' ? 1 : 0,
                transform: theme === 'dark' ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)'
              }} />
            </Button>

            {/* Botón Contáctame - Desktop */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                padding: '0.5rem 1.5rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              Contáctame
            </Button>

            {/* Botón Menú Hamburguesa - Móvil */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Menú Móvil */}
        <div style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          backgroundColor: 'var(--background)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border)',
          transition: 'all 0.3s',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          display: isMobileMenuOpen ? 'block' : 'none'
        }}>
          <div className="container mx-auto px-6 py-4">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    color: 'var(--foreground)',
                    textAlign: 'left',
                    padding: '0.75rem 0',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    borderBottom: '1px solid var(--border)'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  marginTop: '0.5rem'
                }}
              >
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
