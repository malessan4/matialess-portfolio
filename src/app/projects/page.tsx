"use client";

import React, { useState, useEffect } from "react";
import { projectsData } from "../../../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Copy, User, Lock, Check } from "lucide-react";
import { useTheme } from 'next-themes';

// --- NUEVO COMPONENTE PARA LAS CREDENCIALES ---
const CredentialBadge = ({ text, type }: { text: string, type: 'user' | 'pass' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black/40 hover:bg-black/60 border border-white/20 rounded text-xs font-mono transition-all group relative mx-1 my-1 cursor-pointer overflow-visible"
        >
            {type === 'user' ? <User className="w-3 h-3 text-blue-400" /> : <Lock className="w-3 h-3 text-yellow-400" />}
            <span className="text-white">{text}</span>
            <div className="ml-1 relative w-3 h-3">
                <AnimatePresence mode="wait">
                    {copied ? (
                        <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <Check className="w-3 h-3 text-green-400" />
                        </motion.div>
                    ) : (
                        <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                </AnimatePresence>
            </div>

            {copied && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -25 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-green-600 text-[10px] text-white px-2 py-0.5 rounded shadow-xl whitespace-nowrap z-50"
                >
                    ¡Copiado!
                </motion.span>
            )}
        </button>
    );
};

// --- FUNCIÓN PARA PROCESAR EL TEXTO ---
const highlightCredentials = (text: string) => {
    const user = "invitado@consulmedic.ar";
    const pass = "invi1234";
    const regex = new RegExp(`(${user}|${pass})`, "g");
    const parts = text.split(regex);

    return parts.map((part, i) => {
        if (part === user) return <CredentialBadge key={i} text={user} type="user" />;
        if (part === pass) return <CredentialBadge key={i} text={pass} type="pass" />;
        return part;
    });
};

const BackgroundParticles = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full animate-float opacity-30"
                style={{
                    width: Math.random() * 50 + 10 + 'px',
                    height: Math.random() * 50 + 10 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    backgroundColor: 'currentColor',
                    animationDelay: Math.random() * 5 + 's',
                    animationDuration: Math.random() * 10 + 10 + 's'
                }}
            />
        ))}
    </div>
);

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function ProjectsPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main
            className={`min-h-screen pt-20 bg-gradient-to-r transition-colors duration-1500 ease-in-out overflow-x-hidden relative
                ${theme === 'light' ? 'from-pink-900 to-purple-950 text-purple-100' : 'from-gray-900 to-green-900 text-green-100'}`}
        >
            <BackgroundParticles />

            <div className="relative z-10 container mx-auto px-4">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className={`text-5xl md:text-7xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r 
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-300'}`}
                >
                    Mis Proyectos
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-lg shadow-lg overflow-hidden flex flex-col group border transition-all duration-500 hover:scale-[1.02]
                            ${theme === 'light' ? 'bg-purple-900/40 border-purple-600/50' : 'bg-slate-800/40 border-slate-500/50'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="overflow-hidden h-48 relative">
                                <img
                                    src={project.imageUrl || 'https://placehold.co/600x400/1e293b/9333ea?text=Proyecto'}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r 
                                    ${theme === 'light' ? 'from-purple-300 to-pink-400' : 'from-green-400 to-green-200'}`}>
                                    {project.title}
                                </h2>

                                {/* --- RENDERIZADO CONDICIONAL DE LA DESCRIPCIÓN --- */}
                                <div className="text-slate-300 text-sm leading-relaxed flex-grow">
                                    {project.title.includes("Consul-medic")
                                        ? highlightCredentials(project.description)
                                        : project.description}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border
                                            ${theme === 'light' ? 'bg-purple-800/50 border-purple-500 text-purple-200' : 'bg-green-900/50 border-green-700 text-green-200'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href={project.link || "#"}
                                        target="_blank"
                                        className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all
                                            ${theme === "light"
                                                ? "bg-pink-700 hover:bg-pink-600 text-white shadow-[0_0_15px_rgba(190,24,93,0.5)]"
                                                : "bg-green-700 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(21,128,61,0.5)]"
                                            }`}
                                    >
                                        Ver proyecto <ExternalLink className="w-4 h-4" />
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