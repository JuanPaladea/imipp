import React from 'react'
import { motion } from 'framer-motion'
import PersonalComponent from '../components/Personal/PersonalComponent'
import { useCollection, useUnico } from '../hooks/useCollection'
import LoaderComponent from '../components/Loader/LoaderComponent'

const Becarios = () => {
  const {resultados, loading} = useCollection('Personal/5KoMGhUq3sHzq9VpQSol/Becarios') 
  
  if (loading) {
    return <div className='flex align-center justify-center h-full w-full mt-40'><LoaderComponent/></div>
  }

  return (
    resultados &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <PersonalComponent 
        personal={resultados} 
        titulo="Becarios"
        descripcion="Conoce a los Becarios que conforman al IMIPP" />
    </motion.div>
  )
}

export default Becarios