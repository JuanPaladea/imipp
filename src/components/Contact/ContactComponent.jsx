import { motion } from 'framer-motion'
import React from 'react'

const ContactComponent = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='max-w-7xl mx-auto'>
      <section class="container mx-auto text-gray-600 body-font relative py-24 px-5">
        <div class="flex flex-col py-4">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6">
            <h1 class="sm:w-2/5 text-gray-900 text-2xl font-bold mb-2 sm:mb-0">Contacto</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Ponte en contacto con nosotros</p>
          </div>
        </div>
        <div class="container mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13137.498908478254!2d-58.4122362!3d-34.5946847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb461565531d%3A0x30532fa7a7c8a200!2sIMIPP%20-%20CONICET!5e0!3m2!1sen!2sar!4v1704999202900!5m2!1sen!2sar" style={{filter: 'opacity(0.8)'}}></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">DIRECCION</h2>
                <p class="mt-1">Gallo 1330 - Hospital de Niños Dr. Ricardo Gutierrez Pabellón Q, Anatomía Patológica</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a class="text-indigo-500 leading-relaxed">imipp@conicet.gov.ar</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p class="leading-relaxed">11-4962-9138</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contacto</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Completa el formulario para ponerte en contacto con nosotros</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
              <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <motion.button
            whileTap={{ scale: 0.9 }}
            class="text-white bg-[#009cde] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded text-lg">Contáctanos</motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactComponent