import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <motion.footer 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    class="mx-auto max-w-7xl border-t border-gray-200 mt-16">
      <div class="container py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="h-14 w-auto"
              src="https://i.imgur.com/A9MMdUX.png"
              alt="IMIPP" 
            />
          </a>
          <p class="mt-2 text-sm text-gray-500">Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas</p>
        </div>
        <div class="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="font-semibold text-gray-900 text-sm mb-3">Grupos de Investigación</h2>
            <nav class="list-none mb-10">
              <li>
                <Link to='/Chagas' class="text-gray-600 hover:text-gray-800">Chagas</Link>
              </li>
              <li>
                <Link to="/EBV" class="text-gray-600 hover:text-gray-800">Virus de Epstein-Barr</Link>
              </li>
              <li>
                <Link to="/Hepatitis" class="text-gray-600 hover:text-gray-800">Patologías Hepáticas</Link>
              </li>
              <li>
                <Link to="/Tumores-Solidos" class="text-gray-600 hover:text-gray-800">Biomarcadores en Tumores Sólidos</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="font-semibold text-gray-900 text-sm mb-3">Integrantes</h2>
            <nav class="list-none mb-10">
              <li>
                <Link to="/Investigadores" class="text-gray-600 hover:text-gray-800">Investigadores</Link>
              </li>
              <li>
                <Link to="/Becarios" class="text-gray-600 hover:text-gray-800">Becarios</Link>
              </li>
              <li>
                <Link to="/CPA" class="text-gray-600 hover:text-gray-800">Personal de Apoyo</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="font-semibold text-gray-900 text-sm mb-3">Servicios</h2>
            <nav class="list-none mb-10">
              <li>
                <Link to="/FISH" class="text-gray-600 hover:text-gray-800">Hibridación in Situ</Link>
              </li>
              <li>
                <Link to="/Secuenciacion" class="text-gray-600 hover:text-gray-800">Secuenciación Sanger</Link>
              </li>
              <li>
                <Link to="/IHQ" class="text-gray-600 hover:text-gray-800">Inmunohistoquímica</Link>
              </li>
              <li>
                <Link to="/Curso-biologia-molecular" class="text-gray-600 hover:text-gray-800">Curso de Biología Molecular para patólogos</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col">
            <Link class="font-semibold text-gray-900 text-sm mb-3">Producción</Link>
            <Link class="font-semibold text-gray-900 text-sm mb-3">Contacto</Link>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 IMIPP —
            <Link href="https://github.com/JuanPaladea" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@JuanPaladea</Link>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </motion.footer>
  )
}

export default FooterComponent