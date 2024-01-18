import { AcademicCapIcon, BeakerIcon, UsersIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroComponent = () => {
  return (
      <section class="text-gray-900 body-font bg-gray-100">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container py-20 mx-auto flex justify-between flex-wrap px-5 max-w-7xl mx-auto">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font text-3xl tracking-tight font-extrabold mb-2 text-gray-900">El IMIPP</h1>
              <div class="leading-relaxed text-justify text-gray-600">El Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) es una Unidad Ejecutora del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET) y el Ministerio de Salud del Gobierno de la Ciudad de Buenos Aires. Ubicado en el Hospital de Niños "Dr. Ricardo Gutierrez".</div>
            </div>
            <Link to="/Investigadores">
              <motion.div
              whileTap={{ scale: 0.9 }}
              class="p-4 flex hover:text-[#009cde]">
                <div className='my-auto mx-2'>
                  <UsersIcon className='h-7 w-7'/>
                </div>
                  <div>
                    <h2 class="title-font font-medium text-3xl">12</h2>
                    <p class="leading-relaxed">Investigadores</p>
                  </div>
              </motion.div>
            </Link>
            <Link to="/Becarios">
              <motion.div
              whileTap={{ scale: 0.9 }}
              class="p-4 flex hover:text-[#009cde]">
                <div className='my-auto mx-2'>
                  <AcademicCapIcon className='h-7 w-7'/>
                </div>
                <div>
                  <h2 class="title-font font-medium text-3xl">14</h2>
                  <p class="leading-relaxed">Becarios</p>
                </div>
              </motion.div>
            </Link>
            <Link to="/CPA">
              <motion.div
                whileTap={{ scale: 0.9 }}
                class="p-4 flex hover:text-[#009cde]">
                <div className='my-auto mx-2'>
                  <BeakerIcon className='h-7 w-7'/>
                </div>
                <div>
                  <h2 class="title-font font-medium text-3xl">2</h2>
                  <p class="leading-relaxed">Técnicos</p>
                </div>
              </motion.div>
            </Link>
          </div>
          <div class="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full shadow" src="https://i.imgur.com/C6mSe8x.jpg" alt="stats"/>
          </div>
        </motion.div>
      </section>
  )
}

export default HeroComponent