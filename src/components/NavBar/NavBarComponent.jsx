import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  Bars3Icon,
  BeakerIcon,
  ChevronDoubleRightIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const integrantes = [
  { name: 'Investigadores', description: 'Conoce a los investigadores que conforman el IMIPP', href: '#', icon: UsersIcon },
  { name: 'Becarios', description: 'Conoce a los becarios desarrollando su tesis doctoral o trabajo pos-doctoral en el IMIPP', href: '#', icon: AcademicCapIcon },
  { name: 'Personal de Apoyo', description: 'Conoce a los integrantes de la Carrera del Personal de Apoyo que desempeñan su trabajo en el IMIPP', href: '#', icon: BeakerIcon },
]

const gruposDeInvestigacion = [
  { name: 'Chagas', description: 'Conoce al grupo enfocado en el estudio de Parasitología y Chagas del IMIPP', href: '#', icon: ChevronDoubleRightIcon },
  { name: 'Virus de Epstein-Barr', description: 'Conoce al grupo enfocado en el estudio del Virus de Epstein-Barr (EBV)', href: '#', icon: ChevronDoubleRightIcon },
  { name: 'Patologías Hepáticas', description: 'Conoce al grupo enfocado en el estudio de la Hepatitis B, Hepatitis C y Hepatitis Autoinmune', href: '#', icon: ChevronDoubleRightIcon },
  { name: 'Biomarcadores en Tumores Sólidos', description: 'Conoce al grupo enfocado en el estudio de biomarcadores en patologías pediátricas', href: '#', icon: ChevronDoubleRightIcon },
]

const servicios = [
  { name: 'Hibridación In Situ', description: 'Analisis de traslocaciones en tumores y deteccion de virus es muestras fiajdas en formol e incluidas en parafina', href: '#', icon: ChevronDoubleRightIcon },
  { name: 'Secuenciación de amplicones por metodología Sanger', description: 'Secuenciación de amplicones por metodología Sanger usando un secuenciador ABI3500 (Life Technologies)', href: '#', icon: ChevronDoubleRightIcon },
  { name: 'Inmunohistoquímica', description: 'Inmunohistoquímica para expresión de antígenos en biopsias fijadas en formol e incluidas en parafina, con anticuerpos primarios específicos, en sistema automatizado', href: '#', icon: ChevronDoubleRightIcon },
  { name: 'Curso de Biología Molecular para patólogos', description: 'Curso de Biología Molecular para patólogos', href: '#', icon: ChevronDoubleRightIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-opacity-100 fixed top-0 w-full mx-auto">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">IMIPP</span>
            <img
              className="h-14 w-auto"
              src="https://i.imgur.com/A9MMdUX.png"
              alt="IMIPP" 
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-white p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms">
            Inicio
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms">
              Grupos de Investigación
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {gruposDeInvestigacion.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-white group-hover:text-[#009cde]" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms">
              Integrantes
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {integrantes.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#009cde]" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms">
              Servicios
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {servicios.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#009cde]" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/Produccion" className="text-sm font-semibold leading-6 text-white p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms">
            Producción
          </Link>
          <Link to="/Contacto" className="text-sm font-semibold leading-6 text-white p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms">
            Contacto
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IMIPP</span>
              <img
              className="h-14 w-auto"
              src="https://i.imgur.com/A9MMdUX.png"
              alt="IMIPP" 
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                >
                  Inicio
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        Grupos de Investigación 
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {gruposDeInvestigacion.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                          >
                            <Link to={item.href}>{item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        Integrantes
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {integrantes.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                          >
                            <Link to={item.href}>{item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        Servicios
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {servicios.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                          >
                            <Link to={item.href}>{item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/Produccion"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                >
                  Producción
                </Link>
                <Link
                  to="/Contacto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
