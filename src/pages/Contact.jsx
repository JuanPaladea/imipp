import React from 'react'
import { motion } from 'framer-motion'

import ContactComponent from '../components/Contact/ContactComponent'
import useMetaTags from '../utils/metaTags'

const Contact = () => {
  useMetaTags(
    'IMIPP | Contacto',
    'Página Oficial del Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) - CONICET - GCBA. Contactate con nosotros',
    'IMIPP, Investigación, Ciencia, CONICET, Contacto'
  )

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='mt-12'>
      <ContactComponent/>
    </motion.div>
  )
}

export default Contact