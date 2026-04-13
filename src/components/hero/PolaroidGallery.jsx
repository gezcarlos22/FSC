import React, { useState, useEffect, useRef, useCallback } from 'react';

const PolaroidGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  
  // Compute initial rotations
  const initialRotations = images.map((_, index) => Math.sin(index * 7) * 20);

  const [positions, setPositions] = useState(() => 
    images.map((_, index) => ({
      x: (index - (images.length - 1) / 2) * 160,
      y: Math.sin(index * 12) * 40,
      rotate: initialRotations[index],
    }))
  );

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

    setPositions(prev => {
      const newPos = [...prev];
      // Mientras arrastramos, la rotación es 0 para que sea más fácil de ver
      newPos[draggingIndex] = { ...newPos[draggingIndex], x: newX, y: newY, rotate: 0 };
      return newPos;
    });
  }, [draggingIndex]);

  const handleMouseUp = useCallback(() => {
    if (draggingIndex !== null) {
      // Al soltar, restauramos la rotación original guardada en la referencia
      const originalRotate = initialRotations[draggingIndex];
      setPositions(prev => {
        const newPos = [...prev];
        newPos[draggingIndex] = { ...newPos[draggingIndex], rotate: originalRotate };
        return newPos;
      });
      setDraggingIndex(null);
    }
  }, [draggingIndex, initialRotations]);

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
    <div className="relative w-full h-[300px] flex items-center justify-center select-none overflow-visible">
      {images.map((img, index) => {
        const isActive = activeIndex === index;
        const isDragging = draggingIndex === index;
        const pos = positions[index];

        return (
          <div
            key={`${img}-${index}`}
            onMouseDown={(e) => handleMouseDown(e, index)}
            className={`
              absolute cursor-grab active:cursor-grabbing
              bg-white p-4 shadow-2xl border border-gray-200
              ${isActive ? 'z-[100]' : 'z-10'}
              ${isDragging ? 'transition-none' : 'transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)'}
            `}
            style={{
              width: '280px',
              // Usamos pos.rotate que ahora se actualiza al soltar el mouse
              transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg) scale(${isActive ? 1.1 : 1})`,
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

            <div className="mt-6 flex flex-col gap-3 pointer-events-none">
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-bold font-mono text-gray-400">#{index + 1}</span>
                <p className="text-[11px] font-bold font-mono text-gray-500 uppercase tracking-widest">
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