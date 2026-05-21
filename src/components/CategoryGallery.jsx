import React, { useState } from 'react';
import { ImageModal } from './Modal';

export const CategoryGallery = ({ images }) => {
  // 1. Declaramos los estados adentro del cuerpo del componente
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Manejador para cuando hacen click en una imagen
  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="space-y-10">
        <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest reveal-text">
          Galería
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="reveal-text group relative h-48 md:h-80 overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-2xl"
              onClick={() => handleImageClick(i)} // 2. Usamos el manejador local
            >
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

      {/* 3. Corregido 'category.images' por 'images' que viene de las props */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={images} 
        currentIndex={selectedIndex} 
        setCurrentIndex={setSelectedIndex}
      />
    </section>
  );
};
