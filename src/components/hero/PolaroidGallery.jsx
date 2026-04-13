import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const PolaroidGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detector de móvil
  const dragStartPos = useRef({ x: 0, y: 0 });
  
  // 1. Escuchar cambios de tamaño para ajustar dimensiones al vuelo
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialRotations = useMemo(() => images.map((_, index) => Math.sin(index * 7) * 20), [images]);

  // 2. Ajustar la dispersión (x, y) según si es móvil o desktop usando useMemo
  const positions = useMemo(() => 
    images.map((_, index) => {
      const spreadX = isMobile ? 80 : 160; // Menos dispersión en móvil
      const spreadY = isMobile ? 20 : 40;
      return {
        x: (index - (images.length - 1) / 2) * spreadX,
        y: Math.sin(index * 12) * spreadY,
        rotate: initialRotations[index],
      };
    }), [images, isMobile, initialRotations]
  );

  // Estado para posiciones modificadas por drag
  const [draggedPositions, setDraggedPositions] = useState({});

  const handleMouseDown = (e, index) => {
    setActiveIndex(index);
    setDraggingIndex(index);
    dragStartPos.current = {
      x: e.clientX - positions[index].x,
      y: e.clientY - positions[index].y
    };
  };

  const handleMouseMove = useCallback((e) => {
    if (draggingIndex === null) return;
    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;
    setDraggedPositions(prev => ({
      ...prev,
      [draggingIndex]: { x: newX, y: newY, rotate: 0 }
    }));
  }, [draggingIndex]);

  const handleMouseUp = useCallback(() => {
    if (draggingIndex !== null) {
      setDraggedPositions(prev => {
        const newDragged = { ...prev };
        delete newDragged[draggingIndex];
        return newDragged;
      });
      setDraggingIndex(null);
    }
  }, [draggingIndex]);

  useEffect(() => {
    if (draggingIndex !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingIndex, handleMouseMove, handleMouseUp]);

  return (
    /* Reducimos la altura del contenedor en móvil (h-[220px] vs h-[300px]) */
    <div className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center select-none overflow-visible">
      {images.map((img, index) => {
        const isActive = activeIndex === index;
        const isDragging = draggingIndex === index;
        const pos = draggedPositions[index] || positions[index]; 
        return (
          <div
            key={`${img}-${index}`}
            onMouseDown={(e) => handleMouseDown(e, index)}
            className={`
              absolute cursor-grab active:cursor-grabbing
              bg-white p-3 md:p-4 shadow-2xl border border-gray-200
              ${isActive ? 'z-[100]' : 'z-10'}
              ${isDragging ? 'transition-none' : 'transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)'}
            `}
            style={{
              /* ANCHO DINÁMICO: 200px en móvil, 280px en desktop */
              width: isMobile ? '150px' : '280px',
              transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg) scale(${isActive ? 1.05 : 1})`,
              opacity: 1,
            }}
          >
            <div className="relative overflow-hidden bg-black aspect-square pointer-events-none">
              <img
                src={img}
                alt={`FSC Proyect ${index}`}
                className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}
              />
            </div>

            {/* Reducimos el margen y tamaño de texto en móvil */}
            <div className="mt-3 md:mt-6 flex flex-col gap-2 md:gap-3 pointer-events-none">
              <div className="flex justify-between items-center px-1">
                <span className="text-[8px] md:text-[10px] font-bold font-mono text-gray-400">#{index + 1}</span>
                <p className="text-[9px] md:text-[11px] font-bold font-mono text-gray-500 uppercase tracking-widest">
                  FSC AUDIOVISUAL
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PolaroidGallery;