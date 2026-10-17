import { Project, CertificateItem } from "./types";

export const projectsData: Project[] = [
  {
    title: "Consul-medic: Sistema de Gestión Médica",
    titleEn: "Consul-medic: Clinical Management Platform",
    description: "Desarrollo de una plataforma Full Stack para la digitalización integral de consultorios médicos. El sistema gestiona historias clínicas electrónicas, adjunta estudios diagnósticos (imágenes/PDFs) mediante almacenamiento seguro de objetos y genera recetas digitales para impresión. Incluye un dashboard interactivo en tiempo real con métricas clave de pacientes (KPIs) y modelado relacional de datos en PostgreSQL con Prisma ORM y Supabase.",
    descriptionEn: "Full Stack clinical digitalization platform. Features electronic health records (EHR), diagnostic study attachments (images/PDFs) via secure object storage, printable digital prescriptions, and an interactive real-time KPI dashboard for patient metrics with relational SQL modeling in PostgreSQL via Prisma ORM and Supabase.",
    tags: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma ORM", "Real-Time KPI Dashboard", "SQL Modeling", "Docker", "Tailwind CSS"],
    imageUrl: "/images/consul-dashboard.png",
    link: "https://consul-medic.vercel.app/"
  },
  {
    title: "Core Bancario - API de Gestión de Cuentas",
    titleEn: "Core Banking - Account Management System",
    description: "Desarrollo Full Stack de un sistema Core Bancario corporativo centrado en integridad transaccional (ACID) y alta disponibilidad. Backend construido en .NET 9 (C#) con Arquitectura Limpia en capas, Inyección de Dependencias, patrón DTO y Entity Framework Core con SQLite para persistencia y auditoría contable, exponiendo una API RESTful documentada. Frontend interactivo en Next.js (App Router) y TypeScript con diseño glassmorphism, modo oscuro/claro y actualización en tiempo real.",
    descriptionEn: "Corporate Full Stack Core Banking system focused on ACID transactional integrity and high availability. Backend engineered in .NET 9 (C#) with Clean Layered Architecture, Dependency Injection, DTO pattern, and Entity Framework Core with SQLite for account persistence and financial auditing. Interactive Next.js (App Router) frontend with TypeScript, responsive glassmorphism UI, and real-time state synchronization.",
    tags: [".NET 9", "C#", "ASP.NET Core", "Entity Framework", "SQLite", "ACID Transactions", "Next.js", "TypeScript", "Docker"],
    imageUrl: "/images/banco.png",
    link: "https://gestion-cuentas-5y8cupyca-malessan4s-projects.vercel.app/"
  },
  {
    title: "Análisis Estadístico y Visualización con R & ggplot2",
    titleEn: "Statistical Analysis & Data Visualization with R & ggplot2",
    description: "Análisis exploratorio de datos (EDA), limpieza estructurada y visualización estadística avanzada utilizando R y ggplot2. Enfoque en modelado de datos, análisis de correlaciones multivariables, estimación de densidades de probabilidad y detección algorítmica de desvíos y anomalías (outliers) operativas a partir de datasets reales.",
    descriptionEn: "Exploratory Data Analysis (EDA), structured data wrangling, and advanced statistical visualization using R and ggplot2. Focused on relational data modeling, multivariate correlation analysis, probability density distributions, and algorithmic detection of operational outliers from real-world datasets.",
    tags: ["R", "ggplot2", "EDA", "Statistical Analysis", "Data Modeling", "Outlier Detection", "Data Cleaning"],
    imageUrl: "/images/r-analytics.svg",
    link: "https://github.com/malessan4"
  },
  {
    title: "Nido - Organizador Familiar PWA",
    titleEn: "Nido - Family Organizer PWA",
    description: "Plataforma integral (PWA) para la coordinación y gestión operativa de tareas del hogar. Cuenta con tablero Kanban interactivo (Drag & Drop), calendario sincronizado y chat en tiempo real. Backend ultrarrápido y de bajo consumo de recursos (~20MB RAM) construido en Go (Golang) con Gin y GORM. Incluye sistema automatizado de notificaciones Web Push nativas gestionado mediante CRON Jobs concurrentes en Go y Service Workers.",
    descriptionEn: "Comprehensive Progressive Web App (PWA) for household task coordination and scheduling. Features interactive Kanban board (Drag & Drop), calendar, and real-time chat. Ultra-lightweight backend (~20MB RAM) built in Go (Golang) with Gin and GORM. Includes automated native Web Push notifications orchestrated via concurrent Go CRON Jobs and Service Workers.",
    tags: ["Next.js", "Go (Golang)", "Gin", "GORM", "PostgreSQL", "PWA", "Web Push API", "Tailwind CSS"],
    imageUrl: "/images/nido.png",
    link: "https://nido-three-omega.vercel.app/"
  },
  {
    title: "Inmobiout - Plataforma Inmobiliaria",
    titleEn: "Inmobiout - Real Estate Platform",
    description: "Plataforma integral de gestión y catálogo de propiedades inmobiliarias. Desarrollada con Next.js (App Router), Tailwind CSS y Supabase (PostgreSQL + Auth). Dispone de portal público con filtros de búsqueda multidimensionales y exportación dinámica de fichas técnicas en PDF, junto a un panel de administración privado (Dashboard con KPIs) para control de inventario, auditoría de leads y métricas en tiempo real.",
    descriptionEn: "End-to-end real estate inventory and catalog platform built with Next.js (App Router), Tailwind CSS, and Supabase (PostgreSQL + Auth). Features a public portal with multidimensional search filters and dynamic PDF generation, plus a private admin dashboard with real-time KPIs for inventory management and lead conversion analytics.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Real-Time KPI Dashboard", "SQL Modeling"],
    imageUrl: "images/inmobiout.png",
    link: "https://inmobi-liard.vercel.app/propiedades"
  },
  {
    title: "Racha+ - Hábitos & Suscripciones",
    titleEn: "Racha+ - Habit Tracker & Subscriptions",
    description: "Plataforma inteligente de seguimiento y análisis de hábitos diarios. Con un modelo de monetización SaaS (Racha+ Pro), integra de forma segura Webhooks de Mercado Pago para la conciliación automática de estados de pago, ciclo de vida de suscripciones y transacciones seguras (ACID) en PostgreSQL a través de Prisma ORM.",
    descriptionEn: "Intelligent daily habit analytics and consistency platform. Features a SaaS subscription model (Racha+ Pro) with secure Mercado Pago Webhooks for automated payment reconciliation, subscription lifecycle events, and ACID-compliant transactional persistence in PostgreSQL via Prisma ORM.",
    tags: ["Next.js (App Router)", "Prisma ORM", "PostgreSQL", "Mercado Pago Webhooks", "Payment Reconciliation", "ACID Transactions"],
    imageUrl: "images/rachaplus.png",
    link: "https://gestor-habitos-pendientes.vercel.app/auth"
  },
  {
    title: "Jamtime - Coordinador de Horarios",
    titleEn: "Jamtime - Schedule Availability Matcher",
    description: "Herramienta colaborativa orientada a optimizar la coordinación horaria de grupos de trabajo y bandas musicales. A través de un calendario interactivo en cuadrícula, calcula en tiempo real las intersecciones de disponibilidad de múltiples participantes compartiendo un código de sala seguro.",
    descriptionEn: "Collaborative scheduling platform designed to optimize availability matching for work teams and music bands. Using an interactive grid calendar, it calculates multi-user availability intersections in real time via secure room invite codes.",
    tags: ["Next.js", "React", "Tailwind CSS", "Server Actions", "Prisma ORM", "PostgreSQL"],
    imageUrl: "images/jamtime.png",
    link: "https://jamtime-liart.vercel.app/"
  },
  {
    title: "Bella Boutique - E-Commerce Premium",
    titleEn: "Bella Boutique - Premium E-Commerce",
    description: "E-commerce de diseño exclusivo con frontend reactivo en Vue.js (Vite) y CSS Vanilla puro. Backend de alto rendimiento programado en Go (Golang) con Gin y GORM sobre base de datos relacional PostgreSQL. Panel de control (CMS) protegido por JWT para la gestión en tiempo real de inventario, stock, variantes y precios.",
    descriptionEn: "Bespoke e-commerce platform built with Vue.js (Vite) and pure Vanilla CSS. High-throughput backend built with Go (Golang), Gin, and GORM backed by PostgreSQL. Includes a JWT-protected administration dashboard for real-time inventory tracking, variant pricing, and stock reconciliation.",
    tags: ["Vue.js", "Go (Golang)", "Gin", "GORM", "PostgreSQL", "E-Commerce", "Inventory Management"],
    imageUrl: "/images/bella.png",
    link: "https://bellaboutique-azure.vercel.app/"
  },
  {
    title: "Nido - Organizador Familiar (Spring Boot)",
    titleEn: "Nido - Family Organizer (Spring Boot)",
    description: "Plataforma de organización familiar desarrollada con una arquitectura desacoplada: backend robusto en Java con Spring Boot, Spring Security y autenticación stateless mediante JWT. Frontend en Next.js con Tailwind CSS y Framer Motion con persistencia de eventos y tareas en PostgreSQL.",
    descriptionEn: "Family task management platform built with decoupled architecture: robust Java backend with Spring Boot, Spring Security, and stateless JWT authentication. Next.js frontend with Tailwind CSS, Framer Motion, and relational PostgreSQL persistence.",
    tags: ["Next.js", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/images/nido.png",
    link: "https://family-organizer-nine.vercel.app/"
  },
  {
    title: "Congreso de Logística y Transporte UNAB",
    titleEn: "UNAB Logistics & Transport Congress",
    description: "Sitio web oficial del Congreso de Logística y Transporte de la Universidad Nacional Guillermo Brown. Presentación de cronograma de actividades, paneles académicos, disertantes y formulario de acreditación de participantes.",
    descriptionEn: "Official website for the Logistics and Transport Congress at Universidad Nacional Guillermo Brown. Features conference agenda, keynote speaker bios, and participant accreditation forms.",
    tags: ["Django", "React", "Tailwind CSS", "Python"],
    imageUrl: "images/congreso.png",
    link: "https://www.congresologistica.unab.edu.ar/"
  },
  {
    title: "RadioGo - Streaming Online",
    titleEn: "RadioGo - Online Audio Streaming",
    description: "Portal web para emisora de radio con transmisión de audio en vivo de baja latencia mediante protocolo IceCast, programación diaria dinámica y canal de interacción con oyentes.",
    descriptionEn: "Online web radio portal featuring live low-latency audio streaming via IceCast protocol, dynamic program scheduling, and interactive listener contact channels.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "IceCast"],
    imageUrl: "/images/radiogo.webp",
    link: "https://www.radiogo.com.ar/"
  },
  {
    title: "Landing Page de Folkode",
    titleEn: "Folkode - Corporate Software Landing",
    description: "Página institucional para equipo de desarrollo de software Folkode. Presentación de portfolio comercial, casos de éxito, testimonios de clientes y canal directo de captación de prospectos.",
    descriptionEn: "Corporate landing page for software development team Folkode. Showcases project portfolio, client success stories, customer reviews, and direct lead generation contact channels.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    imageUrl: "/images/folkode.png",
    link: "https://folkode.com.ar/"
  },
];

