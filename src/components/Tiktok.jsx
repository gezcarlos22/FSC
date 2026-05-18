import React, { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const instagramPosts = [
  { id: 1, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Momentos inspiradores..." },
  { id: 2, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Detalles suaves..." },
  { id: 3, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Street style..." },
  { id: 4, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Momentos inspiradores 2..." },
  { id: 5, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Detalles suaves 2..." },
];

export default function InstagramSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Detectar el tamaño de la pantalla para ajustar cuántos posts se ven en pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Pantalla grande (lg)
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Pantalla mediana (md)
      } else {
        setItemsPerPage(1); // Pantalla pequeña / móvil
      }
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total de pasos posibles en el carrusel
  const maxIndex = Math.max(0, instagramPosts.length - itemsPerPage);

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  // Autoplay (opcional, ajustado al maxIndex)
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
    <section className="relative w-full z-20 overflow-hidden bg-black pt-12">
      <div className=" mx-auto text-white justify-center items-center flex">
        <div className="relative max-w-6xl overflow-hidden rounded-2xl">
          <div className="absolute inset-0 pointer-events-none" />

          {/* Contenedor Enmascarado para el deslizamiento */}
          <div className="overflow-hidden w-full">
            <motion.div
              animate={{ x: `-${activeIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex w-full"
            >
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                >
                  <div className="relative md:rounded-[1rem] md:border md:border-white/10 md:bg-slate-950/85 md:p-4 md:shadow-2xl md:shadow-cyan-500/10 md:backdrop-blur-2xl">
                    <div className="overflow-hidden border border-white/10 bg-black/80 rounded-lg">
                      <InstagramEmbed url={post.url} captioned placeholderDisabled />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controles e Indicadores */}
          <div className="mt-8 flex flex-col gap-6 md:flex-row items-center justify-center">
            <div className="flex items-center gap-6">
              
              {/* Botón Izquierdo */}
              <button
                onClick={previous}
                className="p-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group active:scale-90"
                aria-label="Anterior"
              >
                <ArrowLeft size={18} className="group-active:-translate-x-1 transition-transform" />
              </button>

              {/* Dots Dinámicos basados en la cantidad de páginas/desplazamientos reales */}
              <div className="flex gap-2 items-center">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "w-8 bg-cyan-500" : "w-2 bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Ir al bloque ${i + 1}`}
                  />
                ))}
              </div>

              {/* Botón Derecho */}
              <button
                onClick={next}
                className="p-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group active:scale-90"
                aria-label="Siguiente"
              >
                <ArrowRight size={18} className="group-active:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}