import { Project } from "./types";

export const projectsData: Project[] = [
    {
        title: "Landing Page de Folkode",
        description: "Construcción de una landing page para Folkode, un equipo de desarolladores de software. La página presenta información sobre los proyectos que armo el equipo, testimonios de clientes y un formulario de contacto.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
        title: "Mediapp",
        description: "Creacion de una aplicación web para la gestión de historias médicas. La aplicación permite a un usuario autorizado a crear historias clinicas, chequear estudios y consultas anteriores. Cumpliendo con las normativas de seguridad y privacidad de datos.",
        tags: ["Go","Redis-Server", "React", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "RadioGo",
        description: "Pagina web para una radio online. La página permite a los usuarios escuchar la transmisión en vivo, ver el horario de programas y contactar a la estación.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "IceCast"]
    }
];

export const certificatesData = [
  {
    title: "React - La Guía Completa",
    issuer: "Udemy",
    date: "2023",
    fileUrl: "/certificates/react-completo.pdf", // Ruta desde la carpeta public
  },
  {
    title: "Node.js, Express, MongoDB & More",
    issuer: "Udemy",
    date: "2023",
    fileUrl: "/certificates/node-express-mongo.pdf",
  },
  {
    title: "TypeScript: The Complete Developer's Guide",
    issuer: "Udemy",
    date: "2024",
    fileUrl: "/certificates/typescript-completo.pdf",
  },
  // ... Agrega más certificados aquí
] as const;