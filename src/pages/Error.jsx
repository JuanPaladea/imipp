import React from 'react'
import ErrorComponent from '../components/Error/ErrorComponent'
import { motion } from 'framer-motion'

const Error = () => {
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