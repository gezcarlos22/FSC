import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { ImageModal } from './Modal'; 

export const EducacionSeccion = () => {
  // 1. Convertimos tus divs en una lista de datos con la propiedad de su imagen
  const estudios = [
    {
      id: 0,
      titulo: "Técnico en Comunicación Audiovisual",
      institucion: "La Metro | 2021-2025",
      imagen: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1779762571/ANALITICO_LA_METRO_FEDERICO_SOSA_CRISTIANI_page-0001_bj5r1i.jpg" // Cambia por tus URLs reales
    },
    {
      id: 1,
      titulo: "Eléctrico para Cine y TV",
      institucion: "La Lumiere | 2023",
      imagen: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1779754258/Certificado_1_uhdsoj.jpg" 
    },
    {
      id: 2,
      titulo: "Formación Profecional en KEY GRIP",
      institucion: "La Lumiere | 2023",
      imagen: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1779754257/Certificado_2_dr8cxr.jpg"
    }
  ];

  // 2. Estados para controlar el Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Creamos un arreglo simple de imágenes solo con las URLs para pasárselo al modal original
  const listaImagenes = estudios.map(estudio => estudio.imagen);

  const abrirModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
  {estudios.map((estudio, idx) => (
    <div
      key={estudio.id}
      onClick={() => abrirModal(idx)}
      className="group p-4 md:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition flex items-center justify-between cursor-pointer gap-4"
    >
      {/* Textos del estudio */}
      <div className="min-w-0"> {/* "min-w-0" evita que textos muy largos rompan el diseño en móviles */}
        <h4 className="font-bold text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors md:whitespace-normal">
          {estudio.titulo}
        </h4>
        <p className="text-xs md:text-sm text-white/50 tracking-widest uppercase mt-1 line-clamp-2 md:line-clamp-none">
          {estudio.institucion}
        </p>
      </div>

      {/* Botón / Icono de "Ver más" - MODIFICADO */}
      <div className="flex items-center justify-center gap-2 p-3 md:px-4 md:py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/70 group-hover:bg-white/10 group-hover:text-white transition-all whitespace-nowrap shrink-0">
        {/* "hidden md:inline" oculta el texto en móvil y lo muestra en escritorio */}
        <span className="hidden md:inline">Ver más</span>
        <Eye className="w-5 h-5 md:w-4 md:h-4" />
      </div>
    </div>
  ))}

  {/* 3. Renderizador del Modal pasándole las propiedades */}
  <ImageModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    images={listaImagenes}
    currentIndex={currentIndex}
    setCurrentIndex={setCurrentIndex}
  />
</div>
  );
};