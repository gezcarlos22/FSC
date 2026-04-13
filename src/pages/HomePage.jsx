import React, { useState } from 'react';
import { Collection } from '../components/Collection';
import { Header } from '../components/Header';
import Hero from '../components/hero/Hero';
import { Testimoneal } from '../components/Testimoneal';
import { Footer } from '../components/Footer';
import VideoSection from '../components/Gallery';
import { Images } from '../components/Images';
import Equipament from '../components/Equipment';
import Programs from '../components/Programs';
import Contact from '../components/Contact';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* El Header se oculta si cualquier modal está abierto */}
      {!isModalOpen && <Header />}
      
      <Hero />
      <Collection />
      
      {/* Ambos componentes ahora controlan el mismo estado global */}
      <Images isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      
      <VideoSection setIsModalOpen={setIsModalOpen} />
      
      <Equipament />
      <Programs />
      <Testimoneal />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;