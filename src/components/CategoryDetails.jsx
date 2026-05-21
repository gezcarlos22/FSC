import React from 'react';
import { Camera, Video, Sparkles, Wand2 } from 'lucide-react';

export const CategoryDetails = ({ extra, highlights = [] }) => {
  const infoCards = [
    {
      icon: <Camera />,
      color: 'indigo',
      title: 'Fotografía',
      desc: 'Imágenes cuidadosamente capturadas con enfoque en luz y composición.',
    },
    {
      icon: <Video />,
      color: 'cyan',
      title: 'Contenido dinámico',
      desc: 'Videos diseñados para transmitir emoción y profundidad.',
    },
    {
      icon: <Wand2 />,
      color: 'pink',
      title: 'Edición profesional',
      desc: 'Procesado visual que potencia colores y atmósferas únicas.',
    },
  ];

  return (
    <div className="space-y-20 md:space-y-24">
      <div className="mb-10 text-center md:text-left reveal-text">
        <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-widest">
          Detalles de Colección
        </h2>
        <p className="pt-5 text-lg text-white/70 leading-8">
          {extra}
        </p>
      </div>

      <div className="reveal-text rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 md:p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-semibold mb-8 text-white/90">Características principales</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className="reveal-text p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500"
          >
            <div className={`p-3 w-fit rounded-xl bg-gradient-to-br from-${card.color}-500 to-blue-500 mb-6`}>
              {React.cloneElement(card.icon, { className: 'text-white' })}
            </div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-white/70">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
