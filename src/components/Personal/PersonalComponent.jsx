import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PersonalUnicoComponent from './PersonalUnicoComponent';
import LoaderComponent from '../Loader/LoaderComponent';

const PersonalComponent = ({personal, titulo, descripcion}) => {
  const [selectedPersonal, setSelectedPersonal] = useState(null);
  const [open, setOpen] = useState(false)

  const handleClick = (persona) => {
    setSelectedPersonal(persona)
    setOpen(true)
  }

  return (
    <section class="text-gray-600 body-font mt-16 mx-auto max-w-7xl px-5">
      {selectedPersonal && (
        <PersonalUnicoComponent open={open} setOpen={setOpen} personal={selectedPersonal} />
      )}
      <div class="container mx-auto py-12">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">{titulo}</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{descripcion}</p>
          </div>
        </motion.div>
        <div class="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
          {personal.map((persona) => {
            return (
            <motion.div 
            initial={{ opacity: 0, transition: {duration: 1} }}
            whileInView={{ opacity: 1, transition: {duration: 1} }}
            whileHover={{ scale: 1.02, transition: {duration: 0.1}}}
            whileTap={{ scale: 0.95}}
            key={persona.nombre} 
            class="items-center bg-gray-50 rounded-lg shadow sm:flex hover:cursor-pointer"
            onClick={() => handleClick(persona)}
            >
              <img alt={persona.nombre} class="md:h-48 md:w-48 h-72 w-72 rounded-lg sm:rounded-none sm:rounded-l-lg sm:mx-0 mx-auto" src={persona.imagen}/>
              <div class="p-5 h-full">
                <h2 class="text-xl font-bold tracking-tight text-gray-900">{persona.nombre} </h2>
                <h3 class="text-gray-500">{persona.cargo} </h3>
                <p class="mt-3 mb-4 font-light text-gray-500">{persona.descripcionCorta} </p>
                <span class="flex- space-x-4 sm:mt-0">
                  <Link target='_blank' to={persona.link}>
                    <img width="32" alt="US-NLM-PubMed-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/US-NLM-PubMed-Logo.svg/32px-US-NLM-PubMed-Logo.svg.png"/>
                  </Link>
                </span>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default PersonalComponent