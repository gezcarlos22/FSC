import React, { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {FaInstagram} from "react-icons/fa6";
import { PostInstagramModal } from "./Modal";

const companyTabs = [
  {
    id: "brand-one",
    name: "Empresa A",
    logo: "/logo.png",
    posts: [
      { id: 1, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Momentos inspiradores de Empresa A" },
      { id: 2, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Look urbano A" },
      { id: 3, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Detalles creativos A" },
      { id: 4, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Detalles creativos A" },
    ],
  },
  {
    id: "brand-two",
    name: "Empresa B",
    logo: "/logos/riiing/riiing_png.png",
    posts: [
      { id: 5, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Publicación clave Empresa B" },
      { id: 6, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Estilo elegante B" },
      { id: 7, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Atmósfera B" },
      { id: 8, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Atmósfera B" },
    ],
  },
  {
    id: "brand-three",
    name: "Empresa C",
    logo: "/logo.png",
    posts: [
      { id: 9, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Inspiración Empresa C" },
      { id: 10, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Detalles dinámicos C" },
      { id: 11, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Energía creativa C" },
      { id: 12, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Energía creativa C" },
    ],
  },
];

export default function InstagramSection() {
  const [activeTab, setActiveTab] = useState(companyTabs[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const activeCompany = companyTabs.find((company) => company.id === activeTab);
  const currentPosts = activeCompany?.posts || [];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, currentPosts.length - itemsPerPage);
  const displayIndex = Math.min(activeIndex, maxIndex);

  const previous = () => {
    setActiveIndex(displayIndex === 0 ? maxIndex : displayIndex - 1);
  };

  const next = () => {
    setActiveIndex(displayIndex >= maxIndex ? 0 : displayIndex + 1);
  };

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
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-white">
        <div className="w-full">
          <motion.div 
                                  initial={{ opacity: 0, y: 40 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1 }}
                                  className="text-center"
                              >
                                  <h2 className="mt-4 pb-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">Empresas que ya potenciaron su imagen con nosotros.</h2>
                                  <p className="text-lg font-medium text-gray-400 font-pj pb-12">Grandes organizaciones coinciden en la calidad que entregamos en cada proyecto.</p>
          
                              </motion.div>
          <div className="mb-6 flex flex-row items-center justify-center gap-4">
            {companyTabs.map((company) => {
              const isActive = company.id === activeTab;
              return (
                <button
                  key={company.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(company.id);
                    setActiveIndex(0);
                  }}
                  className={`flex items-center gap-3 rounded-3xl border p-2 md:p-4 transition-all duration-300 hover:border-cyan-400/50 ${
                    isActive
                      ? "[border:1px_solid_transparent] [background-image:linear-gradient(to_right,#09090b,#09090b),linear-gradient(to_right,#06b6d4,#a855f7)] [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex h-12 w-16 md:w-26 items-center justify-center">
                    <img src={company.logo} alt={`${company.name} logo`} className="object-cover" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-white">{company.name}</p>
                    <p className="text-[11px] text-gray-400">Ver publicaciones</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${displayIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex w-full"
            >
              {currentPosts.map((post) => (
                <div key={post.id} className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
                  <div className="relative md:rounded-[1rem] md:border md:border-white/10 md:bg-slate-950/85 md:p-4 md:shadow-2xl md:shadow-cyan-500/10 md:backdrop-blur-2xl">
                    <div className="min-h-[520px] overflow-hidden border border-white/10 bg-black/80 rounded-lg">
                      <InstagramEmbed url={post.url} captioned placeholderDisabled />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row items-center justify-center">
            <div className="flex items-center gap-6">
              <button
                onClick={previous}
                className="p-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group active:scale-90"
                aria-label="Anterior"
              >
                <ArrowLeft size={18} className="group-active:-translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-2 items-center">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      displayIndex === i ? "w-8 bg-cyan-500" : "w-2 bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Ir al bloque ${i + 1}`}
                  />
                ))}
              </div>

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

export function InstagramSection2() {
  const companyTabs = [
  {
    id: "brand-one",
    name: "Empresa A",
    logo: "/logo.png", // Logo general de la empresa
    posts: [
      { 
        id: 1, 
        url: "https://www.instagram.com/p/CUbHfhpswxt/", 
        caption: "Momentos inspiradores de Empresa A",
        mediaUrl: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773963/A9_v7t7sl.jpg", // Foto del post
        username: "empresaa_ok", // Usuario de Instagram
        avatarUrl: "/logo.png", // Foto de perfil en la card
        date: "Hace 2 días"
      },
      { 
        id: 2, 
        url: "https://www.instagram.com/p/CUbHfhpswxt/", 
        caption: "Look urbano A",
        mediaUrl: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773963/A11_wjqy7m.jpg",
        username: "empresaa_ok",
        avatarUrl: "/logo.png",
        date: "Hace 1 semana"
      },
      { 
        id: 3, 
        url: "https://www.instagram.com/p/CUbHfhpswxt/", 
        caption: "Detalles creativos A",
        mediaUrl: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773960/A15_mcl6xz.jpg",
        username: "empresaa_ok",
        avatarUrl: "/logo.png",
        date: "Hace 3 semanas"
      },
      { 
        id: 4, 
        url: "https://www.instagram.com/p/CUbHfhpswxt/", 
        caption: "Detalles creativos A",
        mediaUrl: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773960/A8_huthw2.jpg",
        username: "empresaa_ok",
        avatarUrl: "/logo.png",
        date: "Hace 1 mes"
      },
    ],
  },
  {
    id: "brand-two",
    name: "Riiing",
    logo: "/logos/riiing/riiing_png.png",
    posts: [
      { 
        id: 5, 
        url: "https://www.instagram.com/p/CUbHfhpswxt/", 
        caption: "Publicación clave Empresa B",
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773953/P7_txsl0u.jpg',
        username: "empresa.b",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "Hace 3 días"
      },
      { id: 6, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Estilo elegante B", mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773956/P6_xqkxwq.jpg', username: "empresa.b", avatarUrl: "/logos/riiing/riiing.png", date: "Hace 5 días" },
      { id: 7, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Atmósfera B", mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773957/P11_u7jxlk.jpg', username: "empresa.b", avatarUrl: "/logos/riiing/riiing.png", date: "Hace 2 semanas" },
      { id: 8, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Atmósfera B", mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773954/P14_l9hry3.jpg', username: "empresa.b", avatarUrl: "/logos/riiing/riiing.png", date: "Hace 1 mes" },
    ],
  },
  {
    id: "brand-three",
    name: "He Mod",
    logo: "/logos/he-mod/he-mod_png.png",
    posts: [
      { 
        id: 9, 
        url: "https://www.instagram.com/p/CUbHfhpswxt/", 
        caption: "Inspiración Empresa C",
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773963/C8_qtcrpa.jpg',
        username: "branding.c",
        avatarUrl: "/logos/he-mod/he-mod.jpg",
        date: "Hace 1 día"
      },
      { id: 10, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Detalles dinámicos C", mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773967/C23_ay3nuq.jpg', username: "branding.c", avatarUrl: "/logos/he-mod/he-mod.jpg", date: "Hace 4 días" },
      { id: 11, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Energía creativa C", mediaUrl: "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773968/C22_bjojlf.jpg", username: "branding.c", avatarUrl: "/logos/he-mod/he-mod.jpg", date: "Hace 1 semana" },
      { id: 12, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Energía creativa C", mediaUrl: 'https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773965/C19_go6tu3.jpg', username: "branding.c", avatarUrl: "/logos/he-mod/he-mod.jpg", date: "Hace 2 meses" },
    ],
  },
];

  const [activeTab, setActiveTab] = useState(companyTabs[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const activeCompany = companyTabs.find((company) => company.id === activeTab);
  const currentPosts = activeCompany?.posts || [];

  // 2. ESTADOS PARA CONTROLAR EL MODAL:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, currentPosts.length - itemsPerPage);
  const displayIndex = Math.min(activeIndex, maxIndex);

  const previous = () => {
    setActiveIndex(displayIndex === 0 ? maxIndex : displayIndex - 1);
  };

  const next = () => {
    setActiveIndex(displayIndex >= maxIndex ? 0 : displayIndex + 1);
  };

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
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-white">
        <div className="w-full">
          <motion.div 
                                  initial={{ opacity: 0, y: 40 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1 }}
                                  className="text-center"
                              >
                                  <h2 className="mt-4 pb-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj"> Empresas que ya potenciaron su imagen con nosotros.</h2>
                                  <p className="text-lg font-medium text-gray-400 font-pj pb-12"> Grandes organizaciones coinciden en la calidad que entregamos en cada proyecto.</p>
          
                              </motion.div>
          <div className="mb-6 flex flex-row items-center justify-center gap-4">
            {companyTabs.map((company) => {
              const isActive = company.id === activeTab;
              return (
                <button
                  key={company.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(company.id);
                    setActiveIndex(0);
                  }}
                  className={`flex items-center gap-3 rounded-3xl border p-2 md:p-4 transition-all duration-300 hover:border-cyan-400/50 ${
                    isActive
                      ? "[border:1px_solid_transparent] [background-image:linear-gradient(to_right,#09090b,#09090b),linear-gradient(to_right,#06b6d4,#a855f7)] [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex h-12 w-16 md:w-26 items-center justify-center">
                    <img src={company.logo} alt={`${company.name} logo`} className="object-cover" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-white">{company.name}</p>
                    <p className="text-[11px] text-gray-400">Ver publicaciones</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden">
  <motion.div
    animate={{ x: `-${displayIndex * (100 / itemsPerPage)}%` }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="flex w-full"
  >
    {currentPosts.map((post, idx) => (
      <div key={post.id} className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
        {/* Contenedor principal de la Card */}
        <div onClick={() => { setModalIndex(idx); setIsModalOpen(true); }} className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl group cursor-pointer">
          
          {/* Imagen de fondo del Post */}
          <img 
            src={post.mediaUrl || "/placeholder-img.jpg"} 
            alt={`Post de ${post.username}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradiente oscuro inferior para legibilidad del texto */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Contenido inferior (User, Info y Logo) */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white">
            
            {/* Izquierda: Avatar y Datos */}
            <div className="flex items-center gap-3">
              {/* Avatar circular */}
              <div className="h-10 w-10 rounded-full object-cover border border-white/20 bg-black justify-center items-center flex">
                    <img 
                      src={post.avatarUrl || "/default-avatar.jpg"} 
                      alt={post.username} 
                      className="scale-100 rounded-full"
                    />
                  </div>
              {/* Textos */}
              <div className="flex flex-col">
                <span className="font-semibold text-sm leading-tight">
                  {post.username || "Usuario"}
                </span>
                <span className="text-xs text-white/70 mt-0.5">
                  {post.date || "Hace 2 años"}
                </span>
              </div>
            </div>

            {/* Derecha: Icono de Instagram con gradiente nativo */}
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-md">
              <FaInstagram className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>

          </div>

        </div>
      </div>
    ))}
  </motion.div>
</div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row items-center justify-center">
            <div className="flex items-center gap-6">
              <button
                onClick={previous}
                className="p-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md group active:scale-90"
                aria-label="Anterior"
              >
                <ArrowLeft size={18} className="group-active:-translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-2 items-center">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      displayIndex === i ? "w-8 bg-cyan-500" : "w-2 bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Ir al bloque ${i + 1}`}
                  />
                ))}
              </div>

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

      <PostInstagramModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        posts={currentPosts} // Le mandamos los posts de la empresa seleccionada
        currentIndex={modalIndex}
        setCurrentIndex={setModalIndex}
      />
    </section>
  );
}