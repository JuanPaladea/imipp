import React from 'react'
import GrupoDeInvestigacionHeader from '../components/GrupoDeInvestigacionHeader/GrupoDeInvestigacionHeader'
import GrupoDeInvestigacionPublicacionesComponent from '../components/GrupoDeInvestigacionPublicaciones/GrupoDeInvestigacionPublicacionesComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import { motion } from 'framer-motion'
import IntegrantesComponent from '../components/Integrantes/IntegrantesComponent'
import { useCollection, useUnico } from '../hooks/useCollection'
import LoaderComponent from '../components/Loader/LoaderComponent'

const EBV = () => {
  const {resultado, loading} = useUnico('LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/EBV', 'pcMJnWnlHWC3rgzbcz8B')
  const {resultados: integrantes, loading: loadingIntegrantes} = useCollection('LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/EBV/pcMJnWnlHWC3rgzbcz8B/Integrantes')
  const {resultados: publicaciones, loading: loadingPublicaciones} = useCollection('LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/EBV/pcMJnWnlHWC3rgzbcz8B/Publicaciones')

  if (loading && loadingIntegrantes && loadingPublicaciones) {
    return <div className='flex align-center justify-center h-full w-full mt-40'><LoaderComponent/></div>
  }

  return (
    resultado &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <GrupoDeInvestigacionHeader lineaInvestigacion={resultado} />
        <GrupoDeInvestigacionPublicacionesComponent 
          publicaciones={publicaciones}
          titulo='Conoce las publicaciones del grupo del Virus de Epstein-Barr' />
        <IntegrantesComponent 
          integrantes={integrantes}
          titulo="Conoce a los integrantes que conforman el grupo del Virus de Epstein-Barr"/>
        <ContactComponent />
    </motion.div>
  )
}

export default EBV