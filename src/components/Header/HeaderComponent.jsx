import { motion } from 'framer-motion'
import React from 'react'

const HeaderComponent = () => {
  return (
    <header>
      <div className="w-full h-screen bg-center bg-cover mx-auto bg-[url('https://i.imgur.com/VyhtrBj.jpeg')]">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">IMIPP</span>
                <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas</h1>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                (Consejo Nacional de Investigaciones Científicas y Técnicas - Gobierno de la Ciudad Autónoma de Buenos Aires)
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent