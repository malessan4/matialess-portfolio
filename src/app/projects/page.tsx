"use client";

import React from "react";
import { projectsData } from "../../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react"; // Un ícono para los enlaces externos

export default function ProjectsPage() {
    // --- MEJORA: Simplificado. El `dynamic import` no era necesario.
    // "use client" al principio del archivo es suficiente para que framer-motion funcione correctamente.

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Mis Proyectos
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden flex flex-col group border border-slate-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* --- MEJORA: Añadida imagen de proyecto --- */}
                            <div className="overflow-hidden h-48">
                                <img
                                    src={project.imageUrl || 'https://placehold.co/600x400/1e293b/9333ea?text=Proyecto'}
                                    alt={`Imagen del proyecto ${project.title}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-semibold text-purple-300">{project.title}</h2>
                                <p className="mt-2 text-slate-300 flex-grow">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        // --- MEJORA: Colores de tags que coinciden con el tema ---
                                        <span key={tagIndex} className="bg-purple-900/70 text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* --- MEJORA: Añadido un link al proyecto --- */}
                                <div className="mt-6">
                                    <Link href={project.link || "#"} target="_blank" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
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
