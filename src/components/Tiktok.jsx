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
    name: "riiingtm",
    logo: "/logos/riiing/riiing_png.png",
    posts: [
      { id: 5, url: "https://www.instagram.com/p/CUbHfhpswxt/", caption: "Publicación clave riiingtm" },
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
        id: 1, 
        url: "https://www.instagram.com/p/DQcdl8zgSns/", 
        caption: `Pasé por @riiingtm y me llevé un teléfono y una Tablet de Samsung para que me acompañen en mis entrenamientos 💪🏼
        Si buscás tecnología, pasá por Riiing 😉`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328963/1_pv6e1x.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "30 de octubre de 2025"
      },
      { id: 2, url: "https://www.instagram.com/p/DPBrc-AjUVv/", 
        caption: `🔥El primer Celular del mercado con IP69: Oppo Reno 13
        👉🏼Te lo podés llevar como premio participando del Sorteo del Riiingversario con tus compras en el mes de Septiembre!
        😎Y lo mejor es que el premio no viene solo: también llevate un smartwatch y auriculares inalámbricos de Riiing. ¿Vos ya estás participando?
        .
        .
        .
        Bases y condiciones en www.riiing.com.ar`, 
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328965/2_zkbeuz.mp4', 
        username: "riiingtm", avatarUrl: "/logos/riiing/riiing.png", 
        date: "25 de septiembre de 2025" },
      { id: 3, url: "https://www.instagram.com/p/DLnBXxKuR1S/", 
        caption: `Ayer fue la entrega de los primeros 40 smartwatch de Talleres por Riiing

        Gracias a todos por venir 🙌😁`, 
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328966/3_elj4ic.mp4', 
        username: "riiingtm", 
        avatarUrl: "/logos/riiing/riiing.png", 
        date: "Hace 2 semanas" },
      { id: 4, url: "https://www.instagram.com/p/DO4nCo_DFVy/", 
        caption: `💥Sabías que con tus compras podés participar de este combo de Nubia?
        👉🏼Nubia Neo 3 + Auriculares Nubia Liveflip
        .
        .
        .
        Bases y condiciones en www.riiing.com.ar`, 
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328968/4_zedjfs.mp4', 
        username: "riiingtm", 
        avatarUrl: "/logos/riiing/riiing.png", 
        date: "21 de septiembre de 2025" },
    { 
        id: 5, 
        url: "https://www.instagram.com/p/DOvtIn8judZ/", 
        caption: `El nuevo Motorola Edge 60 llegó para redefinir tu experiencia: pantalla curva, cámara profesional y la potencia de Moto IA. 📱✨ Conseguilo en Riiing en hasta 12 cuotas sin interés en riiing.com.ar o en nuestras +80 sucursales --> Elegí la opción RETIRO YA en tu sucursal más cercana😉`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328968/5_tro97c.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "18 de septiembre de 2025"
      },
      { 
        id: 6, 
        url: "https://www.instagram.com/p/DQCYBm0gaxn/", 
        caption: `Unboxing del Smartwatch Zentia Immer Series🚀
        P/D: Mirá lo que es en color naranja😍`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328963/6_yyi243.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "20 de octubre de 2025"
      },
      { 
        id: 7, 
        url: "https://www.instagram.com/p/DObxfzjD1LI/", 
        caption: `Galaxy Watch8✨⌚Vení a probártelos a cualquiera de nuestras sucursales y elegí el que más te guste😉`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328967/7_gqgyau.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "10 de septiembre de 2025"
      },
      { 
        id: 8, 
        url: "https://www.instagram.com/p/DP_zog1js7q/", 
        caption: `En Riiing creemos que la mejor conexión no se mide en megas, sino en abrazos, charlas y momentos compartidos.
        🥰Por eso, en esta edición especial por el día de la madre de #ConectadasxRiiing, invitamos a personas de nuestro equipo a compartir con sus mamás o hijo/as, esa conexión única que los une desde siempre 💛

        Porque más allá de la tecnología, la conexión con mamá es para siempre.`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328971/8_qwkmou.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "19 de octubre de 2025"
      },
      { 
        id: 9, 
        url: "https://www.instagram.com/p/C6uFCkNxcGK/", 
        caption: `Hoy hicimos un desafío con los jugadores de Belgrano porque queríamos que les den descuentos extra para el Hot sale que ya esta por llegar.👏🏼👏🏼 @clubatleticobelgrano 

        Hay 3 premios🤩 y los van a poder canjear en la página usando los siguientes codigos: 

        👉🏼CARGADORGRATIS para todos los que compren celulares samsung línea s o z se llevan un cargador inalambrico de regalo 

        👉🏼AUDIO20OFF para todos los que compren en la categoría de audio en hot sale 

        👉🏼AURISGRATIS para todos los que compren un celular Motorola se llevan auriculares 3s de regalo 

        Estén atentos porque estos códigos los vamos a activar en horas específicas de Hot sale, les vamos a contar por historias !!🥳🥳`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328970/9_zghnvu.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "8 de mayo de 2024"
      },
      { 
        id: 10, 
        url: "https://www.instagram.com/p/DNHJ0J4iQ8o/", 
        caption: `Riiingo fue reemplazado?😱
        Claro que no, pero nos enteramos de LA novedad del mes...mirá el video👀`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328965/10_txt6zh.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "8 de agosto de 2025"
      },
      { 
        id: 11, 
        url: "https://www.instagram.com/p/DB19Mi0xnVb/", 
        caption: `Unboxing del smartwatch Riiing Tempo

        Encontralo en riiing.com.ar 👉 🙌🏃‍➡️`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328963/11_jacr53.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "1 de noviembre de 2024"
      },
      { 
        id: 12, 
        url: "https://www.instagram.com/p/DA_PVKcRa-y/", 
        caption: `Te presento el nuevo anillo inteligente de Riiing🙌🎁

        Encontralo en hasta 12 cuotas sin interés en Riiing.com.ar ➡️`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328962/12_qwtuj9.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "11 de octubre de 2024"
      },
      { 
        id: 13, 
        url: "https://www.instagram.com/p/DCy2mv8RGvB/", 
        caption: `🎧 Sumergite en tu mundo con los nuevos Sensus de Riiing: comodidad, estilo y sonido que te mueve😉`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328965/13_uxifal.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "25 de noviembre de 2024"
      },
      { 
        id: 14, 
        url: "https://www.instagram.com/p/DCUMkjHxS7u/", 
        caption: `Conocé los Auriculares Kosmos 🔥`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328963/14_jy5wmb.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "13 de noviembre de 2024"
      },
      { 
        id: 15, 
        url: "https://www.instagram.com/p/DBeyFF0xiil/", 
        caption: `Te muestro los auriculares sensus Riiing

        Encontralos en riiing.com.ar🏃‍➡️👏🙌`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328964/15_vclope.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "23 de octubre de 2024"
      },
      { 
        id: 16, 
        url: "https://www.instagram.com/p/DR4_jBvjq07/", 
        caption: `Unboxing ASMR ✨️ Volvió a ingresar el trípode Focus 360 Pro de Riiing😍 
        (Activá el sonido😉)`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328964/16_t2qe60.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "5 de diciembre de 2025"
      },
      { 
        id: 17, 
        url: "https://www.instagram.com/p/DTTBJIMDi8P/", 
        caption: `Ya conociste el nuevo Mic Ultra de Riiing? 😍`,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779328963/17_bd3rup.mp4',
        username: "riiingtm",
        avatarUrl: "/logos/riiing/riiing.png",
        date: "9 de enero de 2026"
      },
    ],
  },
  {
    id: "brand-three",
    name: "He Mod",
    logo: "/logos/he-mod/he-mod_png.png",
    posts: [
      { 
        id: 1, 
        url: "https://www.instagram.com/p/DFvpcO1ARgR/", 
        caption: `✨Entrega del Mod 430 – La Casa del Lago ✨

        Hoy cerramos un gran capítulo con la entrega de uno de nuestros grandes proyectos, el MOD430, conocido como la Casa del Lago 🌊🏡

        Un diseño modular innovador, pensado para disfrutar al máximo de su entorno único. 

        Desde la planificación hasta la instalación final, cada detalle fue diseñado y ejecutado con precisión para garantizar confort, funcionalidad y diseño de calidad.

        ¡Felices de ver cómo este proyecto cobra vida y se convierte en un hogar listo para disfrutar! Gracias a nuestro equipo y clientes, quienes confiaron en nosotros para hacerlo posible. 💙

        #lacasadellago #mod430 #arquitecturamodular #innovacionydiseño #entregafinal
        `,
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779320484/1-HEMOD_ictouj.mp4',
        username: "hemodsas",
        avatarUrl: "/logos/he-mod/he-mod.jpg",
        date: "6 de febrero de 2025"
      },
      { id: 2, 
        url: "https://www.instagram.com/p/C_CFdqAp_6s/", 
        caption: `La casa del lago fue montada ✨

        Te mostramos cada detalle de este maravilloso montaje del MOD 430.

        En tan solo 8 horas esta casa de diseño exclusivo quedó instalada en destino.

        Conoce las infinitas posibilidades que la arquitectura modular tiene para ofrecer.

        #arquitecturamodular #innovación #sustentabilidad #diseñomoderno #arquitecturatransportable`, 
        mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779320483/2-HEMOD_dbjoqj.mp4', 
        username: "hemodsas", 
        avatarUrl: "/logos/he-mod/he-mod.jpg", 
        date: "23 de agosto de 2024" },
      { id: 3, url: "https://www.instagram.com/p/C4b2icrLsDP/", 
        caption: `¡Descubrí la magia de tener tu MOD listo en solo medio día! ✨
 
        En HE MOD, cada paso del proceso está impregnado de excelencia, desde la instalación hasta el montaje. 🏗️

        Nuestras casas modulares ofrecen una combinación única de eficiencia energética y calidad premium. ♻️🌱

        ¡Experimenta la emoción de tener tu hogar listo en poco tiempo! 🌟🏡

        #arquitecturamodular #instalaciónrápida #sostenibilidad #vivemod #hemod #tunuevomododevivir #arquitecturaecofriendly`, 
        mediaUrl: "https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1779320483/3-HEMOD_uswadh.mp4", 
        username: "hemodsas", 
        avatarUrl: "/logos/he-mod/he-mod.jpg", 
        date: "12 de marzo de 2024" },
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
          
          {/* Renderizado condicional: Video o Imagen */}
          {post.mediaUrl && (post.mediaUrl.endsWith('.mp4') || post.mediaUrl.endsWith('.webm') || post.mediaUrl.includes('video')) ? (
            <video 
              src={post.mediaUrl} 
              muted 
              loop 
              autoPlay 
              playsInline
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img 
              src={post.mediaUrl || "/placeholder-img.jpg"} 
              alt={`Post de ${post.username}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

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