  import React from 'react';
  import HeaderComponent from '../components/Header/HeaderComponent';
  import HeroComponent from '../components/Hero/HeroComponent';
  import ContactComponent from '../components/Contact/ContactComponent';
  import LineasDeInvestigacionHome from '../components/LineasDeInvestigacionHome/LineasDeInvestigacionHome';
import GaleriaComponent from '../components/Galeria/GaleriaComponent';
import ServiciosComponent from '../components/Servicios/ServiciosComponent';

  const Home = () => {

    return (
      <div>
        <HeaderComponent />
        <HeroComponent />
        <LineasDeInvestigacionHome />
        <GaleriaComponent/>
        <ServiciosComponent/>
        <ContactComponent />
      </div>
    );
  };

  export default Home;