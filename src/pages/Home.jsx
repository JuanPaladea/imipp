import React from 'react'
import HeaderComponent from '../components/Header/HeaderComponent'
import HeroComponent from '../components/Hero/HeroComponent'
import ContactComponent from '../components/Contact/ContactComponent'

const Home = () => {
  return (
    <div>
        <HeaderComponent/>
        <HeroComponent/>
        <ContactComponent/>
    </div>
  )
}

export default Home