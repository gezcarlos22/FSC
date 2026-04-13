import React, { useRef, useEffect, useState } from "react";
import { VideoModal } from "./Modal";

const videos = [
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771504070/WhatsApp_Video_2026-02-17_at_22.33.55_2_xyw05h.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771504007/WhatsApp_Video_2026-02-17_at_22.33.46_2_pj72ft.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771359844/WhatsApp_Video_2026-02-17_at_14.18.11_g4xire.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771503987/WhatsApp_Video_2026-02-17_at_22.33.44_1_nvpkf4.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771503914/WhatsApp_Video_2026-02-17_at_22.33.44_bftote.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771503945/WhatsApp_Video_2026-02-17_at_22.33.45_kfkmhu.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771503995/WhatsApp_Video_2026-02-17_at_22.33.46_1_oqtruw.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771503959/WhatsApp_Video_2026-02-17_at_22.33.45_1_aenkxb.mp4",
  "https://res.cloudinary.com/dmixd7wpb/video/upload/v1771359823/WhatsApp_Video_2026-02-17_at_14.18.08_tnnffj.mp4"
];

export default function VideoSection({ setIsModalOpen: setGlobalModalOpen }) {
  const trackRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5; 
    let animationFrameId;

    const loop = () => {
      position -= speed;
      if (position <= -track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleOpenModal = (index) => {
    setSelectedIndex(index % videos.length);
    setIsModalOpen(true);
    if (setGlobalModalOpen) setGlobalModalOpen(true); // Oculta el Header
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (setGlobalModalOpen) setGlobalModalOpen(false); // Muestra el Header
  };

  return (
    <section className="relative w-full z-1 h-[75vh] md:h-[80vh] lg:h-[92vh] overflow-hidden bg-black flex items-center">
      <div 
        className="flex gap-4 md:gap-6 lg:gap-8 w-max will-change-transform cursor-pointer" 
        ref={trackRef}
      >
        {[...videos, ...videos].map((url, idx) => (
          <div 
            key={idx} 
            onClick={() => handleOpenModal(idx)}
            className="flex-none aspect-[9/16] h-[58vh] md:h-[62vh] lg:h-[75vh] overflow-hidden rounded-xl shadow-sm hover:scale-105 transition-transform duration-500"
          >
            <video 
              src={url} 
              muted 
              autoPlay 
              loop 
              playsInline 
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videos={videos} 
        currentIndex={selectedIndex}
        setCurrentIndex={setSelectedIndex}
      />
    </section>
  );
}