import React from 'react';
import { FaXTwitter, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";

const SocialButtons = () => {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, url: "#", color: "from-cyan-500 to-purple-500" },
    { name: "Twitter (X)", icon: <FaXTwitter />, url: "#", color: "from-cyan-500 to-purple-500" },
    { name: "TikTok", icon: <FaTiktok />, url: "#", color: "from-cyan-500 to-purple-500" },
    { name: "Facebook", icon: <FaFacebookF />, url: "#", color: "from-cyan-500 to-purple-500" },
  ];

  return (
    <div className="flex items-center gap-6 py-10">
      {socialLinks.map((social) => (
        <div key={social.name} className="relative inline-flex group">
          {/* El borde con degradado y efecto Glow al hacer hover */}
          <div className={`absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r ${social.color} group-hover:shadow-lg group-hover:shadow-cyan-500/50`}></div>
          
          {/* El botón circular */}
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
  );
};

export default SocialButtons;