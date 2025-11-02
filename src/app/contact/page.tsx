"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const BackgroundParticles = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
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


// --- MEJORA: Página de contacto completamente rediseñada ---
// En lugar de un formulario (que necesita un backend), proveemos formas de contacto directas y profesionales.
export default function ContactPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }


    const contactMethods = [
        {
            icon: <Mail className={`w-10 h-10 transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'text-purple-400' : 'text-green-500'} `} />,
            title: 'Email',
            content: 'matialess@gmail.com',
            href: 'mailto:matialess@gmail.com',
        },
        {
            icon: <Linkedin className={`w-10 h-10 transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'text-purple-400' : 'text-green-500'} `} />,
            title: 'LinkedIn',
            content: 'matias-daniel-alessandrello',
            href: 'https://www.linkedin.com/in/matias-alessandrello',
        },
        {
            icon: <Github className={`w-10 h-10   
                        transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'text-purple-400' : 'text-green-500'} `} />,
            title: 'GitHub',
            content: 'malessan4',
            href: 'https://github.com/malessan4',
        }
    ];

    return (
        <main className={`min-h-screen pt-20 bg-gradient-to-br flex items-center justify-center p-4 
                 transition-colors duration-1500 ease-in-out overflow-x-hidden overflow-y-hidden
                 ${theme === 'light'
                ? 'from-pink-900 via-purple-950 to-pink-900'
                : 'from-gray-900 via-green-900 to-gray-900'
            }`}
        >
            <BackgroundParticles />
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={`text-4xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r 
                        transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-200'}`}>
                        Hablemos
                    </h1>
                    <p className="text-lg md:text-xl text-purple-100 mb-12">
                        Estoy disponible para nuevos proyectos y colaboraciones. <br /> No dudes en contactarme.
                    </p>
                </motion.div>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-colors duration-1500 ease-in-out
                 ${theme === 'light'
                        ? 'from-pink-900 via-purple-950 to-pink-900'
                        : 'from-gray-900 via-green-900 to-gray-900'
                    }`}>
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Link href={method.href} target="_blank" rel="noopener noreferrer" className={`block p-8
                             ${theme === 'light'
                                    ? 'from-pink-900 via-purple-950 to-pink-900 hover:bg-slate-800/80 hover:border-purple-500'
                                    : 'from-gray-900 via-green-900 to-gray-500  hover:bg-slate-800/80 hover:border-green-500'
                                } bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 h-full`}>
                                <div className="flex justify-center mb-4">
                                    {method.icon}
                                </div>
                                <h2 className="text-2xl font-bold mb-2">{method.title}</h2>
                                <p className="text-purple-100 break-all">{method.content}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

        </main>

    );
}
