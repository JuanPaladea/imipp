import React from 'react'
import InvestigadoresComponent from '../components/Investigadores/InvestigadoresComponent'
import { motion } from 'framer-motion'

const Investigadores = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <InvestigadoresComponent/>
    </motion.div>
  )
}

export default Investigadores