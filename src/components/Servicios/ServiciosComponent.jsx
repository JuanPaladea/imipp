import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiciosComponent = () => {
  return (
    <div className="bg-gray-100">
      <section className="text-gray-600 body-font max-w-7xl mx-auto px-5">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-full lg:w-24 h-full bg-[#009cde]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">Servicios</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Servicios Tecnológicos de Alto Nivel (STAN) prestados por el IMIPP</p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <motion.div 
            whileTap={{ scale: 0.9 }}
            className="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/FISH" className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/wtUPJUU.jpg" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Hibridación in Situ</h2>
                  <p className="leading-relaxed text-base">Analisis de traslocaciones en tumores y deteccion de virus es muestras fiajdas en formol e incluidas en parafinas.</p>
                </div>
                <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            className="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Secuenciacion" className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/Miz8HDK.png" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Secuenciación de amplicones por metodología Sanger</h2>
                  <p className="leading-relaxed text-base">Secuenciación de amplicones por metodología Sanger usando un secuenciador ABI3500 (Life Technologies).</p>
                </div>
                <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            className="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/IHQ" className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/1DQkgDP.jpg" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Inmunohistoquímica</h2>
                  <p className="leading-relaxed text-base">Determinación de presencia de antígenos en biopsias fijadas en formol e incluidas en parafina.</p>
                </div>
                <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.div 
            whileTap={{ scale: 0.9 }}
            className="xl:w-1/4 md:w-1/2 p-4">
              <Link to="/Curso-biologia-molecular" className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                <div>
                  <img
                  className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/1WbnJd3.jpg" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Curso de Biología Molecular para patólogos</h2>
                  <p className="leading-relaxed text-base">Dirigido a Médicos residentes o especialistas en Anatomía Patológica y otras especialidades afines.</p>
                </div>
                <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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