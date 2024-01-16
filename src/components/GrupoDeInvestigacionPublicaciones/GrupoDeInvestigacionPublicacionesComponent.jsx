import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const GrupoDeInvestigacionPublicacionesComponent = ({publicaciones, titulo}) => {
  return (
    <section class="text-gray-600 body-font overflow-hidden bg-gray-100">
      <div className='max-w-7xl mx-auto px-5 pb-12'>
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">Publicaciones</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{titulo}</p>
          </motion.div>
        </div>
        <div class="container py-6 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-300">
          {publicaciones.map((publicacion) => {
            return (
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={publicacion.titulo} class="py-12 flex flex-wrap md:flex-nowrap">
                <div class="pr-4 md:mb-0 mb-6 flex flex-col md:w-1/5">
                  <p class="font-semibold text-gray-700">{publicacion.revista}</p>
                  <p class="mt-1 text-gray-500 text-sm">{publicacion.fecha}</p>
                </div>
                <div class="md:flex-grow md:w-5/6">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{publicacion.titulo}</h2>
                  <p class="leading-relaxed">{publicacion.autores}</p>
                  <Link to={publicacion.link} target='_blank' class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrupoDeInvestigacionPublicacionesComponent