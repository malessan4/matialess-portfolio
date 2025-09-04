'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">
                    Matias Daniel Alessandrello - Portfolio
                </Link>
                <div className="space-x-4">
                    <Link
                        href="/"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                            }`}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/projects"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/projects"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                            }`}
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="/contact"
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/contact"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                            }`}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}