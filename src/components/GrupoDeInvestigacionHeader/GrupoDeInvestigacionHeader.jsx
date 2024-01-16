import { motion } from 'framer-motion'
import React from 'react'

const GrupoDeInvestigacionHeader = ({lineaInvestigacion}) => {
  return ( 
    <section class="text-gray-600 body-font mt-16">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col max-w-7xl gap-8 xl:gap-16 md:grid md:grid-cols-2">
          <img class="w-full shadow rounded-lg" src={lineaInvestigacion.imagen} alt={lineaInvestigacion.titulo}/>
          <div class="mt-4 md:mt-0 my-auto">
              <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{lineaInvestigacion.titulo}</h1>
              <p class="text-gray-500 md:text-lg text-justify">{lineaInvestigacion.descripcion} </p>
          </div>
      </motion.div>
    </section>
  )
}

export default GrupoDeInvestigacionHeader