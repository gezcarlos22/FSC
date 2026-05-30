import React, { useState } from 'react';
import { CategoryGallery } from './CategoryGallery';
import { CategoryVideos } from './CategoryVideos';
import { CategoryPosts } from './CategoryPosts';

// 1. Creamos un subcomponente independiente para cada sección del arreglo
const AccordionItem = ({ currentSection }) => {
  // Cada acordeón maneja su propio estado de apertura
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full mb-8">
      {/* Único botón disparador estilo Acordeón */}
      <div className="mb-6 flex flex-row items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex w-full items-center justify-center gap-3 rounded-3xl border p-2 md:p-4 transition-all duration-300 hover:border-cyan-400/50 ${
            isOpen
              ? "[border:1px_solid_transparent] [background-image:linear-gradient(to_right,#09090b,#09090b),linear-gradient(to_right,#06b6d4,#a855f7)] [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] shadow-[0_0_25px_rgba(6,182,212,0.15)]"
              : "border-white/10 bg-white/5"
          }`}
        >
          {/* Logo condicional */}
          {currentSection.logo && (
            <div className="flex h-12 w-16 md:w-26 items-center justify-center">
              <img 
                src={currentSection.logo} 
                loading="lazy"
                decoding="async"
                alt={`${currentSection.title} logo`} 
                className="object-cover" 
              />
            </div>
          )}
          
          {/* Contenido Central: Título */}
          <div className={`${currentSection.logo ? 'hidden md:block' : 'block'} text-left px-2`}>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">{currentSection.title}</h2>
          </div>

          {/* Ícono de flecha posicionado en ABSOLUTO a la derecha */}
          <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
            <svg
              className={`h-6 w-6 text-white/70 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Bloque desplegable: Renderiza ambos componentes uno abajo del otro */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-6 transition-all duration-300">
          <CategoryGallery images={currentSection.images} />
          <CategoryVideos videos={currentSection.videos} />
          <CategoryPosts posts={currentSection.posts} />
        </div>
      )}
    </div>
  );
};

// 2. Componente principal que recibe el arreglo completo "section"
export const CategorySection = ({ section }) => {
  // Validación por si la data viene vacía o nula
  if (!section || section.length === 0) return null;

  return (
    <section className="w-full flex flex-col">
      {section.map((item, index) => (
        <AccordionItem 
          key={item.title || index} 
          currentSection={item} 
        />
      ))}
    </section>
  );
};

