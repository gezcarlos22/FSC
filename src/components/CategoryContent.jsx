import React, { useLayoutEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { CategoryDetails } from './CategoryDetails';
import { CategoryGallery } from './CategoryGallery';
import { CategoryVideos } from './CategoryVideos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export const CategoryContent = ({ category }) => {
  
  // Referencia al contenedor principal para GSAP
  const containerRef = useRef(null);

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

    // 2. Animaciones con GSAP
    const ctx = gsap.context(() => {
      // Parallax en las imágenes de la galería
      gsap.utils.toArray('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      // Efecto de aparición (Reveal) para textos y secciones
      gsap.utils.toArray('.reveal-text').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);


  return (
    <section ref={containerRef} className="space-y-20 md:space-y-32 pt-20 overflow-hidden">
      
      {/* CAPA DE LUZ (Blobs) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] rotate-12 opacity-30">
          <div className="w-full h-full blur-[120px]" style={{ background: 'linear-gradient(90deg, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)', borderRadius: '100% 0% 100% 0% / 50% 100% 0% 50%' }} />
        </div>
        <div className="absolute bottom-[5%] -right-[10%] w-[80%] h-[60%] -rotate-12 opacity-25">
          <div className="w-full h-full blur-[100px]" style={{ background: 'linear-gradient(270deg, #8b5cf6 0%, rgba(139, 92, 246, 0) 100%)', borderRadius: '0% 100% 0% 100% / 100% 50% 50% 0%' }} />
        </div>
      </div>

      <CategoryDetails
        extra={category.extra}
        highlights={category.highlights}
      />

      <CategoryGallery images={category.images} />

      <CategoryVideos
        videos={category.videos}
      />

    </section>
  );
};