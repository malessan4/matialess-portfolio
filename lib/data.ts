import { Project } from "./types";

export const projectsData: Project[] = [
  {
    title: "Landing Page de Folkode",
    description: "Construcción de una landing page para Folkode, un equipo de desarolladores de software. La página presenta información sobre los proyectos que armo el equipo, testimonios de clientes y un formulario de contacto.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    imageUrl: "/images/folkode.png",
    link: "https://folkode.com.ar/"
  },
  {
    title: "Consul-medic: Sistema de Gestión Pediátrica",
    description: "Desarrollo de una plataforma Full Stack para la digitalización de consultorios médicos. El sistema gestiona historias clínicas, adjunta estudios médicos (imágenes/PDFs) mediante almacenamiento de objetos y genera recetas digitales listas para imprimir. Incluye un dashboard interactivo para métricas de pacientes.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
    imageUrl: "/images/consul-medic.jpeg",
    link: ""
  },
  {
    title: "RadioGo",
    description: "Pagina web para una radio online. La página permite a los usuarios escuchar la transmisión en vivo, ver el horario de programas y contactar a la estación.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "IceCast"],
    imageUrl: "/images/radiogo.webp",
    link: "https://www.radiogo.com.ar/"
  },
  {
    title: "DeLorean Parts",
    description: "E-commerce Empresarial de gestión de autopartes",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Express.js", "PostgreSQL"],
    imageUrl: "images/autopartes.webp",
    link: "https://web-autopartes.vercel.app/"
  },
  {
    title: "Congreso de Logista y Transporte UNAB",
    description: "Página oficial del Congreso De Logística y Transporte de la Universidad Nacional Guillermo Brown",
    tags: ["Django", "React", "Tailwind"],
    imageUrl: "images/congreso.png",
    link: "https://www.congresologistica.unab.edu.ar/"
  }

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