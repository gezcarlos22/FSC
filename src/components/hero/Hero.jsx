import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Scene3D from '../Scene3D';
import SocialButtons from './Social';
import PolaroidGallery from './PolaroidGallery';

const Hero = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    const sampleImages = [
        "https://images.pexels.com/photos/32195697/pexels-photo-32195697.jpeg",
        "https://images.pexels.com/photos/32195697/pexels-photo-32195697.jpeg",
        "https://images.pexels.com/photos/32195697/pexels-photo-32195697.jpeg",
    ];

    useEffect(() => {
        const handleScroll = () => {
            const progress = window.innerHeight > 0 ? window.scrollY / window.innerHeight : 0
            setScrollProgress(Math.min(Math.max(progress, 0), 1))
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return (
    <div className="relative bg-black overflow-hidden">
        
        {/* FONDO ÚNICO COMPARTIDO */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
                initial={{ x: -200, y: -200, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 0.7 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4"
            >  
                <svg className="blur-3xl filter" style={{ filter: 'blur(80px)' }} width="800" height="1000" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M300 150C450 85 520 -90 590 65C660 220 335 640 180 700C25 760 75 455 13 295C-49 135 150 215 300 150Z" fill="url(#c)" />
                    <defs>
                        <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" style={{ stopColor: '#06b6d4' }} />
                            <stop offset="100%" style={{ stopColor: '#a855f7' }} />
                        </linearGradient>
                    </defs>
                </svg>     
            </motion.div>

            <motion.div 
                initial={{ x: 200, y: 200, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 0.6 }}
                transition={{ duration: 4, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
            >  
                <svg className="blur-3xl filter" style={{ filter: 'blur(80px)' }} width="800" height="1000" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 620C180 520 260 450 340 420C420 390 490 320 520 230C550 140 480 80 390 80C300 80 240 180 180 250C120 320 80 420 100 520C120 620 120 620 120 620Z" fill="url(#d)" />
                    <defs>
                        <linearGradient id="d" x1="120" y1="80" x2="520" y2="620" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" style={{ stopColor: '#ec4899' }} />
                            <stop offset="100%" style={{ stopColor: '#fb923c' }} />
                        </linearGradient>
                    </defs>
                </svg>     
            </motion.div>
        </div>

        {/* ESCENA 3D */}
        <motion.div
            initial={{ x: -100, opacity: 0, scale: 1 }}
            animate={{ 
                x: 0, 
                opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 1,
                scale: 1 
            }}
            transition={{ duration: 2, delay: 0.5 , ease: "easeOut" }}
            className="pointer-events-none fixed w-screen h-full top-1/2 md:top-3/5 z-1 flex -translate-y-1/2"
        >
            <Scene3D 
                scrollProgress={typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : scrollProgress} 
            />
        </motion.div>

        {/* SECCIÓN 1: HOME - Reducido h-screen en mobile */}
        <section id="Home" className="relative pt-30 md:py-10 min-h-[80vh] md:h-screen flex items-center">
            <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl w-full">
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-30 items-center justify-center px-2">            
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        // Añadimos flex y centrado para mobile, volvemos a block en md
                        className="md:order-last relative z-10 flex flex-col items-center md:items-start"
                    >
                        {/* mx-auto centra la imagen en mobile, md:mx-0 la alinea a la izquierda en desktop */}
                        <img className="w-auto h-18 lg:h-26 mx-auto md:mx-0" src="/logo.png" alt="Logo" />
                        
                        {/* text-center para mobile, md:text-left para desktop */}
                        <p className="mt-4 md:w-8/10 text-lg font-medium text-gray-200 md:text-gray-400 sm:mt-8 text-center md:text-left">
                            A través de mi lente, busco capturar la esencia de cada instante, combinando la espontaneidad con la técnica profesional.
                        </p>

                        {/* Contenedor para los botones sociales si necesitan centrado */}
                        <div className="w-full flex justify-center md:justify-start">
                            <SocialButtons/>
                        </div>
                    </motion.div>
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </section>

        {/* SECCIÓN 2: ABOUT ME - Acercada en mobile */}
        <section id="Aboutme" className="relative z-10 py-10 md:py-20 lg:py-40 flex items-center min-h-screen">
            <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 items-start">
                    
                    <motion.div 
                        initial={{ 
                            x: typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : -100, 
                            y: typeof window !== 'undefined' && window.innerWidth < 1024 ? 30 : 0, 
                            opacity: 0 
                        }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col items-start"
                    >
                        {/* 1. Las Fotos */}
                        <div className="relative z-20 w-full flex justify-center lg:justify-start items-center">
                            <PolaroidGallery images={sampleImages} />
                        </div>

                        {/* 2. La Información */}
                        <div className="relative z-10 w-full text-left mt-2 md:mt-0">
                            <p className="mt-4 md:mt-6 text-lg font-medium text-gray-200 md:text-gray-400 text-center md:text-left leading-relaxed max-w-2xl px-2 md:px-0">
                                Como fotógrafo y creador visual, entiendo que cada imagen es un fragmento de una historia mayor. 
                                Me defino como una persona que valora la autenticidad por sobre la pose.
                            </p>

                            <div className="flex justify-center lg:justify-start mt-6 px-6 lg:px-0">
                                <div className="relative inline-flex group w-full max-w-xs">
                                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                    <Link to="/about" className="relative inline-flex items-center justify-center w-full px-2 py-4 text-base font-bold text-white bg-black rounded-full"> 
                                        Conocé mi historia 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="hidden lg:block lg:col-span-1"></div>
                </div>
            </div>
        </section>
    </div>
)
}
export default Hero;