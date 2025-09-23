import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Componente temporal para asegurar contraste
function ContrastWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh'
    }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <ContrastWrapper>
      <Header />
      <main style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        paddingTop: '80px' // Para compensar el header fixed
      }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </ContrastWrapper>
  )
}

