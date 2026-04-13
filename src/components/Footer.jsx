import React from 'react';
import { FaTwitter, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Footer = () => {
    const columnVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="pb-10 bg-black relative z-1">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {/* AJUSTE GRID: 
                   - grid-cols-2 por defecto (para que Col 2 y 3 entren juntas).
                   - lg:grid-cols-3 para escritorio.
                */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                    
                    {/* COLUMNA 1: 
                       - col-span-2: Ocupa las dos columnas en móvil (toda la fila).
                       - lg:col-span-1: Vuelve a ocupar solo una en escritorio.
                    */}
                    <motion.div 
                        custom={0}
                        variants={columnVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="col-span-2 lg:col-span-1 lg:pr-8"
                    >
                        <img className="w-auto h-9" src="/logo.png" alt="Logo" />
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            A través de mi lente, busco capturar la esencia de cada instante, combinando la espontaneidad con la técnica profesional.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            {[
                                { icon: <FaTwitter className="w-4 h-4" />, color: "#1DA1F2", label: "Twitter" },
                                { icon: <FaInstagram className="w-4 h-4" />, color: "#E1306C", label: "Instagram" },
                                { icon: <FaTiktok className="w-3.5 h-3.5" />, color: "#000000", label: "TikTok" },
                                { icon: <FaFacebookF className="w-4 h-4" />, color: "#4267B2", label: "Facebook" }
                            ].map((social, index) => (
                                <li key={index}>
                                    <a href="#" title={social.label} className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600">
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUMNA 2 y 3:
                       - col-span-1: Ocupan una columna cada una, quedando juntas en la segunda fila.
                    */}
                    <motion.div 
                        custom={1}
                        variants={columnVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">Secciones</p>
                        <ul className="mt-6 space-y-4">
                            {["Inicio", "Sobre mi", "Testimonios", "Contacto"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600"> {item} </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        custom={2}
                        variants={columnVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">Colecciones</p>
                        <ul className="mt-6 space-y-4">
                            {["Paisajes", "Animales", "Productos", "Bodas"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="flex text-base text-gray-400 transition-all duration-200 hover:text-blue-600"> {item} </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <hr className="mt-16 mb-10 border-gray-800" />
                    <p className="text-sm text-center text-gray-600">
                        © Copyright 2026, All Rights Reserved by FSC Audiovisual
                    </p>
                </motion.div>
            </div>
        </section>
    );
};