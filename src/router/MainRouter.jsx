import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ErrorComponent from '../components/Error/ErrorComponent'
import NavBarComponent from '../components/NavBar/NavBarComponent'
import FooterComponent from '../components/Footer/FooterComponent'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Chagas from '../pages/Chagas'
import Investigadores from '../pages/Investigadores'

const MainRouter = () => {
  const location = useLocation();
  
  return (
    <div>
        <NavBarComponent location={location} />
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/Investigadores'element={<Investigadores/>}/>
            <Route path='/Chagas'element={<Chagas/>}/>
            <Route path='/Contacto'element={<Contact/>}/>
            <Route path='*' element={<ErrorComponent/>} />
        </Routes>
        <FooterComponent/>
    </div>
  )
}

export default MainRouter