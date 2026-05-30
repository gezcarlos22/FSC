import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { PostInstagramModal } from "./Modal";

export const Posts = ({
  currentPosts,

}) => {
    // 2. ESTADOS PARA CONTROLAR EL MODAL:
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalIndex, setModalIndex] = useState(0);

        const [activeIndex, setActiveIndex] = useState(0);
        const [itemsPerPage, setItemsPerPage] = useState(3);

      useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 1024) {
              setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
              setItemsPerPage(2);
            } else {
              setItemsPerPage(1);
            }
          };
      
          handleResize();
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        const maxIndex = Math.max(0, currentPosts.length - itemsPerPage);
        const displayIndex = Math.min(activeIndex, maxIndex);
      
        const previous = () => {
          setActiveIndex(displayIndex === 0 ? maxIndex : displayIndex - 1);
        };
      
        const next = () => {
          setActiveIndex(displayIndex >= maxIndex ? 0 : displayIndex + 1);
        };
      
        useEffect(() => {
          const interval = setInterval(() => {
            setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
          }, 6000);
      
          return () => clearInterval(interval);
        }, [maxIndex]);
      
        const goTo = (index) => {
          setActiveIndex(index);
        };

  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${displayIndex * (100 / itemsPerPage)}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex w-full"
        >
          {currentPosts.map((post, idx) => {
            const isVideo =
              post.mediaUrl &&
              (post.mediaUrl.endsWith('.mp4') ||
                post.mediaUrl.endsWith('.webm') ||
                post.mediaUrl.includes('video'));

            return (
              <div key={post.id} className="w-full shrink-0 md:px-3 md:w-1/2 lg:w-1/3">
                <div
                  onClick={() => {
                    setModalIndex(idx);
                    setIsModalOpen(true);
                  }}
                  className="relative aspect-[4/6] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl group cursor-pointer"
                >
                  {isVideo ? (
                    <video
                      src={post.mediaUrl}
                      muted
                      preload="metadata"
                      loop
                      autoPlay
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={post.mediaUrl || '/placeholder-img.jpg'}
                      loading="lazy"
                      decoding="async"
                      alt={`Post de ${post.username}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full object-cover border border-white/20 bg-black justify-center items-center flex">
                        <img
                          src={post.avatarUrl || '/default-avatar.jpg'}
                          loading="lazy"
                          decoding="async"
                          alt={post.username}
                          className="scale-100 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm leading-tight">
                          {post.username || 'Usuario'}
                        </span>
                        <span className="text-xs text-white/70 mt-0.5">
                          {post.date || 'Hace 2 años'}
                        </span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-md">
                      <FaInstagram className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row items-center justify-center w-full px-4">
        <div className="flex items-center gap-6 max-w-full justify-center">
          <button
            onClick={previous}
            className="p-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group active:scale-90 flex-shrink-0"
            aria-label="Anterior"
          >
            <ArrowLeft size={18} className="group-active:-translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap gap-2 items-center justify-center max-w-[60vw] sm:max-w-none">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                  displayIndex === i ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Ir al bloque ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group active:scale-90 flex-shrink-0"
            aria-label="Siguiente"
          >
            <ArrowRight size={18} className="group-active:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <PostInstagramModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        posts={currentPosts} // Le mandamos los posts de la empresa seleccionada
        currentIndex={modalIndex}
        setCurrentIndex={setModalIndex}
      />
    </>
  );
};



export const CategoryPosts = ({ posts }) => {
  // 1. Obtener las publicaciones de forma segura desde las props
  const currentPosts = posts || [];

  // Si no hay posts en esta sección de la empresa, no renderizamos nada
  if (currentPosts.length === 0) return null;

  return (
    <section className="w-full mb-10">
      <div className="space-y-10">
        <h2 className="text-xl md:text-2xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest reveal-text">
          Publicaciones
        </h2>

        {/* Pasamos todas las variables calculadas que el componente Posts necesita */}
        <Posts
          currentPosts={currentPosts}
        />
      </div>
    </section>
  );
};