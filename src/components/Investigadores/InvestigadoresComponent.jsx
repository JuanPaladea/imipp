import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const investigadores = [
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
  {
    id: 0,
    nombre: 'Dra. María Victoria Preciado',
    cargo: 'Investigadora Principal',
    descripcionCorta: 'Directora del IMIPP',
    descripcion: 'Bioquímica, Facultad de Farmacia y Bioquímica, UBA; Doctora de la Universidad de Buenos Aires. Directora del IMIPP CONICET-GCBA. Las líneas de investigación de mi grupo abordan los mecanismos patogénicos de las infecciones virales crónicas (virus de Epstein Barr, virus de Hepatitis C y de Hepatitis B). En referencia al virus de Epstein Barr investigamos también la variabilidad molecular y evolución del genoma viral en relación al sistema inmune del hospedador. Finalmente, trabajamos en la identificación de biomarcadores en neoplasias pediátricas orientada al desarrollo de una plataforma de diagnóstico molecular de mediana y alta complejidad.',
    img: 'https://i.imgur.com/i987ymk.png',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/?term=Preciado+MV&cauthor_id=34820942'
  },
]

const InvestigadoresComponent = () => {
  const [selectedId, setSelectedId] = useState(null)
  
  return (
    <section class="text-gray-600 body-font mt-16">
      <div class="container px-4 lg:px-0 py-24 mx-auto max-w-7xl mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Investigadores</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Miembros de la Carrera del Investigador Científico del IMIPP</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {investigadores.map((investigador) => {
            return (
            <div key={investigador.id} class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={investigador.img}/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">{investigador.nombre} </h2>
                  <h3 class="text-gray-500 mb-3">{investigador.cargo} </h3>
                  <p class="mb-4">{investigador.descripcionCorta} </p>
                  <span class="inline-flex">
                    <Link to={investigador.pubmed}>
                      <img width="32" alt="US-NLM-PubMed-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/US-NLM-PubMed-Logo.svg/32px-US-NLM-PubMed-Logo.svg.png"/>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default InvestigadoresComponent