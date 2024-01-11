import React from 'react'

const HeroComponent = () => {
  return (
    <section class="text-gray-600 body-font bg-white">
      <div class="container max-w-7xl mx-auto flex px-4 xl:px-0 py-24 md:flex-row flex-col-reverse items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/yAVldxg.jpg"/>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">El IMIPP</h2>
          <p class="mb-8 leading-relaxed text-gray-900 text-justify">El Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP) es una Unidad Ejecutora del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET) ubicado en el Hospital de Niños "Dr. Ricardo Gutiérrez" (HNRG) en la Ciudad de Buenos Aires, el IMIPP opera en conjunto con la División Patología, el Laboratorio de Parasitología y Chagas y el Servicio de Inmunología.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent