import React, { useRef, useState} from "react";
import { TiktokModal } from "./Modal";

const tiktokUrls = [
  "https://www.tiktok.com/@fedesosacristiani/video/7375192622358449414",
  "https://www.tiktok.com/@fedesosacristiani/video/7375192622358449414",
  "https://www.tiktok.com/@fedesosacristiani/video/7375192622358449414",
  "https://www.tiktok.com/@fedesosacristiani/video/7375192622358449414",
  "https://www.tiktok.com/@fedesosacristiani/video/7375192622358449414",
];

export default function TiktokSection({ setIsModalOpen: setGlobalModalOpen }) {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Estados para el arrastre (drag)
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);

  const getTiktokId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1] || parts[parts.length - 2];
  };

  // Manejadores de eventos para el arrastre
  const handleMouseDown = (e) => {
    setIsDown(true);
    setMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    setMoved(true);
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDown(false);

  const handleOpenModal = (index) => {
    // Si hubo mucho movimiento, no abrimos el modal (fue un drag, no un click)
    if (moved) return;
    setSelectedIndex(index);
    setIsModalOpen(true);
    if (setGlobalModalOpen) setGlobalModalOpen(true);
  };

  return (
    <section className="relative w-full z-20 h-[70vh] md:h-[85vh] bg-black flex items-center overflow-hidden">
      {/* Contenedor del Carrusel Centrado */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDown(false)}
        className={`flex gap-6 overflow-x-auto no-scrollbar py-10 px-[15%] md:px-[40%] w-full h-full items-center snap-x snap-mandatory ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {tiktokUrls.map((url, idx) => {
          const videoId = getTiktokId(url);
          // URL de la miniatura oficial de TikTok (Thumbnail)
          const thumbnailUrl = `https://www.tiktok.com/api/v2/video/proxy?format=webp&video_id=${videoId}`;

          return (
            <div 
              key={idx}
              onClick={() => handleOpenModal(idx)}
              className="flex-none aspect-[9/16] h-[50vh] md:h-[65vh] lg:h-[75vh] snap-center rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl transition-transform duration-300 hover:scale-105 relative group"
            >
              {/* Imagen de Previsualización */}
              <img 
                src={thumbnailUrl} 
                alt="TikTok Preview"
                className="w-full h-full object-cover pointer-events-none select-none"
                loading="lazy"
              />
              
              {/* Overlay de Play Icon */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-colors">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      <TiktokModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          if (setGlobalModalOpen) setGlobalModalOpen(false);
        }}
        videos={tiktokUrls} 
        currentIndex={selectedIndex}
        setCurrentIndex={setSelectedIndex}
      />
    </section>
  );
}