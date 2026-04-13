import React, { useState, useEffect } from "react";
import { Camera, Focus, Layers, Monitor, Aperture } from "lucide-react";
import { motion } from "framer-motion";

export default function Equipament() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const equipData = [
    {
      src: "https://photolari.com/wp-content/uploads/2019/03/Nikon-D3500-6.jpg",
      label: "Cuerpo",
      title: "Nikon D7500",
      icon: <Camera className="w-6 h-6 text-white" />
    },
    {
      src: "https://efd-studios.com/wp-content/uploads/sites/4/fly-images/2348/GUIA_OBJETIVOS_DE_CAMARA_1-1440x1200-c.jpg",
      label: "Óptica",
      title: "Lentes de Cine",
      icon: <Aperture className="w-6 h-6 text-white" />
    },
    {
      src: "https://i0.wp.com/clubdefotografia.net/wp-content/uploads/2020/06/tipos-de-objetivos-fotograficos.jpg?resize=720%2C480&ssl=1",
      label: "Enfoque",
      title: "Objetivos Prime",
      icon: <Focus className="w-6 h-6 text-white" />
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/mGxqeuzhjUJ3bgnMTk9oqT.jpg",
      label: "Drone",
      title: "DJI mini 4 pro",
      icon: <Layers className="w-6 h-6 text-white" />
    },
    {
      src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6cfe17f5-b36b-4793-9b4d-6dde12f4b415.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      label: "Gimbal",
      title: "DJI Ronin-S",
      icon: <Monitor className="w-6 h-6 text-white" />
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section id="Equipment" className="relative z-1 w-full flex flex-col items-center justify-start py-12 lg:py-30 bg-black">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h2 className="mt-4 pb-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
          Tecnología de vanguardia para resultados impecables.
        </h2>
        <p className="text-lg font-medium text-gray-400 font-pj">
          Desde el disparo con cámaras de alta gama hasta el revelado digital avanzado.
        </p>
      </motion.div>

      <div className="flex flex-row items-center gap-2 h-[500px] md:h-[450px] w-full max-w-6xl mt-10 px-4 overflow-hidden">
        {equipData.map((item, idx) => {
          const isActiveMobile = activeIdx === idx;
          // Lógica para mostrar todos en desktop, en móvil solo el actual y los 2 de al lado
          const isNearby = !isMobile || Math.abs(activeIdx - idx) <= 1;
          
          return (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => setActiveIdx(idx)}
              // En móvil: si no está cerca, ancho 0 y oculto.
              className={`relative group cursor-pointer transition-all duration-700 ease-in-out rounded-2xl overflow-hidden h-full border border-gray-800
                ${isNearby ? "flex-[1] opacity-100" : "flex-[0] opacity-0 pointer-events-none border-none"}
                ${isActiveMobile ? "flex-[10] md:flex-grow" : ""} 
                md:flex-grow md:opacity-100 md:pointer-events-auto md:border md:hover:flex-[4]`} 
            >
              {/* Imagen */}
              <img
                className={`h-full w-full object-cover object-center transition-transform duration-700 
                  md:group-hover:scale-110 ${isActiveMobile ? "scale-110" : "scale-100"}`}
                src={item.src}
                alt={item.title}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent transition-opacity duration-500 
                md:opacity-0 md:group-hover:opacity-100 
                ${isActiveMobile ? "opacity-100" : "opacity-0"}`} 
              />

              {/* Contenedor de la descripción */}
              <div className={`absolute bottom-6 left-4 right-4 md:left-6 md:right-6 transition-all duration-500 
                md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
                ${isActiveMobile ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-700/50">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
                    {item.icon}
                  </div>
                  
                  <div className="overflow-hidden">
                    <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Texto vertical (Móvil) */}
              <div className={`absolute inset-0 flex items-center justify-center md:hidden transition-opacity duration-300
                ${isActiveMobile ? "opacity-0" : "opacity-100"}`}>
                 <div className="rotate-90 text-white/60 font-bold tracking-widest text-[10px] uppercase whitespace-nowrap">
                   {item.label}
                 </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Puntos de navegación */}
      <div className="flex gap-2 mt-6 md:hidden">
        {equipData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? "w-8 bg-cyan-500" : "w-2 bg-gray-700"}`}
          />
        ))}
      </div>
    </section>
  );
}