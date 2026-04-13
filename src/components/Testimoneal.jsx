import React, { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimoneal = () => {
    const scrollRef = useRef(null);

    const testimonials = [
        { name: "Leslie Alexander", role: "Freelance React Developer", content: "Hiciste que todo fuera muy simple. Mi nuevo sitio es mucho más rápido y fácil.", avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" },
        { name: "Jacob Jones", role: "Digital Marketer", content: "Simplemente lo mejor. Mejor que todo el resto. Recomendaría trabajar con este equipo.", avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" },
        { name: "Jenny Wilson", role: "Graphic Designer", content: "No puedo creer que tenga una página de destino tan increíble. Fue súper fácil.", avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" },
        { name: "Bessie Cooper", role: "Model", content: "La calidad del material audiovisual superó mis expectativas. Muy profesional todo.", avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" },
        { name: "Arlene McCoy", role: "CEO at Floak", content: "Increíble atención al detalle. Capturaron la esencia de nuestra marca perfectamente.", avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" }
    ];

    // Lógica de delay: El elemento central (index 2 en una lista de 5) aparece primero
    const middleIndex = Math.floor(testimonials.length / 2);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i === middleIndex ? 0.2 : Math.abs(middleIndex - i) * 0.2 + 0.3,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="Testimoneal" className="py-12 relative z-1 bg-black sm:py-16 lg:py-30 overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <h2 className="mt-4 pb-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">Historias de quienes ya pasaron por nuestro lente.</h2>
                        <p className="text-lg font-medium text-gray-400 font-pj">Una comunidad entera coincide en lo especial que es nuestro trabajo.</p>

                    </motion.div>

                    {/* Contenedor principal con overflow visible para no cortar las cards laterales */}
                    <div className="relative mt-10 md:mt-24 w-full flex justify-center" ref={scrollRef}>
                        
                        {/* Resplandor de fondo */}
                        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
                            <div 
                                className="w-full h-6/7 max-w-5xl rounded-full opacity-20 blur-[100px]" 
                                style={{ background: 'linear-gradient(90deg, #44ff9a, #44b0ff, #8b44ff, #ff6644)' }}
                            ></div>
                        </div>

                        {/* Contenedor de Arrastre (Drag) centrado */}
                        <motion.div 
                            drag="x"
                            // Limitamos el arrastre para que no se pierdan las cards
                            dragConstraints={scrollRef}
                            dragElastic={0.2}
                            className="flex flex-nowrap gap-6 lg:gap-10 cursor-grab active:cursor-grabbing"
                            style={{ width: "max-content" }}
                        >
                            {testimonials.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    custom={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "100px" }}
                                    
                                    /* Efecto de foco: la card se ilumina cuando está centrada en el viewport */
                                    className="flex flex-col w-[75vw] md:w-[380px] lg:w-[420px] p-8 bg-gray-800/30 rounded-3xl border border-gray-700/40 shadow-2xl backdrop-blur-md 
                                               transition-all duration-700 ease-in-out opacity-30 scale-95
                                               while-in-view:opacity-100 while-in-view:scale-100 while-in-view:border-gray-500/60"
                                >
                                    <div className="flex-1 pointer-events-none">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-purple-500/30">
                                                <Quote className="w-5 h-5 text-purple-400" />
                                            </div>
                                        </div>

                                        <blockquote className="mt-8">
                                            <p className="text-xl leading-relaxed text-gray-200 font-pj italic">
                                                “{item.content}”
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8 pt-6 border-t border-gray-700/50 pointer-events-none">
                                        <img 
                                            className="flex-shrink-0 object-cover rounded-full w-12 h-12 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20" 
                                            src={item.avatar} 
                                            alt={item.name} 
                                        />
                                        <div className="ml-4 min-w-0">
                                            <p className="text-base font-bold text-white font-pj">{item.name}</p>
                                            <p className="text-sm font-pj text-gray-400 uppercase tracking-widest">{item.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
};