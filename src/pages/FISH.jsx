import React from 'react'
import ServicioHeader from '../components/Servicio/ServicioHeader'
import ServicioBody from '../components/Servicio/ServicioBody'
import { motion } from 'framer-motion'
import Contact from './Contact'

const FISH = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <ServicioHeader/>
        <ServicioBody/>
        <Contact/>
    </motion.div>
  )
}

export default FISH