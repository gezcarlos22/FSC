import React, { useState } from "react";
import { ImageModal } from "./Modal"; 
import { motion } from "framer-motion"; // Importamos Framer Motion

export const Images = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const allImages = [
    // Columna 1
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773961/P18_vf6btm.jpg',  
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773955/A18_hfvmk3.jpg',
    "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773968/C15_mjsjk7.jpg",
    
    
    // Columna 2
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773955/P13_sa6ghf.jpg',
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773962/P24_lcwnot.jpg',
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773966/C24_rcgjjg.jpg',
  
    
    // Columna 3
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773959/C18_rkbyps.jpg',
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773960/A1_eoz6p2.jpg',
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773955/P9_dwhkye.jpg',

    // Columna 4
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773958/P21_ofdwev.jpg',
    'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773957/P19_x7medm.jpg',
  ];

  const openModalAt = (index) => {
    setSelectedIdx(index);
    setIsModalOpen(true);
  };

  // Variante para las imágenes (aparición paulatina)
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1, // El "orden" se da por el índice
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-12 relative z-1 bg-black sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="text-center pb-10"
                            >
          <p className="text-lg font-medium text-gray-400 font-pj">
            Exploramos diferentes estilos y formatos para demostrar que, sin importar el desafío, el resultado siempre supera las expectativas.
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
            Un recorrido por nuestra mirada.
          </h2>
        </motion.div>

        {/* GRID DE IMÁGENES */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          
          {/* Columna 1 */}
          <div className="grid gap-4">
            {[0, 1, 2].map((idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="cursor-pointer group overflow-hidden rounded-lg" 
                onClick={() => openModalAt(idx)}
              >
                <img className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-110" src={allImages[idx]} alt="gallery" />
              </motion.div>
            ))}
          </div>

          {/* Columna 2 */}
          <div className="grid gap-4">
            {[3, 4, 5].map((idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="cursor-pointer group overflow-hidden rounded-lg" 
                onClick={() => openModalAt(idx)}
              >
                <img className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-110" src={allImages[idx]} alt="gallery" />
              </motion.div>
            ))}
          </div>

          {/* Columna 3 */}
          <div className="grid gap-4">
            {[6, 7, 8].map((idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="cursor-pointer group overflow-hidden rounded-lg" 
                onClick={() => openModalAt(idx)}
              >
                <img className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-110" src={allImages[idx]} alt="gallery" />
              </motion.div>
            ))}
          </div>

          {/* Columna 4 */}
          <div className="grid gap-4">
            {[9, 10].map((idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="cursor-pointer group overflow-hidden rounded-lg" 
                onClick={() => openModalAt(idx)}
              >
                <img className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-110" src={allImages[idx]} alt="gallery" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={allImages} 
        currentIndex={selectedIdx} 
        setCurrentIndex={setSelectedIdx}
      />
    </section>
  );
};