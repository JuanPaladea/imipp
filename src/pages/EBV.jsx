import React from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { motion } from 'framer-motion'
import { useQuery } from 'react-query'

import { db } from '../utils/db'
import GrupoDeInvestigacionHeader from '../components/GrupoDeInvestigacionHeader/GrupoDeInvestigacionHeader'
import GrupoDeInvestigacionPublicacionesComponent from '../components/GrupoDeInvestigacionPublicaciones/GrupoDeInvestigacionPublicacionesComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import IntegrantesComponent from '../components/Integrantes/IntegrantesComponent'
import LoaderComponent from '../components/Loader/LoaderComponent'
import { customOrder } from '../utils/customOrder'
import useMetaTags from '../utils/metaTags'

const EBV = () => {
  useMetaTags(
    'IMIPP | Virus de Epstein-Barr',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Conoce al grupo del Virus de Epstein-Barr del IMIPP',
    'IMIPP, Investigación, Ciencia, CONICET, EBV, Virus, Epstein-Barr, Grupo de Investigación'
  )

  const fetchData = async () => {
    const result = doc(db, 'LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/EBV', 'pcMJnWnlHWC3rgzbcz8B')
    const docSnapshot = await getDoc(result)
    return { id: docSnapshot.id, ...docSnapshot.data() }
  }

  const fetchDataIntegrantes = async () => {
    const resultCollection = collection(db, 'LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/EBV/pcMJnWnlHWC3rgzbcz8B/Integrantes')
    const snapshot = await getDocs(resultCollection)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  const fetchDataPublicaciones = async () => {
    const resultCollection = collection(db, 'LineasDeInvestigacion/s1rVSM4a6ovPJvT9BJMt/EBV/pcMJnWnlHWC3rgzbcz8B/Publicaciones')
    const snapshot = await getDocs(resultCollection)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  const { data: resultado, isLoading } = useQuery('ebv', fetchData, {staleTime: 300000})
  const { data: integrantes = [], isLoadingIntegrantes } = useQuery('ebvIntegrantes', fetchDataIntegrantes, {staleTime: 300000})
  const { data: publicaciones = [], isLoadingPublicaciones } = useQuery('ebvPublicaciones', fetchDataPublicaciones, {staleTime: 300000})
    
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
          titulo='Conoce las publicaciones del grupo del Virus de Epstein-Barr' />
        <IntegrantesComponent 
          integrantes={sortedResultados}
          titulo="Conoce a los integrantes que conforman el grupo del Virus de Epstein-Barr"/>
        <ContactComponent />
    </motion.div>
  )
}

export default EBV