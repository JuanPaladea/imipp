import { DocumentIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import React from 'react'

const ObjetivosComponent = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-12 pb-24 mx-auto">
        <motion.div               
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-[#009cde] p-2 flex-shrink-0">
            <LightBulbIcon/>
          </div>
          <div class="flex-grow text-left mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Misión</h2>
            <ul>
              <li class="leading-relaxed text-base mb-2">Promover el avance del conocimiento científico para mejorar la salud humana con especial énfasis en pediatría.</li>
              <li class="leading-relaxed text-base mb-2">Desarrollar investigación científica y técnica de excelencia en el área de la biomedicina con particular interés en los campos de virología, parasitología, patología e inmunología.</li>
              <li class="leading-relaxed text-base mb-2">Contribuir a la formación integral de investigadores, técnicos y profesionales del área biomédica.</li>
              <li class="leading-relaxed text-base mb-2">Trasladar los conocimientos y procesos así generados para fortalecer la vinculación del sistema científico-tecnológico con el sistema clínico-asistencial.</li>
            </ul>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow text-left mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Objetivos</h2>
            <ul>
              <li class="leading-relaxed text-base mb-2">Integrar y articular a los grupos de investigación que lo conforman.</li>
              <li class="leading-relaxed text-base mb-2">Elaborar planes de investigación básica y clínica con aplicación sobre el diagnóstico y tratamiento focalizados</li>
              <li class="leading-relaxed text-base mb-2">Proveer al Hospital de Niños Dr. Ricardo Gutierrez y la comunidad servicios diagnósticos y de asistencia científica y técnica de alta complejidad directamente derivados de los desarrollos de sus grupos de investigación.</li>
              <li class="leading-relaxed text-base mb-2">Difundir los resultados de su actividad organizando seminarios y cursos especiales de actualización y estableciendo relaciones de colaboración con similares organismos de investigación del país y el extranjero.</li>
            </ul>
          </div>
          <div class="sm:w-32 sm:h-32 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-[#009cde] p-4 flex-shrink-0">
            <DocumentIcon/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ObjetivosComponent