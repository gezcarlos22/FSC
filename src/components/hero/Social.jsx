import React from 'react';
import { FaXTwitter, FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const SocialButtons = () => {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, url: "#", color: "from-cyan-500 to-purple-500" },
    { name: "Twitter (X)", icon: <FaXTwitter />, url: "#", color: "from-cyan-500 to-purple-500" },
    { name: "TikTok", icon: <FaTiktok />, url: "#", color: "from-cyan-500 to-purple-500" },
    { name: "Facebook", icon: <FaFacebookF />, url: "#", color: "from-cyan-500 to-purple-500" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start gap-4 py-10 max-w-fit lg:flex-row lg:items-center">
      {/* Fila de Redes Sociales */}
      <div className="flex items-center justify-center md:justify-start gap-6">
        {socialLinks.map((social) => (
          <div key={social.name} className="relative inline-flex group">
            <div className={`absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r ${social.color} group-hover:shadow-lg group-hover:shadow-cyan-500/50`}></div>
            <a
              href={social.url}
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-black border border-transparent rounded-full transition-all duration-200"
              role="button"
            >
              {social.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Botón de WhatsApp - Ajustado para evitar huecos en los bordes */}
      <div className="relative inline-flex group w-full lg:w-auto">
        {/* 
            CAMBIO 1: -inset-[1px] en lugar de -inset-px para asegurar cobertura.
            CAMBIO 2: bg-clip-border para forzar el pintado hasta el límite.
        */}
        <div className="absolute transition-all duration-200 rounded-full -inset-[1px] bg-gradient-to-r from-emerald-500 via-lime-500 to-green-700 group-hover:shadow-lg group-hover:shadow-emerald-500/40"></div>
        
        <a
          href="https://wa.me/tunúmero"
          target="_blank"
          rel="noopener noreferrer"
          /* 
            CAMBIO 3: Añadimos 'isolate' para crear un nuevo contexto de apilamiento.
            CAMBIO 4: 'bg-black' (o el color de tu fondo) con el gradiente encima.
          */
          className="relative isolate inline-flex items-center justify-center w-full lg:w-auto px-6 py-3 text-lg font-bold text-white rounded-full transition-all duration-200 gap-2 bg-gradient-to-r from-emerald-500 via-lime-500 to-green-700 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-600/40 overflow-hidden"
          role="button"
        >
          <FaWhatsapp className="text-2xl text-white" />
          <span className='uppercase font-medium'>Contactame</span>
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;