import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiciosComponent = () => {
  return (
    <div class="bg-gray-100">
      <section class="text-gray-600 body-font max-w-7xl mx-auto px-5">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-full lg:w-24 h-full bg-[#009cde]"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">Servicios</h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Servicios Tecnológicos de Alto Nivel (STAN) prestados por el IMIPP</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/FISH" class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/wtUPJUU.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Hibridación in Situ</h2>
                  <p class="leading-relaxed text-base">Analisis de traslocaciones en tumores y deteccion de virus es muestras fiajdas en formol e incluidas en parafinas.</p>
                </div>
                <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Secuenciacion" class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/Miz8HDK.png" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Secuenciación de amplicones por metodología Sanger</h2>
                  <p class="leading-relaxed text-base">Secuenciación de amplicones por metodología Sanger usando un secuenciador ABI3500 (Life Technologies).</p>
                </div>
                <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/IHQ" class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/1DQkgDP.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Inmunohistoquímica</h2>
                  <p class="leading-relaxed text-base">Determinación de presencia de antígenos en biopsias fijadas en formol e incluidas en parafina.</p>
                </div>
                <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Curso-biologia-molecular" class="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  class="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/1WbnJd3.jpg" alt="content"/>
                  <h2 class="text-lg text-gray-900 font-extrabold title-font mb-4">Curso de Biología Molecular para patólogos</h2>
                  <p class="leading-relaxed text-base">Dirigido a Médicos residentes o especialistas en Anatomía Patológica y otras especialidades afines.</p>
                </div>
                <div class="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
    )
}

export default ServiciosComponent