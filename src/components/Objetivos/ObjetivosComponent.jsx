import { CheckIcon, DocumentIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'

const ObjetivosComponent = () => {
  return (
    <section class="text-gray-900 text-justify body-font">
      <div class="container px-5 pt-12 pb-24 mx-auto max-w-7xl bg-white">
        <motion.div               
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex items-center mx-auto sm:flex-row flex-col">
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className='sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4'>
                <h3 class="mb-2 text-xl font-bold ">Promover</h3>
                <p class="text-gray-500">el avance del conocimiento científico para mejorar la salud humana con especial énfasis en pediatría.</p>
            </div>
            <div className='sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4'>
                <h3 class="mb-2 text-xl font-bold ">Desarrollar</h3>
                <p class="text-gray-500">investigación científica y técnica de excelencia en el área de la biomedicina con particular interés en los campos de virología, parasitología, patología e inmunología.</p>
            </div>
            <div className='sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4'>
                <h3 class="mb-2 text-xl font-bold ">Contribuir</h3>
                <p class="text-gray-500">a la formación integral de investigadores, técnicos y profesionales del área biomédica.</p>
            </div>
            <div className='sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4'>
                <h3 class="mb-2 text-xl font-bold ">Trasladar</h3>
                <p class="text-gray-500">los conocimientos y procesos así generados para fortalecer la vinculación del sistema científico-tecnológico con el sistema clínico-asistencial.</p>
            </div>
            <div className='sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4'>
                <h3 class="mb-2 text-xl font-bold ">Elaborar</h3>
                <p class="text-gray-500">planes de investigación básica y clínica con aplicación sobre el diagnóstico y tratamiento focalizados.</p>
            </div>
            <div className='sm:pl-8 sm:py-8 sm:my-auto sm:border-l border-gray-200 sm:border-t-0 border-t my-4 pt-4'>
                <h3 class="mb-2 text-xl font-bold ">Difundir</h3>
                <p class="text-gray-500">los resultados de su actividad organizando seminarios y cursos especiales de actualización y estableciendo relaciones de colaboración con similares organismos de investigación del país y el extranjero.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ObjetivosComponent