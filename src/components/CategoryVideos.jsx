import React, { useState} from 'react';
import { VideoModal } from './Modal';

export const CategoryVideos = ({ videos }) => {
  // 1. Estados locales para controlar el ciclo del modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!videos?.length) return null;

  // Manejador para abrir el video seleccionado
  const handleVideoClick = (index) => {
    setSelectedIndex(index);
    setIsVideoModalOpen(true);
  };

  return (
    <section className="mb-10">
      {/* --- GRILLA DE VIDEOS --- */}
      <div className="space-y-10">
        <h2 className="text-xl md:text-2xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest reveal-text">
          Videos
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, i) => (
            <div
              key={video.title}
              className="reveal-text rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl cursor-pointer hover:border-white/30 transition-colors"
              onClick={() => handleVideoClick(i)}
            >
              {/* 1. Agregamos "relative" al contenedor padre */}
              <div className="relative aspect-video pointer-events-none">
                <iframe 
                  src={video.url} 
                  title={video.title} 
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full" 
                  allowFullScreen 
                />
              </div>
              <div className="p-4 md:p-6">
                <p className="text-white/80 font-medium">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- COMPONENTE MODAL INTEGRADO --- */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videos={videos}
        currentIndex={selectedIndex}
        setCurrentIndex={setSelectedIndex}
      />
    </section>
  );
};


