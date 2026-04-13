import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion'; // Importamos motion
import SocialButtons from './hero/Social';

const Contact = () => {
    // Configuración de la animación sutil
    const fadeInSide = (direction) => ({
        initial: { 
            opacity: 0, 
            x: direction === 'left' ? -50 : 50 
        },
        whileInView: { 
            opacity: 1, 
            x: 0 
        },
        viewport: { once: true, margin: "-100px" },
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        }
    });

    return (
        <div id="Contact" className="relative z-10 bg-black overflow-hidden font-pj">

            <section className="relative py-12 lg:p-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:items-center lg:grid-cols-2 xl:grid-cols-5">
                        
                        {/* --- Columna Izquierda (Aparece desde la Izquierda) --- */}
                        <motion.div 
                            {...fadeInSide('left')}
                            className="text-center xl:col-span-2 lg:text-left"
                        >
                            <div className="max-w-sm mx-auto lg:mx-0 sm:max-w-md md:max-w-full">
                                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
                                    Creemos algo increíble juntos.
                                </h2>
                            </div>
                            
                            <div className='mt-8'>
                                <p className="text-lg font-medium text-gray-400 font-pj mb-2">
                                    ¿Listo para empezar tu proyecto?
                                </p>
                                <form action="#" method="POST" className="relative rounded-full">
                                    <div className="relative">
                                        <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="Ingresa tu correo electrónico" 
                                                className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 focus:border-transparent focus:ring-0" 
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">
                                            Solicitar info
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className='flex w-full justify-center lg:justify-start'>
                                <SocialButtons/>
                            </div>
                        </motion.div>

                        {/* --- Columna Derecha (Aparece desde la Derecha) --- */}
                        <motion.div 
                            {...fadeInSide('right')}
                            className="xl:col-span-3"
                        >
                            <div className="relative p-4 sm:p-8 bg-gray-900/50 border border-gray-800 rounded-3xl backdrop-blur-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    
                                    {/* Email */}
                                    <div className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 transition-all hover:bg-gray-800">
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</p>
                                            <p className="text-base sm:text-lg font-semibold text-white truncate">carlos@dev.com</p>
                                        </div>
                                    </div>

                                    {/* Teléfono */}
                                    <div className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 transition-all hover:bg-gray-800">
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 shadow-lg">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Teléfono</p>
                                            <p className="text-base sm:text-lg font-semibold text-white">+54 351 1234567</p>
                                        </div>
                                    </div>

                                    {/* Localidad */}
                                    <div className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl md:col-span-2 border border-gray-700/50 transition-all hover:bg-gray-800">
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Localidad</p>
                                            <p className="text-base sm:text-lg font-semibold text-white">Córdoba Capital, Argentina</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;