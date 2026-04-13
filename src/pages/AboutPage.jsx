import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, Sparkles, Wand2, GraduationCap, Briefcase, Heart, Cpu, Maximize, Layers, Zap, Target, Palette } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Componentes locales
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageModal } from '../components/Modal';
import Contact from '../components/Contact';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);

  const aboutData = {
    title: "Sobre Mí",
    subtitle: "Visual Storyteller",
    extra: "Soy un apasionado creador visual con más de 5 años de experiencia capturando momentos únicos y narrativas poderosas a través de la lente. Mi enfoque combina la precisión técnica de la ingeniería con una sensibilidad artística innovadora, permitiéndome abordar cada proyecto desde una perspectiva dual: la estructura y la emoción. Creo firmemente que cada imagen es un fragmento de una historia mayor, y mi misión es asegurar que esa historia se cuente con la máxima fidelidad visual y un impacto emocional duradero, utilizando tecnología de vanguardia para romper los límites de lo convencional.",
  
  // Highlights con iconos específicos y texto extendido
  highlights: [
    {
      title: "Iluminación Cinematográfica",
      desc: "Dominio de esquemas de luz complejos para crear atmósferas que narran por sí solas.",
      icon: <Sparkles className="text-purple-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Color Grading Avanzado",
      desc: "Tratamiento de color profesional para evocar sensaciones y mantener coherencia visual.",
      icon: <Palette className="text-blue-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Narrativa para Marcas",
      desc: "Transformo valores corporativos en piezas visuales que conectan con la audiencia real.",
      icon: <Target className="text-red-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Captura de Alta Fidelidad",
      desc: "Flujos de trabajo en 4K/6K Raw para obtener la máxima flexibilidad y detalle técnico.",
      icon: <Zap className="text-yellow-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Dirección Artística",
      desc: "Coordinación integral de estética, vestuario y escenografía para un look unificado.",
      icon: <Layers className="text-cyan-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Composición Técnica",
      desc: "Uso de reglas geométricas y equilibrio visual para guiar la mirada del espectador.",
      icon: <Maximize className="text-green-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Post-producción Digital",
      desc: "Montaje rítmico y efectos visuales sutiles que elevan la calidad del producto final.",
      icon: <Cpu className="text-indigo-500 mb-4 group-hover:scale-125 transition-transform" />
    },
    {
      title: "Enfoque en Autenticidad",
      desc: "Priorizo la captura de momentos espontáneos sobre las poses rígidas y artificiales.",
      icon: <Heart className="text-pink-500 mb-4 group-hover:scale-125 transition-transform" />
    }
  ],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80"
    ]
  };

  useLayoutEffect(() => {
    // 1. Smooth Scroll con Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Animaciones Parallax
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray('.parallax-img');
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      // Animación de aparición para las tarjetas de texto
      gsap.utils.toArray('.reveal-text').forEach((text) => {
        gsap.from(text, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
          }
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const imageContBase = "relative overflow-hidden h-[70vh] lg:h-[85vh] rounded-[2rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02]";
  const imgStyle = "parallax-img absolute w-full h-[150%] object-cover -top-[25%] left-0";

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* --- HERO PRINCIPAL --- */}
      <AboutHero category={aboutData} />

      {/* --- CONTENIDO FUSIONADO (GRID PARALLAX + DATA) --- */}
      <main className="relative z-20">
        
        {/* Capas de Iluminación de fondo */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-[40%] w-[60%] h-[40%] bg-blue-600/25 blur-[160px] rotate-12" />
        <div className="absolute bottom-[20%] -right-[40%] w-[60%] h-[40%] bg-violet-700/25 blur-[160px] -rotate-12" />
        </div>

        <section className="container mx-auto max-w-7xl px-6 grid grid-cols-12 gap-x-6 gap-y-20 md:gap-y-32 pt-20">
          
          {/* BLOQUE 1: Bio + Imagen Full */}
          <div className="col-span-12 reveal-text">
             <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-7xl">
               {aboutData.extra}
             </p>
          </div>

          {/* BLOQUE 2: Cards Tech + Imagen Lateral */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8 reveal-text">
            <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest">
                Habilidades & Enfoque
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
                {aboutData.highlights.map((item, i) => (
                <div 
                    key={i} 
                    className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:translate-y-[-5px] backdrop-blur-sm"
                >
                    {/* Renderizado dinámico del icono */}
                    {item.icon}
                    
                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                    </h3>
                    
                    <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                    </p>
                </div>
                ))}
            </div>
            </div>

          <div className={`${imageContBase} col-span-12 lg:col-span-5 h-[60vh] lg:h-full mt-12 lg:mt-0`}>
             <img className={imgStyle} src={aboutData.images[2]} alt="Work 2" />
          </div>


          {/* BLOQUE 4: Imagen Desplazada + Info Trayectoria */}
          <div className={`${imageContBase} col-span-12 lg:col-span-6 h-[70vh]`}>
             <img className={imgStyle} src={aboutData.images[4]} alt="Work 3" />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-12 reveal-text">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-[0.2em] flex items-center gap-3 mb-8">
                <GraduationCap className="text-purple-500" /> Formación
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition">
                  <h4 className="font-bold text-xl">Artes Audiovisuales</h4>
                  <p className="text-sm text-white/50 tracking-widest uppercase mt-1">Univ. Nacional de Artes | 2018-2021</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition">
                  <h4 className="font-bold text-xl">Artes Audiovisuales</h4>
                  <p className="text-sm text-white/50 tracking-widest uppercase mt-1">Univ. Nacional de Artes | 2018-2021</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold uppercase tracking-[0.2em] flex items-center gap-3 mb-8">
                <Briefcase className="text-cyan-500" /> Experiencia
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition">
                  <h4 className="font-bold text-xl">Senior Videographer</h4>
                  <p className="text-sm text-white/50 tracking-widest uppercase mt-1">Studio Nova | 2023 - Presente</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition">
                  <h4 className="font-bold text-xl">Senior Videographer</h4>
                  <p className="text-sm text-white/50 tracking-widest uppercase mt-1">Studio Nova | 2023 - Presente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 space-y-12">
              <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest reveal-text">
                  Mi Galería
              </h2>

              {/* Agregamos grid-cols-2 para móvil por defecto */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {aboutData.images.map((src, i) => (
                      <div 
                          key={i} 
                          className="group relative h-48 md:h-72 overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-xl reveal-text" 
                          onClick={() => { setSelectedIndex(i); setIsModalOpen(true); }}
                      >
                          {/* IMAGEN: Mantiene su efecto de escala al hacer hover */}
                          <img
                              src={src}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                              alt={`Gallery ${i}`}
                          />

                          {/* OVERLAY: Gradiente elegante */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                  ))}
              </div>
          </div>

        </section>
      </main>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={aboutData.images} 
        currentIndex={selectedIndex} 
        setCurrentIndex={setSelectedIndex}
      />

      <Contact />
      <Footer />
    </div>
  );
};

/* --- SUBCOMPONENTE HERO (SIN CAMBIOS) --- */
const AboutHero = ({ category }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % category.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [category]);

  return (
    <section className="relative z-10 h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Animado */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImgIndex}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.images[currentImgIndex]})` }}
        >
          {/* Bajamos la opacidad de bg-black/60 a bg-black/30 para igualar la referencia */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* UI de Cámara (HUD) - Reconstruido completo */}
      <div className="absolute inset-0 z-10 pointer-events-none border-[20px] border-transparent md:border-[40px]">
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/50" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white/50" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white/50" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/50" />
        
        {/* Etiqueta REC Vertical */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <p className="text-[10px] tracking-[0.5em] text-white/50 uppercase [writing-mode:vertical-lr] rotate-180">
            REC ● 4K 60FPS ISO 400
          </p>
        </div>
        
        {/* Etiqueta LIVE */}
        <div className="absolute right-10 bottom-10 bg-red-600 px-3 py-1 text-[10px] font-bold rounded-sm animate-pulse">
          LIVE
        </div>
      </div>

      {/* Título Estilo Y2K */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-[0.3em] uppercase bg-white text-black rounded-full">
            {category.subtitle}
          </p>
          
          <h1 className="text-7xl md:text-[12rem] font-black uppercase leading-none tracking-tighter transition-all duration-700 select-none">
            <span className="block text-transparent stroke-white" 
                  style={{ WebkitTextStroke: '2px white' }}>
              {category.title}
            </span>
          </h1>
          
          {/* Agregado el indicador de Scroll que faltaba en el About original */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs tracking-[0.5em] uppercase opacity-60">
            <span className="h-[1px] w-12 bg-white"></span>
            Scroll to enter
            <span className="h-[1px] w-12 bg-white"></span>
          </div>
        </motion.div>
      </div>

      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-10" />
    </section>
  );
};

export default AboutPage;