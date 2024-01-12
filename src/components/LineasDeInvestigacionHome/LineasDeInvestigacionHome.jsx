import React from 'react'
import { Link } from 'react-router-dom'

const LineasDeInvestigacionHome = () => {
  return (
    <section class="text-gray-600 body-font max-w-7xl mx-auto border-b border-gray-200 my-2">
      <div class="container px-5 lg:px-0 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#009cde]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 text-2xl font-bold mb-2 sm:mb-0">Líneas de Investigación</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conoce la líneas de investigación que se desarrollan en el IMIPP</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-2/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://i.imgur.com/epwMVSd.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Enfermedades Infecciosas Ignoradas</h2>
            <p class="text-base leading-relaxed mt-2">Chagas, Toxoplasmosis y Sífilis congénita</p>
            <Link class="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="p-4 md:w-2/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://i.imgur.com/Uu3TyC4.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Virus de Epstein-Barr</h2>
            <p class="text-base leading-relaxed mt-2">El Virus de Epstein-Barr (VEB) es un virus de la familia de los herpes que infecta células B en humanos.</p>
            <Link class="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="p-4 md:w-2/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://i.imgur.com/0rG79xD.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Patologías hepáticas: Hepatitis B, Hepatitis C y Hepatitis Autoinmune</h2>
            <p class="text-base leading-relaxed mt-2">Las patologías hepáticas abarcan una amplia gama de trastornos que afectan el hígado.</p>
            <Link class="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="p-4 md:w-2/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="https://i.imgur.com/yIPupxT.jpg"/>
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Biomarcadores en Patologías Pediátricas</h2>
            <p class="text-base leading-relaxed mt-2">Los biomarcadores en tumores sólidos son moléculas o características biológicas que proporcionan información sobre el desarrollo, progresión y respuesta al tratamiento de los cánceres sólidos</p>
            <Link class="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default LineasDeInvestigacionHome