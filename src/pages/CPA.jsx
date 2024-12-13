import React from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore'
import { useQuery } from 'react-query'

import { db } from '../utils/db'
import PersonalComponent from '../components/Personal/PersonalComponent'
import LoaderComponent from '../components/Loader/LoaderComponent'
import { customOrder } from '../utils/customOrder'
import useMetaTags from '../utils/metaTags'

const CPA = () => {
  useMetaTags(
    'IMIPP | CPA',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Conoce a los CPA que conforman al IMIPP',
    'IMIPP, Investigación, Ciencia, CONICET, Técnicos, Personal de Apoyo'
  )

  const fetchData = async () => {
    const resultCollection = collection(db, 'Personal/5KoMGhUq3sHzq9VpQSol/CPA')
    const snapshot = await getDocs(resultCollection)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  const { data: resultados = [], isLoading } = useQuery('cpa', fetchData, {staleTime: 300000})
  
  const sortedResultados = resultados.slice().sort((a, b) => {
    const cargoA = a.cargo;
    const cargoB = b.cargo;
    
    // Use customOrder values for sorting
    return customOrder[cargoA] - customOrder[cargoB];
  }); 

  if (isLoading) {
    return <div className='flex align-center justify-center h-full w-full mt-40'><LoaderComponent/></div>
  }

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