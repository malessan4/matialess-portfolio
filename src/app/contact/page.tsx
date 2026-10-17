"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
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

export default function ContactPage() {
    const { theme } = useTheme();
    const { t } = useLanguage();
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
            title: t.contactPage.email,
            content: 'matialess@gmail.com',
            href: 'mailto:matialess@gmail.com',
        },
        {
            icon: <Linkedin className={`w-10 h-10 transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'text-purple-400' : 'text-green-500'} `} />,
            title: t.contactPage.linkedin,
            content: 'matias-daniel-alessandrello',
            href: 'https://www.linkedin.com/in/matias-alessandrello',
        },
        {
            icon: <Github className={`w-10 h-10 transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'text-purple-400' : 'text-green-500'} `} />,
            title: t.contactPage.github,
            content: 'malessan4',
            href: 'https://github.com/malessan4',
        },
        {
            icon: <FileText className={`w-10 h-10 transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'text-purple-400' : 'text-green-500'} `} />,
            title: t.contactPage.cvTitle,
            content: t.contactPage.downloadCv,
            href: '/certificates/Resume_Matias_Daniel_Alessandrello.pdf',
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
            <div className="container mx-auto max-w-4xl text-center z-10 py-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={`text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r 
                        transition-colors duration-1500 ease-in-out
                       ${theme === 'light' ? 'from-purple-400 to-pink-600' : 'from-green-800 to-green-200'}`}>
                        {t.contactPage.title}
                    </h1>
                    <p className="text-lg md:text-xl text-purple-100 mb-12 max-w-2xl mx-auto opacity-90">
                        {t.contactPage.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                        >
                            <Link
                                href={method.href}
                                target={method.href.startsWith('mailto') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className={`block p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 h-full hover:scale-105
                                  ${theme === 'light'
                                    ? 'bg-purple-950/40 border-purple-500/40 hover:bg-purple-900/60 hover:border-pink-500'
                                    : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/80 hover:border-green-500'
                                  }`}
                            >
                                <div className="flex justify-center mb-4">
                                    {method.icon}
                                </div>
                                <h2 className="text-xl font-bold mb-2">{method.title}</h2>
                                <p className="text-sm text-purple-100/80 break-all">{method.content}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
