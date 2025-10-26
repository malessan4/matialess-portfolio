import { Project } from "./types";

export const projectsData: Project[] = [
    {
        title: "Landing Page de Folkode",
        description: "Construcción de una landing page para Folkode, un equipo de desarolladores de software. La página presenta información sobre los proyectos que armo el equipo, testimonios de clientes y un formulario de contacto.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        imageUrl: "/images/folkode.png",
        link:"https://folkode.com.ar/"
    },
    {
        title: "Mediapp",
        description: "Creacion de una aplicación web para la gestión de historias médicas. La aplicación permite a un usuario autorizado a crear historias clinicas, chequear estudios y consultas anteriores. Cumpliendo con las normativas de seguridad y privacidad de datos.",
        tags: ["Go","Redis-Server", "React", "TypeScript", "Tailwind CSS"],
        imageUrl: "/images/mediapp.png",
        link:""
    },
    {
        title: "RadioGo",
        description: "Pagina web para una radio online. La página permite a los usuarios escuchar la transmisión en vivo, ver el horario de programas y contactar a la estación.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "IceCast"],
        imageUrl: "/images/radiogo.webp",
        link:"https://www.radiogo.com.ar/"
    },
    {
        title: "DeLorean Parts",
        description: "E-commerce Empresarial de gestión de autopartes",
        tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Express.js", "PostgreSQL"],
        imageUrl: "images/autopartes.webp",
        link:"https://web-autopartes.vercel.app/"
    },
    {
        title: "Congreso de Logista y Transporte UNAB",
        description: "Página oficial del Congreso De Logística y Transporte de la Universidad Nacional Guillermo Brown",
        tags: ["Django", "React", "Tailwind"],
        imageUrl: "images/congreso.webp",
        link:"https://www.congresologistica.unab.edu.ar/"
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
  // ... Agrega más certificados aquí
] as const;