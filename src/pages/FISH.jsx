import React from 'react'
import ServicioHeader from '../components/Servicio/ServicioHeader'
import ServicioBody from '../components/Servicio/ServicioBody'
import { motion } from 'framer-motion'
import Contact from './Contact'
import { useUnico } from '../hooks/useCollection'
import LoaderComponent from '../components/Loader/LoaderComponent'

const FISH = () => {
  const {resultado, loading} = useUnico('Servicios' ,'FISH')
  if (loading) {
    return <div className='flex align-center justify-center h-full w-full mt-40'><LoaderComponent/></div>
  }

  return (
    resultado &&
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <ServicioHeader servicio={resultado} />
        <ServicioBody servicio={resultado} />
        <Contact/>
    </motion.div>
  )
}

export default FISH