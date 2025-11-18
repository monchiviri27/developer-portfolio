import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Github, ChevronLeft } from "lucide-react";

// =========================================================================
// ⚠️ IMPORTANTE: REEMPLAZA ESTOS DATOS CON LA INFORMACIÓN DETALLADA DE TUS PROYECTOS
// =========================================================================

// NOTA: En un proyecto real y grande, estos datos se importarían desde un archivo JSON o una base de datos.
// Para mantener el SSG simple, replicamos los datos aquí.
const projectData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con React, Node.js y Stripe para pagos.",
    image: "/modern-ecommerce-website-interface--clean-design.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/monchiviri27",
    // CAMPOS PARA EL ESTUDIO DE CASO (¡DEBES PERSONALIZAR ESTO!)
    problem: "El objetivo era construir una solución de e-commerce robusta y escalable que pudiera manejar un alto volumen de transacciones y personalizar la experiencia del usuario.",
    solution: "Implementé una arquitectura de microservicios utilizando Node.js para el backend y MongoDB para la base de datos de productos. El frontend fue desarrollado con React y la pasarela de pagos se integró completamente con Stripe para la seguridad.",
    challenges: ["Optimización de la velocidad de carga de imágenes para el catálogo.", "Implementación de un sistema de gestión de inventario en tiempo real."],
  },
  {
    id: 2,
    title: "Portafolio De Maquillaje",
    description: "Este es un portafolio digital de alta velocidad para Luxury Makeup, maquillaje profesional.",
    image: "/lurury-makeup.png", // Asegúrate de que la ruta de la imagen sea correcta (con / al inicio si está en public)
    technologies: ["Astro", "TypeScript", "Markdown", "Tailwind"],
    liveUrl: "https://maquillaje-portfolio.vercel.app/",
    githubUrl: "https://github.com/monchiviri27",
    // CAMPOS PARA EL ESTUDIO DE CASO (¡DEBES PERSONALIZAR ESTO!)
    problem: "La clienta necesitaba una web ultrarrápida para mostrar su trabajo visual sin tiempos de carga y mejorar su SEO.",
    solution: "Usé Astro para generar un sitio estático con una baja huella de JavaScript para máxima velocidad. La UI fue diseñada con un enfoque mobile-first usando Tailwind CSS.",
    challenges: ["Adaptar un diseño visual complejo a un entorno SSG.", "Optimización de más de 100 imágenes en alta resolución para el portafolio."],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Este es un portafolio digital de alta velocidad para Luxury Makeup, maquillaje profesional.",
    image: "/lurury-makeup.png", // Asegúrate de que la ruta de la imagen sea correcta (con / al inicio si está en public)
    technologies: ["Astro", "TypeScript", "Markdown", "Tailwind"],
    liveUrl: "https://maquillaje-portfolio.vercel.app/",
    githubUrl: "https://github.com/monchiviri27",
    // CAMPOS PARA EL ESTUDIO DE CASO (¡DEBES PERSONALIZAR ESTO!)
    problem: "La clienta necesitaba una web ultrarrápida para mostrar su trabajo visual sin tiempos de carga y mejorar su SEO.",
    solution: "Usé Astro para generar un sitio estático con una baja huella de JavaScript para máxima velocidad. La UI fue diseñada con un enfoque mobile-first usando Tailwind CSS.",
    challenges: ["Adaptar un diseño visual complejo a un entorno SSG.", "Optimización de más de 100 imágenes en alta resolución para el portafolio."],
  },
  {
    id: 4,
    title: "Pool Tournament Manager",
    description: "Este es un portafolio digital de alta velocidad para Luxury Makeup, maquillaje profesional.",
    image: "/pool-tournament-manager.png", // Asegúrate de que la ruta de la imagen sea correcta (con / al inicio si está en public)
    technologies: ["Astro", "TypeScript", "Markdown", "Tailwind"],
    liveUrl: "https://pool-tournament-manager.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/pool-tournament-manager",
    // CAMPOS PARA EL ESTUDIO DE CASO (¡DEBES PERSONALIZAR ESTO!)
    "problem": "Los torneos de deportes de mesa a menudo dependen de pizarras físicas o soluciones lentas para registrar resultados. Se requería una herramienta digital que pudiera mostrar la clasificación en tiempo real con una velocidad de carga instantánea y gran usabilidad.",
    
    "solution": "Utilicé **Next.js** en modo de **Generación Estática (SSG)** para renderizar la estructura del torneo y los datos iniciales rápidamente. La gestión de la lógica del torneo (actualización de puntuaciones, clasificación) se realiza con **TypeScript** en el lado del cliente, asegurando la robustez de los datos y una interacción sin recargas de página. El diseño fue desarrollado con **Tailwind CSS** para una UI limpia y adaptable.",
    
    "challenges": [
        "**Lógica de Clasificación Compleja:** Implementar un algoritmo robusto en TypeScript para manejar la lógica de desempates, rondas y ascensos/descensos en la clasificación del torneo de manera precisa en el navegador.",
        "**Persistencia de Datos Estáticos:** Estructurar los datos del torneo (equipos, historial) utilizando archivos JSON o Markdown (simulando una base de datos) que Next.js pudiera pre-renderizar eficientemente.",
        "**Experiencia de Usuario (UX) de Entrada de Datos:** Diseñar una interfaz intuitiva para que los administradores puedan actualizar rápidamente los resultados de los partidos sin fricciones."
    ]
  },
  {
    id: 5,
    title: "Blog NFL",
    description: "Plataforma de contenido deportivo diseñada para la máxima velocidad de carga y optimización SEO, construida con las mejores prácticas de Next.js.",
    image: "/nfl-blog.png",
    technologies: ["Next.js", "TypeScript", "Markdown", "Tailwind"],
    liveUrl: "https://blog-nfl.vercel.app/",
    githubUrl: "https://github.com/monchiviri27/blog-nfl",
    // CAMPOS PARA EL ESTUDIO DE CASO (¡DEBES PERSONALIZAR ESTO!)
    "problem": "La meta era crear una plataforma de publicación de noticias deportivas que superara los problemas de lentitud de los CMS tradicionales. Se requería una solución con tiempos de carga instantáneos para mejorar la experiencia del usuario y escalar en el ranking de SEO.",
    
    "solution": "Utilicé **Next.js** para aprovechar la **Generación Estática de Sitios (SSG)**, compilando el contenido escrito en **Markdown** a HTML puro en el tiempo de construcción. Esto resulta en un sitio web que se sirve directamente desde la CDN de Vercel, ofreciendo un rendimiento inigualable y una experiencia de usuario fluida. El diseño responsivo fue gestionado con **Tailwind CSS**.",
    
    "challenges": [
        "**Tipado y Seguridad (TypeScript):** Implementar TypeScript en toda la base de código para garantizar la robustez, reducir errores de *runtime* y mejorar la experiencia de desarrollo al manejar datos.",
        "**Manejo de Contenido Estático:** Diseñar un sistema de enrutamiento dinámico en Next.js para leer y renderizar eficientemente los archivos Markdown como páginas individuales y listas de blog (posts/categories).",
        "**Optimización para Core Web Vitals:** Enfocarse en métricas clave de Google (LCP, CLS, FID) a través de la optimización de activos y el rendimiento del renderizado de Next.js."
    ]
  },
  {
    "id": 6,
    "title": "Blog NBA",
    "description": "Un blog moderno y ultra-rápido diseñado para la publicación de contenido deportivo con un enfoque en el rendimiento (SEO y velocidad de carga).",
    "image": "/nba-blog.png",
    "technologies": ["Astro", "TypeScript", "Markdown", "Tailwind"],
    "liveUrl": "https://monchiviri27.github.io/nba-blog/",
    "githubUrl": "https://github.com/monchiviri27/nba-blog",
    
    // =======================================================
    // DOCUMENTACIÓN DEL ESTUDIO DE CASO (Para tu page.tsx)
    // =======================================================
    
    "problem": "El desafío era crear una plataforma de publicación de noticias deportivas que fuera **extremadamente rápida** y **altamente optimizada para SEO** (Search Engine Optimization), lo cual es crítico en el nicho de blogs de alto tráfico. Los blogs tradicionales basados en CMS lentos estaban perdiendo posicionamiento.",
    
    "solution": "Implementé una solución de **Generación de Sitios Estáticos (SSG)** usando **Astro** y **TypeScript**. La arquitectura desacopla el contenido (escrito en Markdown) de la presentación. Esto permite que el sitio se sirva casi completamente como HTML plano, eliminando el JavaScript innecesario en producción y logrando tiempos de carga inferiores a 1 segundo.",
    
    "challenges": [
        "**Gestión de Contenido Escalable:** Diseñar una estructura basada en Markdown que sea fácil de mantener y escalar para cientos de artículos sin recurrir a una base de datos compleja.",
        "**Optimización de Imágenes:** Implementar técnicas de carga perezosa (*lazy loading*) y compresión de imágenes para mantener la velocidad de la página a pesar del contenido visual pesado (tablas, estadísticas, fotos).",
        "**Tipado Fuerte (TypeScript):** Asegurar la integridad del código en todas las plantillas y componentes de la UI para minimizar errores en la etapa de compilación y mejorar la mantenibilidad a largo plazo."
    ]
}
];

