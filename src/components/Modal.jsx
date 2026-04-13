import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImageModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[100]"
        >
          <X size={40} />
        </button>

        {/* Visualizador Principal */}
        <div className="relative flex items-center justify-center w-full max-w-5xl h-[60vh] md:h-[65vh]">
          
          <button 
            onClick={prevImage} 
            className="absolute left-0 md:-left-16 p-2 text-white/50 hover:text-white transition-all z-[100]"
          >
            <ChevronLeft size={48} />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[currentIndex]}
            alt="Vista completa"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            onClick={nextImage} 
            className="absolute right-0 md:-right-16 p-2 text-white/50 hover:text-white transition-all z-[100]"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* --- NUEVO: CARRUSEL DE MINIATURAS SELECCIONABLES --- */}
        <div 
          className="mt-8 flex gap-3 overflow-x-auto p-2 max-w-full no-scrollbar justify-center"
          onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al tocar el carrusel
        >
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                idx === currentIndex 
                  ? "border-cyan-500 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.5)] opacity-100" 
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <img 
                src={src} 
                className="w-full h-full object-cover" 
                alt={`Thumbnail ${idx}`} 
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export const VideoModal = ({ isOpen, onClose, videos, currentIndex, setCurrentIndex }) => {

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const nextVideo = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        {/* Botón Cerrar */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[100]"
        >
          <X size={40} />
        </button>

        {/* Visualizador Principal de Video */}
        <div className="relative flex items-center justify-center w-full max-w-5xl h-[60vh] md:h-[65vh]">
          
          <button 
            onClick={prevVideo} 
            className="absolute left-0 md:-left-16 p-2 text-white/50 hover:text-white transition-all z-[100]"
          >
            <ChevronLeft size={48} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={videos[currentIndex]}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              controls
              autoPlay
              playsInline
            />
          </motion.div>

          <button 
            onClick={nextVideo} 
            className="absolute right-0 md:-right-16 p-2 text-white/50 hover:text-white transition-all z-[100]"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* Carrusel de Miniaturas */}
        <div 
          className="mt-8 flex gap-3 overflow-x-auto p-2 max-w-full no-scrollbar justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {videos.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                idx === currentIndex 
                  ? "border-cyan-500 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.5)] opacity-100" 
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <video 
                src={src} 
                className="w-full h-full object-cover" 
                muted
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};