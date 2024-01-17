import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const LineasDeInvestigacionHome = () => {
  return (
    <div className='bg-gray-100'>
      <section class="text-gray-600 body-font max-w-7xl mx-auto px-5">
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
              <h1 class="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">Líneas de Investigación</h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conoce la líneas de investigación que se desarrollan en el IMIPP</p>
            </div>
          </div>
          <div class="flex flex-wrap justify-center -m-4">
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Chagas">
                <div class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                    class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/FoJY1HY.jpg" alt="content"/>
                    <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Parasitología y Chagas</h2>
                    <p class="leading-relaxed text-base">La enfermedad de Chagas es una infección parasitaria causada por el protozoo Trypanosoma cruzi.</p>
                  </div>
                  <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Sifilis">
                <div class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                    class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/2OzB9tU.jpg" alt="content"/>
                    <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Sífilis Congénita</h2>
                    <p class="leading-relaxed text-base">La sífilis es una infección bacteriana de transmisión sexual causada por la bacteria Treponema pallidum.</p>
                  </div>
                  <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/EBV">
                <div class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                    class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/Uu3TyC4.jpg" alt="content"/>
                    <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Virus de Epstein-Barr</h2>
                    <p class="leading-relaxed text-base">El Virus de Epstein-Barr (EBV) es un virus de la familia de los herpes que infecta células B en humanos.</p>
                  </div>
                  <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Hepatitis">
                <div class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                    class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/rzdjF3v.jpg" alt="content"/>
                    <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Patologías hepáticas: Hepatitis B, Hepatitis C y Hepatitis Autoinmune</h2>
                    <p class="leading-relaxed text-base">Las patologías hepáticas abarcan una amplia gama de trastornos que afectan el hígado.</p>
                  </div>
                  <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Tumores-Solidos">
                <div class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                    class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/6YWl8qo.jpg" alt="content"/>
                    <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Biomarcadores en Patologías Pediátricas</h2>
                    <p class="leading-relaxed text-base">Los biomarcadores en tumores sólidos son moléculas o características biológicas que proporcionan información sobre el desarrollo, progresión y respuesta al tratamiento de los cánceres sólidos.</p>
                  </div>
                  <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
    )
}

export default LineasDeInvestigacionHome