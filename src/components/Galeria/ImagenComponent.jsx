import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const ImagenComponent = ({open, setOpen, imagen}) => {
  return (
    <AnimatePresence>
        {open && (
            <motion.div 
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='h-screen w-screen bg-black bg-opacity-90 fixed top-0 left-0 justify-center align-center flex z-50' onClick={() => setOpen(false)}>
                <motion.img 
                key="modal"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                src={`${imagen}`} className='object-scale-down object-center h-4/6 block my-auto '/>
            </motion.div>
        )
        }
    </AnimatePresence>
  )
}

export default ImagenComponent