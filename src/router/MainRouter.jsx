import React, { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import ErrorComponent from '../components/Error/ErrorComponent'
import NavBarComponent from '../components/NavBar/NavBarComponent'
import FooterComponent from '../components/Footer/FooterComponent'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Chagas from '../pages/Chagas'
import Investigadores from '../pages/Investigadores'
import FISH from '../pages/FISH'
import EBV from '../pages/EBV'
import Hepatitis from '../pages/Hepatitis'
import TumoresSolidos from '../pages/TumoresSolidos'
import Sifilis from '../pages/Sifilis'
import Becarios from '../pages/Becarios'
import CPA from '../pages/CPA'
import IHQ from '../pages/IHQ'
import Secuenciacion from '../pages/Secuenciacion'
import Curso from '../pages/Curso'

const MainRouter = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollTo(0, 0);
    };

    // Scroll to top after a delay of 1000 milliseconds (1 second)
    const delayScroll = setTimeout(scrollToTop, 250);
  
    return () => {
      // Clear the timeout if the component is unmounted before the delay completes
      clearTimeout(delayScroll);
    };
  }, [location.pathname]);
  
  return (
    <AnimatePresence>
      <NavBarComponent key='navbar' location={location} />
      <Routes location={location} key={location.pathname}>
          <Route path='/'element={<Home/>}/>
          <Route path='/Chagas'element={<Chagas/>}/>
          <Route path='/EBV'element={<EBV/>}/>
          <Route path='/Hepatitis'element={<Hepatitis/>}/>
          <Route path='/Sifilis'element={<Sifilis/>}/>
          <Route path='/Tumores-Solidos'element={<TumoresSolidos/>}/>
          <Route path='/Investigadores'element={<Investigadores/>}/>
          <Route path='/Becarios'element={<Becarios/>}/>
          <Route path='/CPA'element={<CPA/>}/>
          <Route path='/FISH' element={<FISH/>} />
          <Route path='/IHQ' element={<IHQ/>} />
          <Route path='/Curso-Biologia-Molecular' element={<Curso/>} />
          <Route path='/Secuenciacion' element={<Secuenciacion/>} />
          <Route path='/Contacto'element={<Contact/>}/>
          <Route path='*' element={<ErrorComponent/>} />
      </Routes>
      <FooterComponent key='footer'/>
    </AnimatePresence>
  )
}

export default MainRouter