import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsCollectionsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cierra el menú al navegar
    const colecciones = [
        { name: 'Paisajes', href: '/categoria/paisajes' },
        { name: 'Animales', href: '/categoria/animales' },
        { name: 'Productos', href: '/categoria/productos' },
        { name: 'Arquitectura', href: '/categoria/arquitectura' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 lg:flex-1">
                        <Link to="/" className="flex">
                            <img className="w-auto h-6 lg:h-8" src="/logo.png" alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-10">
                        <Link to="/" className="text-base font-medium text-white hover:text-blue-600 transition-all"> Inicio </Link>
                        <Link to="/about" className="text-base font-medium text-white hover:text-blue-600 transition-all"> Sobre mi </Link>
                        
                        {/* Dropdown Colecciones con el mismo estilo */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setIsCollectionsOpen(true)}
                            onMouseLeave={() => setIsCollectionsOpen(false)}
                        >
                            <button className="flex items-center text-base font-medium text-white hover:text-blue-600 transition-all focus:outline-none">
                                Colecciones
                                <svg className={`w-4 h-4 ml-1 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <div className={`absolute left-0 w-48 pt-4 transition-all duration-200 ${isCollectionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <div className="bg-black border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                                    {colecciones.map((item) => (
                                        <Link 
                                            key={item.name} 
                                            to={item.href} 
                                            className="block px-4 py-3 text-sm text-white hover:bg-blue-600 transition-colors"
                                            onClick={() => setIsCollectionsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="/#Equipment" className="text-base font-medium text-white hover:text-blue-600 transition-all"> Equipo </a>
                        <a href="/#Testimoneal" className="text-base font-medium text-white hover:text-blue-600 transition-all"> Testimonios </a>
                    </div>

                    {/* Botón Contacto - Manteniendo el gradiente original */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div className="relative inline-flex group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <a href="#Contact" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"> 
                                Contacto 
                            </a>
                        </div>
                    </div>

                    {/* Hamburguesa Móvil */}
                    <div className="flex items-center lg:hidden">
                        <button onClick={toggleMenu} className="inline-flex p-2 text-white hover:bg-gray-800 rounded-md transition-colors">
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </nav>

                {/* Menú Móvil - Estilo original con fondo negro y bordes */}
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col pt-2 pb-6 mb-4 bg-black border border-gray-800 rounded-md lg:hidden`}>
                    <div className="flex flex-col items-center space-y-2">
                        <Link to="/" className="py-2 text-base font-medium text-white hover:text-blue-600"> Inicio </Link>
                        <Link to="/about" className="py-2 text-base font-medium text-white hover:text-blue-600"> Sobre mi </Link>
                        
                        <button 
                            onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                            className="flex items-center py-2 text-base font-medium text-white hover:text-blue-600"
                        >
                            Colecciones
                            <svg className={`w-4 h-4 ml-1 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        
                        <div className={`${isCollectionsOpen ? 'flex' : 'hidden'} flex-col items-center w-full bg-gray-900/50 py-2 rounded-lg`}>
                            {colecciones.map((item) => (
                                <Link 
                                    key={item.name} 
                                    to={item.href} 
                                    className="py-2 text-sm text-gray-300 hover:text-white"
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <a href="/#Equipment" onClick={toggleMenu} className="py-2 text-base font-medium text-white hover:text-blue-600"> Equipo </a>
                        <a href="/#Testimoneal" onClick={toggleMenu} className="py-2 text-base font-medium text-white hover:text-blue-600"> Testimonios </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};