import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { CategoryContent } from '../components/CategoryContent';
import { Footer } from '../components/Footer';
import { getCategoryBySlug } from '../data/categoriesData';
import Contact from '../components/Contact';

const CategoryPage = () => {
  const { categoria } = useParams();
  const { pathname } = useLocation();
  const category = getCategoryBySlug(categoria);

  // Forzar scroll al inicio al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!category) return <Navigate to="/notfound" replace />;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Usar 'key={categoria}' es la clave: 
          Cuando cambias de "paisajes" a "bodas", React desmonta el Hero viejo 
          y monta uno nuevo, reseteando el índice de imágenes a 0 automáticamente 
          y evitando el error de renderizado sincrónico.
      */}
      <CategoryHero key={categoria} category={category} />

      {/* CONTENIDO POST-SCROLL */}
      <section className="relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <CategoryContent category={category} />
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

/* --- SUBCOMPONENTE HERO --- */
const CategoryHero = ({ category }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!category?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % category.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [category]);

  return (
    <section className="relative z-10 h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Animado */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImgIndex}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.images[currentImgIndex]})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* UI de Cámara (HUD) */}
      <div className="absolute inset-0 z-10 pointer-events-none border-[20px] border-transparent md:border-[40px]">
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/50" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white/50" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white/50" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/50" />
        
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <p className="text-[10px] tracking-[0.5em] text-white/50 uppercase [writing-mode:vertical-lr] rotate-180">
            REC ● 4K 60FPS ISO 400
          </p>
        </div>
        <div className="absolute right-10 bottom-10 bg-red-600 px-3 py-1 text-[10px] font-bold rounded-sm animate-pulse">
          LIVE
        </div>
      </div>

      {/* Título Estilo Y2K */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-[0.3em] uppercase bg-white text-black rounded-full">
            {category.subtitle}
          </p>
          
          <h1 className="text-7xl md:text-[12rem] font-black uppercase leading-none tracking-tighter transition-all duration-700 select-none">
            <span className="block text-transparent stroke-white" 
                  style={{ WebkitTextStroke: '2px white' }}>
              {category.title}
            </span>
          </h1>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-xs tracking-[0.5em] uppercase opacity-60">
            <span className="h-[1px] w-12 bg-white"></span>
            Scroll to enter
            <span className="h-[1px] w-12 bg-white"></span>
          </div>
        </motion.div>
      </div>

      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-10" />
    </section>
  );
};

export default CategoryPage;