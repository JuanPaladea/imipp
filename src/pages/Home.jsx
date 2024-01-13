import React from 'react';
import HeaderComponent from '../components/Header/HeaderComponent';
import HeroComponent from '../components/Hero/HeroComponent';
import ContactComponent from '../components/Contact/ContactComponent';
import LineasDeInvestigacionHome from '../components/LineasDeInvestigacionHome/LineasDeInvestigacionHome';
import GaleriaComponent from '../components/Galeria/GaleriaComponent';
import ServiciosComponent from '../components/Servicios/ServiciosComponent';
import ObjetivosComponent from '../components/Objetivos/ObjetivosComponent';
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <HeaderComponent />
      <HeroComponent />
      <ObjetivosComponent/>
      <LineasDeInvestigacionHome />
      <GaleriaComponent/>
      <ServiciosComponent/>
      <ContactComponent />
    </motion.div>
  );
};

export default Home;