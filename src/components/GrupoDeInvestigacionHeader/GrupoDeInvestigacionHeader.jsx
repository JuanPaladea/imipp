import { motion } from 'framer-motion'
import React from 'react'

const GrupoDeInvestigacionHeader = ({imagen, titulo, descripcion}) => {
  return ( 
  <section class="text-gray-600 body-font mt-16">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="md:w-1/2 w-5/6 mb-10 object-cover object-center rounded" alt={titulo} src={imagen}/>
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{titulo}</h1>
        <p class="mb-8 leading-relaxed">{descripcion}</p>
        <div class="flex justify-center">
        </div>
      </div>
    </motion.div>
  </section>
  )
}

export default GrupoDeInvestigacionHeader