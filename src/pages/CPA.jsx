import React from 'react'
import { motion } from 'framer-motion'
import PersonalComponent from '../components/Personal/PersonalComponent'
import { useCollection, useUnico } from '../hooks/useCollection'
import LoaderComponent from '../components/Loader/LoaderComponent'

const CPA = () => {
  const {resultados, loading} = useCollection('Personal/5KoMGhUq3sHzq9VpQSol/CPA') 
  
  if (loading) {
    return <div className='flex align-center justify-center h-full w-full mt-40'><LoaderComponent/></div>
  }

  const customOrder = {
    'Investigador Principal': 1,
    'Investigadora Principal': 2,
    'Investigador Clínico Principal': 3,
    'Investigadora Clínica Principal': 4,
    'Investigador Independiente': 5,
    'Investigadora Independiente': 6,
    'Investigador Clínico Independiente': 7,
    'Investigadora Clínica Independiente': 8,
    'Investigador Adjunto': 9,
    'Investigadora Adjunta': 10,
    'Investigador Clínico Adjunto': 11,
    'Investigadora Clínica Adjunta': 12,
    'Investigador Asistente': 13,
    'Investigadora Asistente': 14,
    'Investigador Externo': 15,
    'Investigadora Externa': 16,
    'Becario PosDoctoral': 17,
    'Becaria PosDoctoral': 18,
    'Becario Doctoral': 19,
    'Becaria Doctoral': 20,
    'Becario Externo': 21,
    'Becaria Externa': 22,
    'Profesional Principal': 23,
    'Profesional Adjunto': 24,
    'Profesional Adjunta': 25,
    'Profesional Asistente': 26,
    'Técnico Principal': 27,
    'Técnica Principal': 28,
    'Técnico Asistente': 29,
    'Técnica Asistente': 30,
  };
    
  const sortedResultados = resultados.slice().sort((a, b) => {
    const cargoA = a.cargo;
    const cargoB = b.cargo;
  
    // Use customOrder values for sorting
    return customOrder[cargoA] - customOrder[cargoB];
  });  

  return (
    sortedResultados &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <PersonalComponent 
        personal={sortedResultados} 
        titulo="Carrera del Personal de Apoyo"
        descripcion="Conoce a los CPA que conforman al IMIPP" />
    </motion.div>
  )
}

export default CPA