// Función auxiliar para crear un slug simple a partir del título
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();
};

// Mapea los proyectos para incluir el slug necesario para la navegación
const projects = projectData.map(project => ({
    ...project,
    slug: createSlug(project.title)
}));

// Genera los parámetros estáticos (SSG) en tiempo de construcción
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Interfaz para definir la estructura de los parámetros de la ruta
interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Buscar el proyecto que coincide con el slug en la URL
  const project = projects.find((p) => p.slug === params.slug);

  // Si no se encuentra el proyecto (ej: URL incorrecta), mostrar la página 404
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 lg:pt-24 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto mb-10">
          
          {/* BOTÓN DE VOLVER */}
          <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 font-medium"
          >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al Portafolio
          </Link>
          
          {/* Título y Resumen del Proyecto */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Imagen del Proyecto */}
        <div className="max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl border border-border">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`Captura de ${project.title}`}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Enlaces y Tecnologías */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary font-semibold rounded-full border border-primary/20"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center font-medium">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Ver en Vivo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center font-medium">
                    <Github className="h-5 w-5 mr-2" />
                    Código
                </a>
            </div>
        </div>


        {/* Sección del Estudio de Caso */}
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* 1. El Problema que se Buscaba Resolver */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">
              El Problema
            </h2>
            <p className="text-lg text-muted-foreground">
              {project.problem || "Detalla el desafío o la necesidad que impulsó la creación de este proyecto."}
            </p>
          </section>

          {/* 2. La Solución Implementada */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">
              Mi Solución
            </h2>
            <p className="text-lg text-muted-foreground">
              {project.solution || "Describe la arquitectura, las tecnologías y el enfoque que utilizaste para resolver el problema."}
            </p>
          </section>

          {/* 3. Desafíos Técnicos y Aprendizaje */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">
              Desafíos Técnicos
            </h2>
            <ul className="space-y-3 text-lg text-muted-foreground list-disc pl-5">
              {(project.challenges || ["Menciona desafíos técnicos específicos y cómo los superaste"]).map((challenge, index) => (
                <li key={index} className="pl-2">{challenge}</li>
              ))}
            </ul>
          </section>
          
        </div>
      </div>
    </div>
  )
}