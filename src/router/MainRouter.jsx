import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ErrorComponent from '../components/Error/ErrorComponent'
import NavBarComponent from '../components/NavBar/NavBarComponent'
import FooterComponent from '../components/Footer/FooterComponent'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

const MainRouter = () => {
  const location = useLocation();
  
  return (
    <div>
        <NavBarComponent location={location} />
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/Contacto'element={<Contact/>}/>
            <Route path='*' element={<ErrorComponent/>} />
        </Routes>
        <FooterComponent/>
    </div>
  )
}

export default MainRouter