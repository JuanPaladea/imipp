import React from 'react'
import { motion } from 'framer-motion'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { useQuery } from 'react-query'

import { db } from '../utils/db'
import GrupoDeInvestigacionHeader from '../components/GrupoDeInvestigacionHeader/GrupoDeInvestigacionHeader'
import GrupoDeInvestigacionPublicacionesComponent from '../components/GrupoDeInvestigacionPublicaciones/GrupoDeInvestigacionPublicacionesComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import IntegrantesComponent from '../components/Integrantes/IntegrantesComponent'
import LoaderComponent from '../components/Loader/LoaderComponent'
import { customOrder } from '../utils/customOrder'
import useMetaTags from '../utils/metaTags'

const TumoresSolidos = () => {
  useMetaTags(
    'IMIPP | Tumores Sólidos',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Conoce al grupo de Biomarcadores en Tumores Sólidos del IMIPP',
    'IMIPP, Investigación, Ciencia, CONICET, Tumores Sólidos, Grupo de Investigación'
  )

  const fetchData = async () => {
    const result = doc(db, 'LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/Tumores', 'MokulMIls2jJgly1aIW4')
    const docSnapshot = await getDoc(result)
    return { id: docSnapshot.id, ...docSnapshot.data() }
  }

  const fetchDataIntegrantes = async () => {
    const result = collection(db, 'LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/Tumores/MokulMIls2jJgly1aIW4/Integrantes')
    const snapshot = await getDocs(result)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  const fetchDataPublicaciones = async () => {
    const result = collection(db, 'LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/Tumores/MokulMIls2jJgly1aIW4/Publicaciones')
    const snapshot = await getDocs(result)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  const { data: resultado, isLoading } = useQuery('tumores', fetchData, {staleTime: 300000})
  const { data: integrantes = [], isLoadingIntegrantes } = useQuery('tumoresIntegrantes', fetchDataIntegrantes, {staleTime: 300000})
  const { data: publicaciones = [], isLoadingPublicaciones } = useQuery('tumoresPublicaciones', fetchDataPublicaciones, {staleTime: 300000})
    
  const sortedResultados = integrantes.slice().sort((a, b) => {
    const cargoA = a.cargo;
    const cargoB = b.cargo;
  
    // Use customOrder values for sorting
    return customOrder[cargoA] - customOrder[cargoB];
  });  
  
  if (isLoading || isLoadingIntegrantes || isLoadingPublicaciones) {
    return <div className='flex align-center justify-center h-full w-full mt-40'><LoaderComponent/></div>
  }

  return (
    resultado &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <GrupoDeInvestigacionHeader 
          lineaInvestigacion={resultado} />
        <GrupoDeInvestigacionPublicacionesComponent 
          publicaciones={publicaciones}
          titulo='Conoce las publicaciones del grupo de Biomarcadores en Tumores Sólidos del IMIPP' />
        <IntegrantesComponent 
          integrantes={sortedResultados}
          titulo="Conoce a los integrantes que conforman el grupo de Biomarcadores en Tumores Sólidos del IMIPP"/>
        <ContactComponent />
    </motion.div>
  )
}

export default TumoresSolidos