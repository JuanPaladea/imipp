import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const investigadores = [
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA.',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA.',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA.',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA.',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
]

const InvestigadoresComponent = () => {

  return (
    <section class="text-gray-600 body-font mt-16 mx-auto max-w-7xl px-4 lg:px-0">
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
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conoce la publicaciones del grupo de Parsitología y Chagas del IMIPP</p>
          </div>
        </motion.div>
        <div class="flex flex-wrap -m-4">
          {investigadores.map((investigador) => {
            return (
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={investigador.id} class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={investigador.img}/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">{investigador.nombre} </h2>
                  <h3 class="text-gray-500 mb-3">{investigador.cargo} </h3>
                  <p class="mb-4">{investigador.descripcionCorta} </p>
                  <span class="inline-flex">
                    <Link target='_blank' to={investigador.pubmed}>
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

export default InvestigadoresComponent