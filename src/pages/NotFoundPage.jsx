import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-2xl shadow-black/30">
          <p className="text-5xl font-bold text-emerald-300">404</p>
          <h1 className="mt-4 text-4xl font-semibold">Página no encontrada</h1>
          <p className="mt-4 text-white/70">La colección que buscas no existe o fue escrita incorrectamente.</p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
