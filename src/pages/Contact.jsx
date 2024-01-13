import React from 'react'
import ContactComponent from '../components/Contact/ContactComponent'
import { motion } from 'framer-motion'

const Contact = () => {
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