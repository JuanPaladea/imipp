import React from 'react'
import GrupoDeInvestigacionHeader from '../components/GrupoDeInvestigacionHeader/GrupoDeInvestigacionHeader'
import GrupoDeInvestigacionPublicacionesComponent from '../components/GrupoDeInvestigacionPublicaciones/GrupoDeInvestigacionPublicacionesComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import { motion } from 'framer-motion'
import IntegrantesComponent from '../components/Integrantes/IntegrantesComponent'
import { useCollection, useUnico } from '../hooks/useCollection'
import LoaderComponent from '../components/Loader/LoaderComponent'

const TumoresSolidos = () => {
  const {resultado, loading} = useUnico('LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/Tumores', 'MokulMIls2jJgly1aIW4')
  const {resultados: integrantes, loading: loadingIntegrantes} = useCollection('LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/Tumores/MokulMIls2jJgly1aIW4/Integrantes')
  const {resultados: publicaciones, loading: loadingPublicaciones} = useCollection('LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/Tumores/MokulMIls2jJgly1aIW4/Publicaciones')

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
          titulo='Conoce las publicaciones del grupo de Biomarcadores en Tumores Sólidos del IMIPP' />
        <IntegrantesComponent 
          integrantes={integrantes}
          titulo="Conoce a los integrantes que conforman el grupo de Biomarcadores en Tumores Sólidos del IMIPP"/>
        <ContactComponent />
    </motion.div>
  )
}

export default TumoresSolidos