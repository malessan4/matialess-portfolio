import { Project } from "./types";

export const projectsData: Project[] = [

  {
    title: "Consul-medic: Sistema de Gestión Médica",
    description: "Desarrollo de una plataforma Full Stack para la digitalización de consultorios médicos. El sistema gestiona historias clínicas, adjunta estudios médicos (imágenes/PDFs) mediante almacenamiento de objetos y genera recetas digitales listas para imprimir. Incluye un dashboard interactivo para métricas de pacientes.",
    tags: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "Docker", "Tailwind CSS"],
    imageUrl: "/images/consul-dashboard.png",
    link: "https://consul-medic.vercel.app/"
  },

  {
    title: "Nido - Organizador Familiar PWA",
    description: "Plataforma integral (PWA) diseñada para la organización del núcleo familiar. Cuenta con Kanban interactivo (Drag & Drop), calendario y chat en tiempo real. Para optimizar el consumo de recursos en servidores de bajos recursos, el backend fue reescrito completamente de cero en Go (Golang) utilizando Gin y GORM, logrando un consumo de RAM ultra ligero (~20MB). Incluye un sistema de Notificaciones Web Push nativas gestionado mediante un CRON Job en Go y Service Workers en el frontend para alertar sobre tareas vencidas y nuevos mensajes. El frontend está desarrollado en Next.js con Tailwind CSS, ofreciendo un diseño 'glassmorphism' totalmente responsivo e instalable en dispositivos móviles.",
    tags: ["Next.js", "Go (Golang)", "Gin", "GORM", "PostgreSQL", "PWA", "Web Push API", "Tailwind CSS"],
    imageUrl: "/images/nido.png",
    link: "https://nido-three-omega.vercel.app/"
  },

  {
    title: "Inmobiout",
    description: "Inmobiout - Plataforma Inmobiliaria Full-Stack Plataforma integral de gestión y visualización de propiedades inmobiliarias diseñada para conectar agencias con clientes potenciales. Desarrollada con Next.js (App Router), Tailwind CSS y Supabase (PostgreSQL + Auth). Cuenta con dos experiencias diferenciadas: un portal público interactivo con filtros de búsqueda avanzados, modo oscuro/claro y generación dinámica de fichas técnicas en PDF; y un panel de administración privado (Dashboard) protegido por roles de usuario, que permite a las agencias gestionar su inventario de propiedades, visualizar métricas en tiempo real y administrar los prospectos (leads) captados a través de los formularios de contacto integrados.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase (PostgreSQL + Auth"],
    imageUrl: "images/inmobiout.png",
    link: "https://inmobi-liard.vercel.app/propiedades"
  },
  {
    title: "Racha+",
    description: "Racha+ es una plataforma inteligente de gestión de hábitos diseñada para ayudarte a construir consistencia y alcanzar tus metas. A través de un sistema de seguimiento visual y motivador, los usuarios pueden registrar sus rutinas diarias, mantener rachas (streaks) y visualizar su progreso a lo largo del tiempo. Con un enfoque en la simplicidad y la retención, la aplicación ofrece una experiencia gratuita sólida, y cuenta con un modelo de suscripción premium (Racha+ Pro) que desbloquea funciones analíticas avanzadas, integrado de forma segura con Mercado Pago.",
    tags: ["Next.js (App Router)", "Tailwind CSS", "react-big-calendar", "Server Actions de Next.js", "Prisma ORM", "PostgreSQL"],
    imageUrl: "images/rachaplus.png",
    link: "https://gestor-habitos-pendientes.vercel.app/auth"
  },
  {
    title: "Jamtime",
    description: "JamTime es una aplicación web diseñada para resolver uno de los mayores problemas de las bandas de música y los grupos de trabajo: encontrar un horario en el que todos estén disponibles. A través de un calendario interactivo y visual, los usuarios pueden crear salas, compartir un código de acceso y pintar sus bloques de disponibilidad, permitiendo visualizar al instante las franjas horarias donde todos coinciden.",
    tags: ["Next.js", "React", "Tailwind CSS", "Server Actions de Next.js", "Prisma ORM", "PostgreSQL"],
    imageUrl: "images/jamtime.png",
    link: "https://jamtime-liart.vercel.app/"
  },
  {
    title: "Bella Boutique - E-Commerce Premium",
    description: "Plataforma de comercio electrónico a medida, diseñada con un enfoque estético premium 'dark rose gold'. El frontend fue desarrollado en Vue.js (Vite), utilizando CSS Vanilla puro para lograr un control milimétrico sobre las micro-animaciones y efectos de 'glassmorphism' sin depender de frameworks pesados. El backend, robusto y ultrarrápido, está construido en Go (Golang) con Gin y GORM. Incluye un panel administrativo (CMS) personalizado y protegido por JWT para la gestión integral del inventario, permitiendo administrar productos, precios de oferta, stock y la vinculación dinámica de imágenes según las variantes de color elegidas por el cliente. Todo respaldado por una base de datos PostgreSQL.",
    tags: ["Vue.js", "Vite", "Go (Golang)", "Gin", "GORM", "PostgreSQL", "Vanilla CSS", "E-Commerce"],
    imageUrl: "/images/bellaboutique.png",
    link: "https://bellaboutique-azure.vercel.app/"
  },
  {
    title: "Nido - Organizador Familiar Full Stack",
    description: "Nido es una plataforma integral diseñada para facilitar la organización y comunicación dentro del núcleo familiar. Cuenta con un tablero Kanban interactivo (Drag & Drop) para el seguimiento de tareas, un calendario sincronizado para eventos y un sistema de chat integrado. Desarrollada con una arquitectura cliente-servidor robusta: el backend fue construido con Java y Spring Boot utilizando Spring Security y JWT para una autenticación sin estado (stateless), mientras que el frontend está desarrollado en Next.js con Tailwind CSS, ofreciendo una experiencia fluida, modo oscuro dinámico (glassmorphism) y total responsividad.",
    tags: ["Next.js", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/nido.png",
    link: "https://family-organizer-nine.vercel.app/"
  },
  {
    title: "Congreso de Logista y Transporte UNAB",
    description: "Página oficial del Congreso De Logística y Transporte de la Universidad Nacional Guillermo Brown",
    tags: ["Django", "React", "Tailwind"],
    imageUrl: "images/congreso.png",
    link: "https://www.congresologistica.unab.edu.ar/"
  },
  {
    title: "RadioGo",
    description: "Pagina web para una radio online. La página permite a los usuarios escuchar la transmisión en vivo, ver el horario de programas y contactar a la estación.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "IceCast"],
    imageUrl: "/images/radiogo.webp",
    link: "https://www.radiogo.com.ar/"
  },
  {
    title: "Landing Page de Folkode",
    description: "Construcción de una landing page para Folkode, un equipo de desarolladores de software. La página presenta información sobre los proyectos que armo el equipo, testimonios de clientes y un formulario de contacto.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    imageUrl: "/images/folkode.png",
    link: "https://folkode.com.ar/"
  },
];

export const certificatesData = [
  {
    title: "Javascript / Node.js",
    issuer: "Codo a Codo 4.0",
    date: "2024",
    fileUrl: "/certificates/node.js.pdf",
  },
  {
    title: "Fullstack Java",
    issuer: "Codo a Codo 4.0",
    date: "2023-2024",
    fileUrl: "/certificates/java.pdf",
  },
  {
    title: "Base de Datos SQL",
    issuer: "Universidad Nacional Guillermo Brown",
    date: "2024",
    fileUrl: "/certificates/SQL.pdf",
  },
  {
    title: "Programación con JavaScript",
    issuer: "Fundación Telefónica Movistar",
    date: "2023",
    fileUrl: "/certificates/telefonica-javascript.pdf",
  },
  {
    title: "Diseño Web con HTML5 y CSS",
    issuer: "Fundación Telefónica Movistar",
    date: "2023",
    fileUrl: "/certificates/telefonica-web.pdf",
  },
  // ... Agrega más certificados aquí
] as const;