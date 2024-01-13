import React from 'react'
import GrupoDeInvestigacionHeader from '../components/GrupoDeInvestigacionHeader/GrupoDeInvestigacionHeader'
import GrupoDeInvestigacionPublicacionesComponent from '../components/GrupoDeInvestigacionPublicaciones/GrupoDeInvestigacionPublicacionesComponent'
import InvestigadoresComponent from '../components/Investigadores/InvestigadoresComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import { motion } from 'framer-motion'

const Chagas = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <GrupoDeInvestigacionHeader 
          imagen='https://i.imgur.com/FoJY1HY.jpg' 
          titulo='Grupo de Parasitología y Chagas' 
          descripcion='La enfermedad de Chagas es una infección parasitaria causada por el protozoo Trypanosoma cruzi. Se transmite principalmente por picaduras de triatoma, también llamada "vinchuca." Puede causar síntomas leves en la fase aguda y dañar el corazón y el sistema digestivo en la fase crónica. Es endémica en América Latina y se previene evitando la exposición a los vectores y detectándola temprano.' />
        <GrupoDeInvestigacionPublicacionesComponent/>
        <InvestigadoresComponent/>
        <ContactComponent />
    </motion.div>
  )
}

export default Chagas