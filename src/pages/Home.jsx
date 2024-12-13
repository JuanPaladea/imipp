import React from 'react';
import { motion } from 'framer-motion';

import HeaderComponent from '../components/Header/HeaderComponent';
import HeroComponent from '../components/Hero/HeroComponent';
import ContactComponent from '../components/Contact/ContactComponent';
import LineasDeInvestigacionHome from '../components/LineasDeInvestigacionHome/LineasDeInvestigacionHome';
import GaleriaComponent from '../components/Galeria/GaleriaComponent';
import ServiciosComponent from '../components/Servicios/ServiciosComponent';
import ObjetivosComponent from '../components/Objetivos/ObjetivosComponent';
import SeminariosComponent from '../components/Seminarios/SeminariosComponent';
import useMetaTags from '../utils/metaTags';

const Home = () => {
  useMetaTags(
    'IMIPP | Inicio',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA',
    'IMIPP, Investigación, Ciencia, CONICET'
  )

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
      <SeminariosComponent/>
      <ContactComponent />
    </motion.div>
  );
};

export default Home;