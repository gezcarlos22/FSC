import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Camera, Video, Sparkles, Wand2, X } from 'lucide-react';
import { ImageModal } from './Modal';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export const CategoryContent = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Referencia al contenedor principal para GSAP
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Smooth Scroll con Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Animaciones con GSAP
    const ctx = gsap.context(() => {
      // Parallax en las imágenes de la galería
      gsap.utils.toArray('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      // Efecto de aparición (Reveal) para textos y secciones
      gsap.utils.toArray('.reveal-text').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  // Handlers de modales y scroll lock
  useEffect(() => {
    document.body.style.overflow = (isModalOpen || isVideoModalOpen) ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen, isVideoModalOpen]);

  return (
    <section ref={containerRef} className="space-y-20 md:space-y-32 pt-20 overflow-hidden">
      
      {/* CAPA DE LUZ (Blobs) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] rotate-12 opacity-30">
          <div className="w-full h-full blur-[120px]" style={{ background: 'linear-gradient(90deg, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)', borderRadius: '100% 0% 100% 0% / 50% 100% 0% 50%' }} />
        </div>
        <div className="absolute bottom-[5%] -right-[10%] w-[80%] h-[60%] -rotate-12 opacity-25">
          <div className="w-full h-full blur-[100px]" style={{ background: 'linear-gradient(270deg, #8b5cf6 0%, rgba(139, 92, 246, 0) 100%)', borderRadius: '0% 100% 0% 100% / 100% 50% 50% 0%' }} />
        </div>
      </div>

      {/* DETALLES DE COLECCIÓN */}
      <div className="mb-10 text-center md:text-left reveal-text">
        <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest">
          Detalles de Colección
        </h2>
        <p className="pt-5 text-lg text-white/70 leading-8">
          {category.extra}
        </p>
      </div>

      {/* CORE FEATURES */}
      <div className="reveal-text rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 md:p-8 backdrop-blur-xl mb-10">
        <h2 className="text-2xl font-semibold mb-8 text-white/90">Características principales</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {category.highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INFO CARDS (TIPO ABOUT) */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Camera />, color: "indigo", title: "Fotografía", desc: "Imágenes cuidadosamente capturadas con enfoque en luz y composición." },
          { icon: <Video />, color: "cyan", title: "Contenido dinámico", desc: "Videos diseñados para transmitir emoción y profundidad." },
          { icon: <Wand2 />, color: "pink", title: "Edición profesional", desc: "Procesado visual que potencia colores y atmósferas únicas." }
        ].map((card, idx) => (
          <div key={idx} className="reveal-text p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500">
            <div className={`p-3 w-fit rounded-xl bg-gradient-to-br from-${card.color}-500 to-blue-500 mb-6`}>
              {React.cloneElement(card.icon, { className: "text-white" })}
            </div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-white/70">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* GALERÍA CON PARALLAX */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest reveal-text">
          Galería
        </h2>
        
        {/* Cambio: agregamos grid-cols-2 por defecto (móvil) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.images.map((src, i) => (
            <div 
              key={i} 

              className="reveal-text group relative h-48 md:h-80 overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-2xl" 
              onClick={() => { setSelectedIndex(i); setIsModalOpen(true); }}
            >
              {/* Imagen con efecto Parallax */}
              <img
                src={src}
                className="parallax-img absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
                alt={`Imagen de galería ${i + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* VIDEOS REVEAL */}
      {category.videos?.length > 0 && (
        <div className="space-y-10">
          <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest reveal-text">Videos</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {category.videos.map((video) => (
              <div 
                key={video.title}
                className="reveal-text rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl cursor-pointer hover:border-white/30 transition-colors"
                onClick={() => { setSelectedVideo(video); setIsVideoModalOpen(true); }}
              >
                <div className="aspect-video pointer-events-none">
                  <iframe src={video.url} title={video.title} className="w-full h-full" allowFullScreen />
                </div>
                <div className="p-6">
                  <p className="text-white/80 font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Los modales (Portals) se mantienen igual... */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={category.images} 
        currentIndex={selectedIndex} 
        setCurrentIndex={setSelectedIndex}
      />
      {isVideoModalOpen && selectedVideo && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)} 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[100]"
            >
              <X size={40} />
            </button>

            <div className="relative w-full max-w-5xl aspect-video">
              <iframe
                /* Aquí es donde se "lee" selectedVideo, eliminando el error */
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="w-full h-full rounded-2xl shadow-2xl border border-white/10"
                allowFullScreen
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-6 text-xl font-light tracking-wide text-white"
            >
              {selectedVideo.title}
            </motion.p>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};