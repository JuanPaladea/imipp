import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const LineasDeInvestigacionHome = () => {
  return (
    <div className='bg-gray-100'>
      <section class="text-gray-600 body-font max-w-7xl mx-auto px-5 lg:px-0">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-[#009cde]"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 text-2xl font-bold mb-2 sm:mb-0">Líneas de Investigación</h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conoce la líneas de investigación que se desarrollan en el IMIPP</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Chagas">
                <div class="bg-gray-100 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/epwMVSd.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Enfermedades Infecciosas Ignoradas</h2>
                  <p class="leading-relaxed text-base">Chagas, Toxoplasmosis y Sífilis congénita</p>
                </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/EBV">
                <div class="bg-gray-100 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/Uu3TyC4.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Virus de Epstein-Barr</h2>
                  <p class="leading-relaxed text-base">El Virus de Epstein-Barr (EBV) es un virus de la familia de los herpes que infecta células B en humanos.</p>
                </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Hepatitis">
                <div class="bg-gray-100 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/0rG79xD.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Patologías hepáticas: Hepatitis B, Hepatitis C y Hepatitis Autoinmune</h2>
                  <p class="leading-relaxed text-base">Las patologías hepáticas abarcan una amplia gama de trastornos que afectan el hígado.</p>
                </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Tumores-Solidos">
                <div class="bg-gray-100 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/yIPupxT.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Biomarcadores en Patologías Pediátricas</h2>
                  <p class="leading-relaxed text-base">Los biomarcadores en tumores sólidos son moléculas o características biológicas que proporcionan información sobre el desarrollo, progresión y respuesta al tratamiento de los cánceres sólidos.</p>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
    )
}

export default LineasDeInvestigacionHome