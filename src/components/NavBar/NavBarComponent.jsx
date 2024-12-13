import { Fragment, useEffect, useState } from 'react'
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
  { name: 'Investigadores', description: 'Conocé a los investigadores que conforman el IMIPP', href: '/Investigadores', icon: UsersIcon },
  { name: 'Becarios', description: 'Conocé a los becarios del IMIPP', href: '/Becarios', icon: AcademicCapIcon },
  { name: 'Personal de Apoyo', description: 'Conocé a los integrantes de la Carrera del Personal de Apoyo que desempeñan su trabajo en el IMIPP', href: '/CPA', icon: BeakerIcon },
]

const gruposDeInvestigacion = [
  { name: 'Chagas', description: 'Conoce al grupo enfocado en el estudio de Parasitología y Chagas del IMIPP', href: '/Chagas', icon: ChevronDoubleRightIcon },
  { name: 'Patologías Hepáticas', description: 'Conoce al grupo enfocado en el estudio de la Hepatitis B, Hepatitis C y Hepatitis Autoinmune', href: 'Hepatitis', icon: ChevronDoubleRightIcon },
  { name: 'Virus de Epstein-Barr', description: 'Conoce al grupo enfocado en el estudio del Virus de Epstein-Barr (EBV)', href: '/EBV', icon: ChevronDoubleRightIcon },
  { name: 'Biomarcadores en Tumores Sólidos', description: 'Conoce al grupo enfocado en el estudio de biomarcadores en patologías pediátricas', href: '/Tumores-Solidos', icon: ChevronDoubleRightIcon },
  { name: 'Sífilis', description: 'Conoce al grupo enfocado en el estudio de sífilis congénita', href: '/Sifilis', icon: ChevronDoubleRightIcon },
]

const servicios = [
  { name: 'Hibridación In Situ', description: 'Analisis de traslocaciones en tumores y deteccion de virus es muestras fiajdas en formol e incluidas en parafina', href: '/FISH', icon: ChevronDoubleRightIcon },
  { name: 'Secuenciación de amplicones por metodología Sanger', description: 'Secuenciación de amplicones por metodología Sanger usando un secuenciador ABI3500 (Life Technologies)', href: '/Secuenciacion', icon: ChevronDoubleRightIcon },
  { name: 'Inmunohistoquímica', description: 'Inmunohistoquímica para expresión de antígenos en biopsias fijadas en formol e incluidas en parafina, con anticuerpos primarios específicos, en sistema automatizado', href: '/IHQ', icon: ChevronDoubleRightIcon },
  { name: 'Curso de Biología Molecular para patólogos', description: 'Curso de Biología Molecular para patólogos', href: '/Curso-biologia-molecular', icon: ChevronDoubleRightIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBarComponent({location}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollBorder, setScrollBorder] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    const isOnHomePage = location.pathname === '/';
    const isScrolled = isOnHomePage && scrollPosition < window.innerHeight * 0.70;
    const isScrollBorder = isOnHomePage && scrollPosition < window.innerHeight *0.95;
    setScrolled(isScrolled);
    setScrollBorder(isScrollBorder)
    window.addEventListener('scroll', handleScroll);
  }, [location.pathname, scrollPosition]);

  return (
    <header className={`${scrolled ? 'bg-transparent' : 'bg-white'} ${scrollBorder ? '' : 'border-b border-gray-200'} fixed mx-auto top-0 w-full transition duration-500 z-20`}>
      <nav className={`flex items-center justify-between py-2 p-5 max-w-7xl mx-auto w-dvh`} aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">IMIPP</span>
            <img
              className="h-14 w-auto"
              src={`${scrolled ? 'https://i.imgur.com/z07pPGJ.png' : 'https://i.imgur.com/A9MMdUX.png'}`}
              alt="IMIPP" 
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-gray-900'}`} aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className={`px-2 tracking-tight font-extrabold leading-6 p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms ${scrolled ? 'text-white' : 'text-gray-900'}`}>
            Inicio
          </Link>
          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 px-2 tracking-tight font-extrabold text-md p-1 rounded hover:bg-[#009cde] transition all ease-in 150ms ${scrolled ? 'text-white' : 'text-gray-900'}`}>
              Grupos de Investigación
              <ChevronDownIcon className={`h-5 w-5 flex-none ${scrolled ? 'text-white' : 'text-gray-900'}`} aria-hidden="true" />
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
              <Popover.Panel className="absolute -left-60 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {gruposDeInvestigacion.map((item) => (
                    <Link key={item.name} to={item.href}>
                      <Popover.Button className="group relative flex items-center text-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 group-hover:text-[#009cde]" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <p className='block font-semibold text-gray-900'>{item.name}</p>
                          <span className="Popolute inset-0" />
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </Popover.Button>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 px-2 tracking-tight font-extrabold text-md p-1 rounded hover:bg-[#009cde] transition all ease-in 150ms ${scrolled ? 'text-white' : 'text-gray-900'}`}>
              Integrantes
              <ChevronDownIcon className={`h-5 w-5 flex-none ${scrolled ? 'text-white' : 'text-gray-900'}`} aria-hidden="true" />
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
              <Popover.Panel className="absolute -left-60 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                {integrantes.map((item) => (
                    <Link key={item.name} to={item.href}>
                      <Popover.Button className="group relative flex items-center text-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 group-hover:text-[#009cde]" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <p className='block font-semibold text-gray-900'>{item.name}</p>
                          <span className="Popolute inset-0" />
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </Popover.Button>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 px-2 tracking-tight font-extrabold text-md p-1 rounded hover:bg-[#009cde] transition all ease-in 150ms ${scrolled ? 'text-white' : 'text-gray-900'}`}>
              Servicios
              <ChevronDownIcon className={`h-5 w-5 flex-none ${scrolled ? 'text-white' : 'text-gray-900'}`} aria-hidden="true" />
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
              <Popover.Panel className="absolute -left-60 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                {servicios.map((item) => (
                    <Link key={item.name} to={item.href}>
                      <Popover.Button key={item.name} className="group relative flex items-center text-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 group-hover:text-[#009cde]" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <p className='block font-semibold text-gray-900'>{item.name}</p>
                          <span className="Popolute inset-0" />
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </Popover.Button>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/Contacto" className={`px-2 tracking-tight font-extrabold leading-6 p-1 rounded hover:bg-[#009cde] transition background-color ease-in 150ms ${scrolled ? 'text-white' : 'text-gray-900'}`}>
            Contacto
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
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
                  onClick={() => setMobileMenuOpen(false)}
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 tracking-tight font-extrabold text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                >
                  Inicio
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 tracking-tight font-extrabold text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms">
                        Grupos de Investigación 
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {gruposDeInvestigacion.map((item) => (
                          <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                            <Disclosure.Button
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
                            >
                                {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 tracking-tight font-extrabold text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms">
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
                            <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 tracking-tight font-extrabold text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms">
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 text-start hover:bg-[#def5ff] transition background-color ease-in 150ms"
                          >
                            <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/Contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 tracking-tight font-extrabold text-gray-900 hover:bg-[#def5ff] transition background-color ease-in 150ms"
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
