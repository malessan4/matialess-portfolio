"use client";

import React from "react";
import { projectsData } from "../../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react"; // Un ícono para los enlaces externos
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';


const BackgroundParticles = () => (
    <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                    width: Math.random() * 50 + 10 + 'px',
                    height: Math.random() * 50 + 10 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 5 + 's',
                    animationDuration: Math.random() * 10 + 10 + 's'
                }}
            />
        ))}
    </div>
);

// Animaciones
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


export default function ProjectsPage() {
    const { theme } = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <main
            className={`min-h-screen pt-20 bg-gradient-to-r 
                 transition-colors duration-1500 ease-in-out
                 ${theme === 'light'
                    ? 'from-pink-900 to-purple-950'
                    : 'from-gray-900 to-green-900'
                }`}
        >
            <BackgroundParticles />


            <div className="relative z-10 container mx-auto px-4">
                <motion.h1
                    className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
                    transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-300'}`}
                    variants={itemVariants}
                >
                    Mis Proyectos
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-lg shadow-lg overflow-hidden flex flex-col group border transition-colors duration-1500
                            ${theme === 'light'
                                    ? 'bg-purple-900 border-slate-600'
                                    : 'bg-slate-800 border-slate-700'
                                }
                            `}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* --- MEJORA: Añadida imagen de proyecto --- */}
                            <div className="overflow-hidden h-48">
                                <img
                                    src={project.imageUrl || 'https://placehold.co/600x400/1e293b/9333ea?text=Proyectooo'}
                                    alt={`Imagen del proyecto ${project.title}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <motion.h2
                                    className={`text-2xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
                    transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-200'}`}
                                >{project.title}</motion.h2>

                                <p className="mt-2 text-slate-300 flex-grow">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`transition-colors duration-1500
                            ${theme === 'light'
                                                ? 'bg-violet-700 border-slate-600'
                                                : 'bg-slate-900 border-slate-600'
                                            }text-xs font-medium px-2.5 py-1 rounded-full`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* --- MEJORA: Añadido un link al proyecto --- */}
                                <div className="mt-6">
                                    <Link
                                        href={project.link || "#"}
                                        target="_blank"
                                        className={`text-xl font-medium px-2.5 py-1 rounded-2xl inline-flex items-center transition-colors duration-400 
                                                ${theme === "light"
                                                ? // Clases para MODO LIGHT
                                                "bg-pink-900 border-slate-600 hover:bg-purple-600 hover:text-purple-300"
                                                : // Clases para MODO DARK
                                                "bg-green-800  hover:bg-green-500 hover:text-slate-700"
                                            }rounded-full`}>
                                        Ver proyecto <ExternalLink className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
