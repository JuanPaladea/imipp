import { AcademicCapIcon, BeakerIcon, UsersIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImagenComponent from '../Galeria/ImagenComponent'

const HeroComponent = () => {
  const [open, setOpen] = useState(false)
  
  return (
      <section className="text-gray-900 body-font bg-gray-100">
        <ImagenComponent open={open} setOpen={setOpen} imagen='https://i.imgur.com/EwKpuHA.jpg'/>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container py-20 mx-auto flex justify-between flex-wrap px-5 max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font text-3xl tracking-tight font-extrabold mb-2 text-gray-900">El IMIPP</h1>
              <div className="leading-relaxed text-justify text-gray-600">El Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) es una Unidad Ejecutora del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET) y el Ministerio de Salud del Gobierno de la Ciudad de Buenos Aires. Ubicado en el Hospital de Niños "Dr. Ricardo Gutierrez".</div>
            </div>
            <Link to="/Investigadores">
              <motion.div
              whileTap={{ scale: 0.9 }}
              className="p-4 flex hover:text-[#009cde]">
                <div className='my-auto mx-2'>
                  <UsersIcon className='h-7 w-7'/>
                </div>
                  <div>
                    <h2 className="title-font font-medium text-3xl">15</h2>
                    <p className="leading-relaxed">Investigadores</p>
                  </div>
              </motion.div>
            </Link>
            <Link to="/Becarios">
              <motion.div
              whileTap={{ scale: 0.9 }}
              className="p-4 flex hover:text-[#009cde]">
                <div className='my-auto mx-2'>
                  <AcademicCapIcon className='h-7 w-7'/>
                </div>
                <div>
                  <h2 className="title-font font-medium text-3xl">6</h2>
                  <p className="leading-relaxed">Becarios</p>
                </div>
              </motion.div>
            </Link>
            <Link to="/CPA">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="p-4 flex hover:text-[#009cde]">
                <div className='my-auto mx-2'>
                  <BeakerIcon className='h-7 w-7'/>
                </div>
                <div>
                  <h2 className="title-font font-medium text-3xl">2</h2>
                  <p className="leading-relaxed">Técnicos</p>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="lg:w-1/2 rounded-lg overflow-hidden mt-6 sm:mt-0 hover:scale-105 transition">
            <motion.img 
            whileTap={{ scale: 0.9}}
            onClick={() => {
              setOpen(true)}}
            className="object-cover w-full shadow cursor-pointer" src="https://i.imgur.com/EwKpuHA.jpg" alt="stats"/>
          </div>
        </motion.div>
      </section>
  )
}

export default HeroComponent