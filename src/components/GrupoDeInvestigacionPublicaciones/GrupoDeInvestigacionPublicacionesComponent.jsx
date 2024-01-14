import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const publicaciones = [
  {
    id: 0,
    titulo: 'Efficacy and Safety of Nifurtimox in Pediatric Patients with Chagas Disease: Results at 4-Year Follow-Up in a Prospective, Historically Controlled Study (CHICO SECURE)',
    fecha: '28 Mar 2023',
    autores: ['Jaime Altcheh', 'Victor Sierra', 'Teresa Ramirez', 'Jimy José Pinto Rocha', 'Ulrike Grossmann', 'Erya Huang', 'Guillermo Moscatelli', 'Olivia Ding'],
    revista: 'ASM Journals / Antimicrobial Agents and Chemotherapy',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36975790/',
  },
  {
    id: 0,
    titulo: 'Efficacy and Safety of Nifurtimox in Pediatric Patients with Chagas Disease: Results at 4-Year Follow-Up in a Prospective, Historically Controlled Study (CHICO SECURE)',
    fecha: '28 Mar 2023',
    autores: ['Jaime Altcheh', 'Victor Sierra', 'Teresa Ramirez', 'Jimy José Pinto Rocha', 'Ulrike Grossmann', 'Erya Huang', 'Guillermo Moscatelli', 'Olivia Ding'],
    revista: 'ASM Journals / Antimicrobial Agents and Chemotherapy',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36975790/',
  },
  {
    id: 0,
    titulo: 'Efficacy and Safety of Nifurtimox in Pediatric Patients with Chagas Disease: Results at 4-Year Follow-Up in a Prospective, Historically Controlled Study (CHICO SECURE)',
    fecha: '28 Mar 2023',
    autores: ['Jaime Altcheh', 'Victor Sierra', 'Teresa Ramirez', 'Jimy José Pinto Rocha', 'Ulrike Grossmann', 'Erya Huang', 'Guillermo Moscatelli', 'Olivia Ding'],
    revista: 'ASM Journals / Antimicrobial Agents and Chemotherapy',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36975790/',
  },
  {
    id: 0,
    titulo: 'Efficacy and Safety of Nifurtimox in Pediatric Patients with Chagas Disease: Results at 4-Year Follow-Up in a Prospective, Historically Controlled Study (CHICO SECURE)',
    fecha: '28 Mar 2023',
    autores: ['Jaime Altcheh', 'Victor Sierra', 'Teresa Ramirez', 'Jimy José Pinto Rocha', 'Ulrike Grossmann', 'Erya Huang', 'Guillermo Moscatelli', 'Olivia Ding'],
    revista: 'ASM Journals / Antimicrobial Agents and Chemotherapy',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36975790/',
  },
]

const GrupoDeInvestigacionPublicacionesComponent = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden bg-gray-100">
      <div className='max-w-7xl mx-auto px-4 pb-12 xl:px-0'>
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 text-2xl font-bold mb-2 sm:mb-0">Publicaciones</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conoce la publicaciones del grupo de Parsitología y Chagas del IMIPP</p>
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
              key={publicacion.id} class="py-12 flex flex-wrap md:flex-nowrap">
                <div class="md:w-256 pr-2 md:mb-0 mb-6 flex flex-col">
                  <p class="font-semibold text-gray-700">{publicacion.revista}</p>
                  <p class="mt-1 text-gray-500 text-sm">{publicacion.fecha}</p>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{publicacion.titulo}</h2>
                  <p class="leading-relaxed">{publicacion.autores.join(', ')}</p>
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