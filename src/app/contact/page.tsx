"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

// --- MEJORA: Página de contacto completamente rediseñada ---
// En lugar de un formulario (que necesita un backend), proveemos formas de contacto directas y profesionales.
export default function ContactPage() {
    const contactMethods = [
        {
            icon: <Mail className="w-10 h-10 text-purple-400" />,
            title: 'Email',
            content: 'matialess@gmail.com',
            href: 'mailto:matialess@gmail.com',
        },
        {
            icon: <Linkedin className="w-10 h-10 text-purple-400" />,
            title: 'LinkedIn',
            content: 'matias-daniel-alessandrello',
            href: 'https://www.linkedin.com/in/matias-alessandrello', // Reemplazar con tu URL real
        },
        {
            icon: <Github className="w-10 h-10 text-purple-400" />,
            title: 'GitHub',
            content: 'malessan4',
            href: 'https://github.com/malessan4', // Reemplazar con tu URL real
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-4">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Hablemos
                    </h1>
                    <p className="text-lg md:text-xl text-purple-200 mb-12">
                        Estoy disponible para nuevos proyectos y colaboraciones. <br /> No dudes en contactarme.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Link href={method.href} target="_blank" rel="noopener noreferrer" className="block p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-purple-500 transition-all duration-300 h-full">
                                <div className="flex justify-center mb-4">
                                    {method.icon}
                                </div>
                                <h2 className="text-2xl font-bold mb-2">{method.title}</h2>
                                <p className="text-purple-300 break-all">{method.content}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
