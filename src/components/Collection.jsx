import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categoriesData';

export const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  const variants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1.05,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 1,
    }
  };

  const currentCategory = categories[currentIndex];

  return (
    <section className="relative z-1 w-full h-screen overflow-hidden bg-black font-pj">
      
      {/* 1. BACKGROUND DINÁMICO (Sincronizado) */}
      {/* Eliminamos mode="wait" para que el nuevo fondo entre mientras el viejo sale */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${currentIndex}`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" }, 
            scale: { duration: 1.5, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentCategory.image ?? currentCategory.images[0]})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 2. UI DE CÁMARA (HUD) */}
      <div className="absolute inset-0 z-20 pointer-events-none border-[15px] border-transparent md:border-[30px]">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />
        
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <p className="text-[10px] tracking-[0.5em] text-white/50 uppercase [writing-mode:vertical-lr] rotate-180">
            REC ● 4K 60FPS ISO 400
          </p>
        </div>
        
        <div className="absolute right-20 top-10 flex items-center gap-2">
          <div className="absolute bg-red-600 px-3 py-1 text-[10px] font-bold rounded-sm animate-pulse">
          LIVE
        </div>
        </div>
      </div>

      {/* 3. TÍTULO E IMPACTO VISUAL (Sincronizado con duración 1.2s) */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full w-full px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="max-w-6xl"
          >
            <p className="inline-block px-5 py-1.5 mb-6 text-xs font-bold tracking-[0.4em] uppercase bg-white text-black rounded-full shadow-lg">
              {currentCategory.subtitle}
            </p>

            <h1 className="text-6xl md:text-[10rem] lg:text-[13rem] font-black uppercase leading-[0.8] tracking-tighter select-none">
              <span 
                className="block text-transparent stroke-white" 
                style={{ WebkitTextStroke: '2px white' }}
              >
                {currentCategory.title}
              </span>
            </h1>

            <div className="mt-10 flex flex-col items-center gap-8">
              <button
                onClick={() => navigate(`/categoria/${currentCategory.slug}`)}
                className="pointer-events-auto px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-transform active:scale-95 shadow-xl"
              >
                Explorar Colección
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. CONTROLES INFERIORES */}
      <div className="absolute bottom-10 left-0 w-full z-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center items-center">
          
          <div className="flex gap-3">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  index === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-4 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group"
            >
              <ArrowLeft size={20} className="group-active:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group"
            >
              <ArrowRight size={20} className="group-active:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] z-30" />
    </section>
  );
};