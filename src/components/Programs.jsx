import React, { useRef, useEffect } from "react";

// Listado de logos (usando iconos de marcas populares en gris)
const logos = [
  { id: 1, name: "Adobe Photoshop", url: "https://img.icons8.com/color/512/adobe-photoshop--v1.png" },
  { id: 2, name: "Adobe Lightroom", url: "https://img.icons8.com/color/512/adobe-lightroom.png" },
  { id: 3, name: "Adobe Premiere Pro", url: "https://img.icons8.com/color/512/adobe-premiere-pro.png" },
  { id: 4, name: "Adobe After Effects", url: "https://img.icons8.com/color/512/adobe-after-effects.png" },
  { id: 5, name: "DaVinci Resolve", url: "https://img.icons8.com/color/512/davinci-resolve.png" },
  { id: 7, name: "Blender", url: "https://img.icons8.com/color/512/blender-3d.png" },
  { id: 8, name: "Canva", url: "https://img.icons8.com/color/512/canva.png" },
];

export default function Programs() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.8; // Ajusta este valor para cambiar la velocidad
    let animationFrameId;

    const animate = () => {
      position -= speed;
      
      // Cuando la mitad del contenido (el set original) sale de vista, reseteamos
      // Usamos scrollWidth / 2 porque duplicamos el array en el render
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      
      track.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Limpieza al desmontar el componente
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative z-1 w-full bg-black overflow-hidden">

      <div className="relative flex items-center">
        {/* Gradientes laterales para efecto de desvanecido (opcional pero queda muy pro) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <div 
          ref={trackRef}
          className="flex items-center gap-16 whitespace-nowrap will-change-transform"
        >
          {/* Duplicamos los logos para que el loop sea fluido */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="flex-none flex items-center justify-center w-32 md:w-44"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-20 md:h-24 w-auto object-contain transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}