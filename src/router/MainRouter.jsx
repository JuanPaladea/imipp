import React, { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ErrorComponent from '../components/Error/ErrorComponent'
import NavBarComponent from '../components/NavBar/NavBarComponent'
import FooterComponent from '../components/Footer/FooterComponent'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Chagas from '../pages/Chagas'
import Investigadores from '../pages/Investigadores'
import { AnimatePresence } from 'framer-motion'
import FISH from '../pages/FISH'
import Loader from '../pages/Loader'

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
          <Route path='/Investigadores'element={<Investigadores/>}/>
          <Route path='/FISH' element={<FISH/>} />
          <Route path='/Contacto'element={<Contact/>}/>
          <Route path='/Loader'element={<Loader/>}/>
          <Route path='*' element={<ErrorComponent/>} />
      </Routes>
      <FooterComponent key='footer'/>
    </AnimatePresence>
  )
}

export default MainRouter