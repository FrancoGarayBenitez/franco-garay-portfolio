import { Project, Technology, ProjectCategory } from "@/lib/types/global";

export const projects: Project[] = [
  {
    id: "musical-hendrix",
    title: "Musical Hendrix - E-commerce",
    description:
      "Tienda online completa para instrumentos musicales con gestión de inventario, pagos con MercadoPago, sistema de usuarios multi-rol y administración avanzada.",
    image: "/projects/hendrix/hendrix_logo.png", // Imagen principal para el card
    images: {
      // Galería adicional
      thumbnail: "/projects/hendrix/thumbnail.png",
      screenshots: [
        "/projects/hendrix/hendrix_login.png",
        "/projects/hendrix/hendrix_productos.png",
        "/projects/hendrix/hendrix_detalle.png",
        "/projects/hendrix/hendrix_carrito.png",
        "/projects/hendrix/hendrix_pedidos.png",
        "/projects/hendrix/hendrix_pedido_pagado.png",
        "/projects/hendrix/hendrix_admin_instrumentos.png",
        "/projects/hendrix/hendrix_admin_usuarios.png",
        "/projects/hendrix/hendrix_admin_pedidos.png",
      ],
      logo: "/projects/hendrix/hendrix_logo.png", // Si tienes logo
    },
    technologies: [
      { name: "Java 21", color: "#ED8B00" },
      { name: "Spring Boot", color: "#6DB33F" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "MySQL", color: "#4479A1" },
      { name: "MercadoPago API", color: "#009EE3" },
      { name: "Spring Security", color: "#6DB33F" },
      { name: "Vite", color: "#646CFF" },
    ],
    githubUrl: "https://github.com/FrancoGarayBenitez/MusicalHendrix.git",
    liveUrl: "https://musical-hendrix-demo.vercel.app",
    demoVideoUrl: "/projects/hendrix/previewHendrix.mp4", // Ruta correcta del video
    featured: true,
    category: ProjectCategory.FULLSTACK,
    completionDate: "2024-01-15",
    highlights: [
      "Integración completa con MercadoPago (webhooks)",
      "Sistema de autenticación JWT + roles",
      "Gestión de stock en tiempo real",
      "Emails automáticos (SMTP)",
      "API REST documentada con Swagger",
      "Arquitectura limpia (Repository Pattern)",
    ],
  },
  {
    id: "2",
    title: "Task Manager App",
    description:
      "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones push.",
    image: "/projects/task-manager.jpg",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#339933" },
      { name: "Socket.io", color: "#010101" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Tailwind", color: "#06B6D4" },
    ],
    githubUrl: "https://github.com/franco-garay/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    demoVideoUrl: "/videos/taskmanager-demo.mp4",
    featured: true,
    category: ProjectCategory.WEB,
    completionDate: "2024-02-20",
  },
  {
    id: "3",
    title: "Weather App Mobile",
    description:
      "App móvil del clima con geolocalización, pronóstico extendido y notificaciones meteorológicas.",
    image: "/projects/weather-app.jpg",
    technologies: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Expo", color: "#000020" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "AsyncStorage", color: "#FFA500" },
    ],
    githubUrl: "https://github.com/franco-garay/weather-app-native",
    liveUrl: undefined,
    demoVideoUrl: "/videos/weather-app-demo.mp4",
    featured: true,
    category: ProjectCategory.MOBILE,
    completionDate: "2024-03-10",
  },
  {
    id: "4",
    title: "Blog Personal CMS",
    description:
      "Sistema de gestión de contenidos para blog personal con editor markdown y sistema de comentarios.",
    image: "/projects/blog-cms.jpg",
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "MDX", color: "#1B1F24" },
      { name: "Sanity", color: "#F03E2F" },
      { name: "Vercel", color: "#000000" },
    ],
    githubUrl: "https://github.com/franco-garay/blog-cms",
    liveUrl: "https://blog-franco.vercel.app",
    demoVideoUrl: "/videos/blog-demo.mp4",
    featured: false,
    category: ProjectCategory.WEB,
    completionDate: "2023-12-05",
  },
  {
    id: "5",
    title: "Crypto Portfolio Tracker",
    description:
      "Rastreador de portafolio de criptomonedas con gráficos en tiempo real y alertas de precio.",
    image: "/projects/crypto-tracker.jpg",
    technologies: [
      { name: "Vue.js", color: "#4FC08D" },
      { name: "Chart.js", color: "#FF6384" },
      { name: "CoinGecko API", color: "#8DC647" },
      { name: "Firebase", color: "#FFCA28" },
    ],
    githubUrl: "https://github.com/franco-garay/crypto-portfolio",
    liveUrl: "https://crypto-tracker-demo.vercel.app",
    demoVideoUrl: "/videos/crypto-demo.mp4",
    featured: true,
    category: ProjectCategory.WEB,
    completionDate: "2023-11-15",
  },
];
