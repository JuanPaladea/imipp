import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PersonalUnicoComponent = ({open, setOpen, personal}) => {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-black bg-opacity-80 transition-opacity md:block" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="my-auto overflow-hidden rounded-lg mx-auto sm:col-span-4 lg:col-span-5">
                        {<img src={personal.imagen} alt={personal.nombre} className="object-cover object-center h-56" />}
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                      <h2 class="text-xl font-bold tracking-tight text-gray-900">{personal.nombre} </h2>
                      <h3 class="text-gray-500">{personal.cargo} </h3>
                      <p class="mt-3 mb-4 font-light text-gray-700">{personal.descripcionLarga} </p>
                      <span class="flex- space-x-4 sm:mt-0">
                        {personal.link ? 
                        (personal.link.trim() !== '' &&
                        <Link target='_blank' to={personal.link}>
                          <img
                            width="52"
                            alt="US-NLM-PubMed-Logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/US-NLM-PubMed-Logo.svg/2560px-US-NLM-PubMed-Logo.svg.png"
                          />
                        </Link>
                        ) : ''}
                      </span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default PersonalUnicoComponent