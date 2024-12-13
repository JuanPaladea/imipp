import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const GrupoDeInvestigacionPublicacionesComponent = ({publicaciones, titulo}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
      <div className='max-w-7xl mx-auto px-5 pb-12'>
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-full lg:w-24 h-full bg-[#009cde]"></div>
          </div>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">Publicaciones</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{titulo}</p>
          </motion.div>
        </div>
        <div className="container py-6 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-300">
          {publicaciones.map((publicacion) => {
            return (
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={publicacion.titulo} className="py-12 flex flex-wrap md:flex-nowrap">
                <div className="pr-4 md:mb-0 mb-6 flex flex-col md:w-1/5">
                  <p className="font-semibold text-gray-700">{publicacion.revista}</p>
                  <p className="mt-1 text-gray-500 text-sm">{publicacion.fecha}</p>
                </div>
                <div className="md:flex-grow md:w-5/6">
                  <Link to={publicacion.link} target='_blank'>
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 hover:underline ">{publicacion.titulo}</h2>
                    <p className="leading-relaxed">{publicacion.autores}</p>
                    <div target='_blank' className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
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