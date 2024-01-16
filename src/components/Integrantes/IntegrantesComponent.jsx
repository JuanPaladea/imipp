import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PersonalUnicoComponent from '../Personal/PersonalUnicoComponent';
import LoaderComponent from '../Loader/LoaderComponent';

const IntegrantesComponent = ({integrantes, titulo}) => {
  const [selectedPersonal, setSelectedPersonal] = useState(null);
  const [open, setOpen] = useState(false)

  const handleClick = (integrante) => {
    setSelectedPersonal(integrante)
    setOpen(true)
  }
  
  return (
    <section class="text-gray-600 body-font mt-16 mx-auto max-w-7xl px-5">
      {selectedPersonal && (
        <PersonalUnicoComponent open={open} setOpen={setOpen} personal={selectedPersonal} />
      )}
      <div class="container mx-auto py-24">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 text-2xl font-bold mb-2 sm:mb-0">Integrantes</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{titulo}</p>
          </div>
        </motion.div>
        <div class="flex flex-wrap -m-4">
          {integrantes.map((integrante) => {
            return (
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={integrante.nombre} class="p-4 lg:w-1/2">
              <div 
              onClick={() => handleClick(integrante)}
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hover:cursor-pointer">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={integrante.imagen}/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">{integrante.nombre} </h2>
                  <h3 class="text-gray-500 mb-3">{integrante.cargo} </h3>
                  <p class="mb-4">{integrante.descripcionCorta} </p>
                  <span class="inline-flex">
                    <Link target='_blank' to={integrante.link}>
                      <img width="32" alt="US-NLM-PubMed-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/US-NLM-PubMed-Logo.svg/32px-US-NLM-PubMed-Logo.svg.png"/>
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default IntegrantesComponent