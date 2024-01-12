import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
  return (
    <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 mt-16 sm:py-32 lg:px-8">
            <div className="text-center">
            <p className="text-base font-semibold text-[#009cde]">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Lo lamentamos, no encontrámos la página que estabas buscando</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                to="/"
                className="rounded-md bg-[#009cde] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                >
                Volver a inicio
                </Link>
                <Link to="/contacto" className="text-sm font-semibold text-gray-900">
                Contactanos <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
            </div>
        </main>
    </div>
  )
}

export default ErrorComponent