import React from 'react'
import ErrorComponent from '../components/Error/ErrorComponent'
import { motion } from 'framer-motion'
import useMetaTags from '../utils/metaTags'

const Error = () => {
  useMetaTags(
    'IMIPP | Página no encontrada',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Página no encontrada',
    'IMIPP, Investigación, Ciencia, CONICET'
  )

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <ErrorComponent/>
    </motion.div>
  )
}

export default Error