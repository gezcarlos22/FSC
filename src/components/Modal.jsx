import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";

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
        <div className="relative flex items-center justify-center w-full max-w-6xl h-[90vh] md:h-[90vh]">
          
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
        <div className="relative flex items-center justify-center w-full max-w-5xl h-[90vh] md:h-[90vh]">
          
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
            className="w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Adaptado a Iframe para soportar las URLs de YouTube/Drive dinámicas de tu JSON */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={videos[currentIndex].url}
                title={videos[currentIndex].title}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            
            {/* Título opcional abajo del video para guiar al usuario */}
            <p className="text-white/60 mt-4 text-sm tracking-wide">{videos[currentIndex].title}</p>
          </motion.div>

          <button 
            onClick={nextVideo} 
            className="absolute right-0 md:-right-16 p-2 text-white/50 hover:text-white transition-all z-[100]"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export const PostInstagramModal = ({ isOpen, onClose, posts, currentIndex, setCurrentIndex }) => {

  const renderCaptionConHashtags = (text) => {
    if (!text) return "";
    
    // Usamos el flag 'u' (Unicode) y \p{L} que detecta cualquier tipo de letra en cualquier idioma (incluye ñ y tildes)
    const regex = /(#[_\p{L}\p{N}]+)/gu;
    
    // Dividimos el texto usando la nueva expresión regular
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      // Verificamos si la parte actual es efectivamente un hashtag
      if (part.startsWith('#')) {
        return (
          <span key={index} className="text-blue-500 hover:underline cursor-pointer">
            {part}
          </span>
        );
      }
      // Si no es un hashtag, lo dejamos como texto normal
      return part;
    });
  };
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !posts || posts.length === 0) return null;

  const currentPost = posts[currentIndex];

  const nextPost = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10"
        onClick={onClose}
      >
        {/* Botón Cerrar Flotante */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-[100] bg-black/40 p-2 rounded-full backdrop-blur-md"
        >
          <X size={28} />
        </button>

        {/* Contenedor del Navegador + Tarjeta */}
        <div className="relative flex items-center justify-center w-full max-w-5xl h-full max-h-[85vh]">
          
          {/* Flecha Izquierda */}
          <button 
            onClick={prevPost} 
            className="absolute -left-4 md:-left-16 p-2 text-white/50 hover:text-white transition-all z-[100] active:scale-90"
          >
            <ChevronLeft size={44} />
          </button>

          {/* ESTRUCTURA DE LA CARD (Estilo Instagram) */}
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* COLUMNA IZQUIERDA: Visualizador de Imagen */}
            <div className="relative flex items-center justify-center bg-zinc-900 overflow-hidden h-[40vh] md:h-full">
            {/* Renderizado condicional para el Modal: Video o Imagen */}
            {currentPost.mediaUrl && (currentPost.mediaUrl.endsWith('.mp4') || currentPost.mediaUrl.endsWith('.webm') || currentPost.mediaUrl.includes('video')) ? (
              <video 
                src={currentPost.mediaUrl} 
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <img
                src={currentPost.mediaUrl}
                alt={currentPost.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>

            {/* COLUMNA DERECHA: Contenido y Descripciones */}
            <div className="flex flex-col h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-full max-h-full bg-white text-zinc-900 p-6 md:p-8 overflow-hidden">
  
  {/* Header: Info del Perfil */}
  <div className="flex items-center justify-between border-b border-zinc-100 pb-4 flex-shrink-0">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full object-cover border border-zinc-200 bg-black justify-center items-center flex">
        <img 
          src={currentPost.avatarUrl} 
          alt={currentPost.username} 
          className="scale-100 rounded-full"
        />
      </div>
      
      <div className="flex flex-col">
        <span className="font-bold text-base text-zinc-900 tracking-wide leading-tight">
          {currentPost.username}
        </span>
        <span className="text-xs text-zinc-400 mt-0.5">
          {currentPost.date}
        </span>
      </div>
    </div>

    <a 
      href={currentPost.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-[#ee2a7b] transition-colors p-1"
    >
      <FaInstagram size={26} />
    </a>
  </div>

  {/* Body: Descripción Larga con Scroll Autónomo */}
  {/* Nota: renderCaptionConHashtags() es la función que creamos en el paso anterior */}
  <div className="flex-1 overflow-y-auto pt-4 pr-2 text-zinc-700 leading-relaxed text-[15px] space-y-4 font-normal tracking-wide">
    <p className="whitespace-pre-line">
      {renderCaptionConHashtags(currentPost.caption)}
    </p>
  </div>

  {/* Botón de Acción: Ver Publicación (Fijo abajo gracias a flex-shrink-0) */}
  <div className="pt-4 mt-auto border-t border-zinc-100 flex-shrink-0">
    <a
      href={currentPost.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 active:scale-[0.99] transition-all shadow-md shadow-zinc-950/10 tracking-wide text-center"
    >
      <FaInstagram size={16} />
      Ver publicación
    </a>
  </div>

</div>
          </motion.div>

          {/* Flecha Derecha */}
          <button 
            onClick={nextPost} 
            className="absolute -right-4 md:-right-16 p-2 text-white/50 hover:text-white transition-all z-[100] active:scale-90"
          >
            <ChevronRight size={44} />
          </button>
        </div>

      </motion.div>
    </AnimatePresence>,
    document.body
  );
};