export const certificatesData: CertificateItem[] = [
  {
    title: "Javascript / Node.js",
    titleEn: "Javascript & Node.js Backend Development",
    issuer: "Codo a Codo 4.0",
    date: "2024",
    fileUrl: "/certificates/node.js.pdf",
  },
  {
    title: "Fullstack Java",
    titleEn: "Full Stack Java Development",
    issuer: "Codo a Codo 4.0",
    date: "2023-2024",
    fileUrl: "/certificates/java.pdf",
  },

  {
    title: "Desarrollo con IA",
    titleEn: "AI Development",
    issuer: "Big School",
    date: "2026",
    fileUrl: "/certificates/Certificado-Matias-Daniel-Alessandrello-jva8cdbv.pdf",
  },

  {
    title: "Inmersión Agentes de IA en la práctica",
    titleEn: "Practical AI Agents Immersion",
    issuer: "Daxus Latam",
    date: "2026",
    fileUrl: "/certificates/Certificado-Daxus.pdf",
  },


  {
    title: "Base de Datos SQL",
    titleEn: "Relational SQL Databases",
    issuer: "Universidad Nacional Guillermo Brown",
    date: "2024",
    fileUrl: "/certificates/SQL.pdf",
  },
  {
    title: "Programación con JavaScript",
    titleEn: "JavaScript Programming",
    issuer: "Fundación Telefónica Movistar",
    date: "2023",
    fileUrl: "/certificates/telefonica-javascript.pdf",
  },
  {
    title: "Diseño Web con HTML5 y CSS",
    titleEn: "Web Design with HTML5 & CSS",
    issuer: "Fundación Telefónica Movistar",
    date: "2023",
    fileUrl: "/certificates/telefonica-web.pdf",
  },
];