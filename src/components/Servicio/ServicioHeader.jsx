import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'

const ServicioHeader = () => {
  return (
    <section class="text-gray-600 body-font mt-16 max-w-7xl mx-auto px-4 lg:px-0 ">
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      class="container mx-auto py-24 flex flex-col">
        <div class="mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://i.imgur.com/wtUPJUU.jpg"/>
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-[#009cde]">
                <MagnifyingGlassCircleIcon/>
              </div>
              <div class="flex flex-col items-center text-justify justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Hibridacion in Situ</h2>
                <div class="w-12 h-1 bg-[#009cde] rounded mt-2 mb-4"></div>
                <p class="text-base">Analisis de traslocaciones en tumores y deteccion de virus es muestras fiajdas en formol e incluidas en parafinas</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4 text-justify">
              <p class="leading-relaxed text-lg mb-4 ">Hibridación in situ para EBERs (EBERs ISH): Determinación de presencia de transcriptos EBERs del virus de Epstein Barr por hibridación con sondas específicas. Hibridación fluorescente (FISH): Determinación de presencia de traslocaciones en linfomas pediátricos por hibridación con sondas fluorescentes de fusión y break apart específicas.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ServicioHeader