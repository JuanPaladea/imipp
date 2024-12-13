import React from 'react'
import { motion } from 'framer-motion'
import { doc, getDoc } from 'firebase/firestore'
import { useQuery } from 'react-query'

import { db } from '../utils/db'
import ServicioHeader from '../components/Servicio/ServicioHeader'
import ServicioBody from '../components/Servicio/ServicioBody'
import LoaderComponent from '../components/Loader/LoaderComponent'
import Contact from './Contact'
import useMetaTags from '../utils/metaTags'

const Curso = () => {
  useMetaTags(
    'IMIPP | Curso de Biología Molecular',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Conoce el Curso de Biología Molecular',
    'IMIPP, Investigación, Ciencia, CONICET, Curso, Biología Molecular, Servicio, STAN'
  )

  const fetchData = async () => {
    const result = doc(db, 'Servicios', 'Curso')
    const docSnapshot = await getDoc(result)
    return { id: docSnapshot.id, ...docSnapshot.data() }
  }

  const { data: resultado, isLoading } = useQuery('curso', fetchData, {staleTime: 300000})
  
  if (isLoading) {
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

export default Curso