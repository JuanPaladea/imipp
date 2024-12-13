import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'

const ServicioBody = ({servicio}) => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 py-24 px-5">
      <div className="max-w-7xl flex flex-wrap mx-auto ">
        {servicio.Lista.map((item) => {
          return (
            <motion.div 
            key={item.Titulo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container flex relative mx-auto pt-10 pb-20 sm:items-center">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center p-4">
                  <ChevronDoubleDownIcon/>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{item.Titulo}</h2>
                  <p className="leading-relaxed text-justify">{item.Descripcion}</p>
                </div>
              </div>
            </motion.div>
        )})}
      </div>
    </section>
  )
}

export default ServicioBody