import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">
                    Mi Portfolio
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Inicio
                    </Link>
                    <Link href="/projects" className="text-gray-300 hover:text-white">
                        Proyectos
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                        Contacto
                    </Link>

                </div>
            </div>
        </nav>
    );
}
