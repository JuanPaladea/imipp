import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'

const ServicioBody = () => {
  return (
    <section class="text-gray-600 body-font bg-gray-100 py-24 px-4 lg:px-0">
      <div class="max-w-7xl flex flex-wrap mx-auto ">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container flex relative mx-auto pt-10 pb-20 sm:items-center">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center p-4">
              <ChevronDoubleDownIcon/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Metodología</h2>
              <p class="leading-relaxed text-justify">Hibridación con sondas específicas para transcriptos EBER1 y EBER2 del virus de Esptein Barr PNA EBER probe marca Dako, y visualización con kit comercial PNA ISH kit marca dako en microscopio óptico. FISH: hibridación con sondas específicas, consultar. Visualización en microscopio de fluorescencia y recuento de células con traslocación cada 200 núcleos. Los costos se han estimado en base a la cotización de cada una de los sondas y kits comerciales de detección.</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container mx-auto flex relative pt-10 pb-20 sm:items-center">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center p-4">
              <ChevronDoubleDownIcon/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Equipamiento</h2>
              <p class="leading-relaxed text-justify">Microscopio de Fluorecencia, optico y contraste de fase Carl Zeiss Axiophot</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicioBody