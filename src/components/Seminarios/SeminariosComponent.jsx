import { motion } from 'framer-motion'
import React from 'react'

const SeminariosComponent = () => {
  return (
    <section class="bg-white max-w-7xl py-24 px-5 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6">
            <h1 class="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-4">Seminarios</h1>
          </div>
        </div>
        <div class="gap-8 items-center xl:gap-16 md:grid md:grid-cols-2">
            <img class="w-full rounded-lg shadow" src="https://i.imgur.com/t5PWfCT.jpg" alt="dashboard image"/>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Suscríbete para participar de nuestro ciclo de seminarios.</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg">Para cumplir con nuestra misión de contribución al ámbito científico se organizan seminarios, semana por medio, los días lunes a las 12:00hs, donde se da lugar para la exposición de los distintos trabajos, tanto de grupos del IMIPP como de invitados especiales. En los mismos participan estudiantes, becarios, bioquímicos, biólogos, médicos e investigadores.</p>
                <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div class="relative w-full">
                        <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 d">Email</label>
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:border-[#009cde]" placeholder="Introduce tu e-mail" type="email" id="email" required/>
                    </div>
                    <div>
                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border border-[#009cde] cursor-pointer bg-[#009cde] hover:bg-opacity-90 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800">Subscríbete</motion.button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SeminariosComponent