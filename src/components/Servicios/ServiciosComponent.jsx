import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiciosComponent = () => {
  return (
    <div class="bg-gray-100">
      <section class="text-gray-600 body-font max-w-7xl mx-auto px-4 lg:px-0">
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
              <h1 class="sm:w-2/5 text-gray-900 text-2xl font-bold mb-2 sm:mb-0">Servicios</h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Servicios Tecnológicos de Alto Nivel (STAN) prestados por el IMIPP</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/FISH" class="bg-gray-100 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/wtUPJUU.jpg" alt="content"/>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Hibridación in Situ</h2>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Secuenciacion" class="bg-gray-100 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/Miz8HDK.png" alt="content"/>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Secuenciación de amplicones por metodología Sanger</h2>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/IHQ" class="bg-gray-100 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition all" src="https://i.imgur.com/1DQkgDP.jpg" alt="content"/>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Inmunohistoquímica</h2>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Curso-biologia-molecular" class="bg-gray-100 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 hover:opacity-85 transition-all" src="https://i.imgur.com/1WbnJd3.jpg" alt="content"/>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Curso de Biología Molecular para patólogos</h2>
                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
    )
}

export default ServiciosComponent