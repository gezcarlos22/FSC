import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.images[0]})` }}
      />
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{category.subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{category.title}</h3>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">{category.description}</p>
        <Link
          to={`/categoria/${category.slug}`}
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Ver colección
        </Link>
      </div>
    </article>
  );
};
