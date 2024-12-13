import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const LineasDeInvestigacionHome = () => {
  return (
    <div className='bg-gray-100'>
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
              <h1 className="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">Líneas de Investigación</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conoce la líneas de investigación que se desarrollan en el IMIPP</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Chagas">
                <div className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                      className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/FoJY1HY.jpg" alt="content"/>
                    <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Parasitología y Chagas</h2>
                    <p className="leading-relaxed text-base">La enfermedad de Chagas es una infección parasitaria causada por el protozoo Trypanosoma cruzi.</p>
                  </div>
                  <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Sifilis">
                <div className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                      className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/2OzB9tU.jpg" alt="content"/>
                    <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Sífilis Congénita</h2>
                    <p className="leading-relaxed text-base">La sífilis es una infección bacteriana de transmisión sexual causada por la bacteria Treponema pallidum.</p>
                  </div>
                  <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/EBV">
                <div className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                      className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/Uu3TyC4.jpg" alt="content"/>
                    <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Virus de Epstein-Barr</h2>
                    <p className="leading-relaxed text-base">El Virus de Epstein-Barr (EBV) es un virus de la familia de los herpes que infecta células B en humanos.</p>
                  </div>
                  <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Hepatitis">
                <div className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                      className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/5COtdL6.jpg" alt="content"/>
                    <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Patologías hepáticas: Hepatitis B, Hepatitis C y Hepatitis Autoinmune</h2>
                    <p className="leading-relaxed text-base">Las patologías hepáticas abarcan una amplia gama de trastornos que afectan el hígado.</p>
                  </div>
                  <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="xl:w-1/3 sm:w-1/2 p-4">
              <Link to="/Tumores-Solidos">
                <div className="bg-gray-200 p-2 rounded-lg flex flex-col h-full justify-between hover:scale-105 hover:opacity-85 transition-all">
                  <div>
                    <img
                      className="h-40 rounded-lg shadow w-full object-cover object-center mb-6" src="https://i.imgur.com/6YWl8qo.jpg" alt="content"/>
                    <h2 className="text-lg text-gray-900 font-extrabold title-font mb-4">Biomarcadores en Patologías Pediátricas</h2>
                    <p className="leading-relaxed text-base">Los biomarcadores en tumores sólidos son moléculas o características biológicas que proporcionan información sobre el desarrollo, progresión y respuesta al tratamiento de los cánceres sólidos.</p>
                  </div>
                  <div className="text-indigo-500 inline-flex items-center mt-4">Ver mas
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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