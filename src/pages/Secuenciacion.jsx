import React from 'react'
import { motion } from 'framer-motion'
import { doc, getDoc } from 'firebase/firestore'
import { useQuery } from 'react-query'

import { db } from '../utils/db'
import ServicioHeader from '../components/Servicio/ServicioHeader'
import ServicioBody from '../components/Servicio/ServicioBody'
import Contact from './Contact'
import LoaderComponent from '../components/Loader/LoaderComponent'
import useMetaTags from '../utils/metaTags'

const Secuenciacion = () => {
  useMetaTags(
    'IMIPP | Secuenciación Sanger',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Conoce el Servicio de Secuenciación Sanger',
    'IMIPP, Investigación, Ciencia, CONICET, Secuenciación, Sanger, STAN, Servicio'
  )

  const fetchData = async () => {
    const result = doc(db, 'Servicios', 'Secuenciacion')
    const docSnapshot = await getDoc(result)
    return { id: docSnapshot.id, ...docSnapshot.data() }
  }

  const { data: resultado, isLoading } = useQuery('secuenciacion', fetchData, {staleTime: 300000})

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

export default Secuenciacion