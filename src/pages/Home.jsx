import React from 'react'
import HeaderComponent from '../components/Header/HeaderComponent'
import HeroComponent from '../components/Hero/HeroComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import LineasDeInvestigacionHome from '../components/LineasDeInvestigacionHome/LineasDeInvestigacionHome'

const Home = () => {
  return (
    <div>
        <HeaderComponent/>
        <HeroComponent/>
        <LineasDeInvestigacionHome/>
        <ContactComponent/>
    </div>
  )
}

export default Home