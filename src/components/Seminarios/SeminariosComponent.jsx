import axios from 'axios';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const SeminariosComponent = () => {
  const [email, setEmail] = useState('')
  
  const db = getFirestore()

  const isValidEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      suscribeSeminarios(email);
    } else {
      toast.error('Por favor, introduce un correo electrónico válido');
    }
  }

  const suscribeSeminarios = async (email) => {
    const seminariosCollection = collection(db, 'Seminarios');
  
    // Check if the email already exists in the collection
    const querySnapshot = await getDocs(
      query(seminariosCollection, where('email', '==', email))
    );
  
    if (!querySnapshot.empty) {
      // Email already subscribed
      toast.error('Este correo electrónico ya está suscrito.');
      return;
    }
  
    // Email is not subscribed, proceed to add it
    await toast.promise(
      addDoc(seminariosCollection, {
        email: email,
        timestamp: new Date()
      }),
      {
        loading: 'Suscribiendo...',
        success: <b>Suscrito con éxito</b>,
        error: <b>Error al suscribirse</b>,
      }
    );
  
    setEmail('');
  };

  return (
    <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="max-w-7xl mx-auto">
        <div className='container mx-auto text-gray-600 body-font relative py-12 px-5'>
          <div className="flex flex-col py-4">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-full lg:w-24 h-full bg-[#009cde]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6">
              <h1 className="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-4">Seminarios</h1>
            </div>
          </div>
          <div className="gap-8 items-center xl:gap-16 md:grid md:grid-cols-2">
              <img className="w-full rounded-lg shadow" src="https://i.imgur.com/t5PWfCT.jpg" alt="dashboard image"/>
              <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Suscríbete para participar de nuestro ciclo de seminarios.</h2>
                  <p className="mb-6 font-light text-gray-500 md:text-lg">Para cumplir con nuestra misión de contribución al ámbito científico se organizan seminarios, semana por medio, los días lunes a las 12:00hs, donde se da lugar para la exposición de los distintos trabajos, tanto de grupos del IMIPP como de invitados especiales. En los mismos participan estudiantes, becarios, bioquímicos, biólogos, médicos e investigadores.</p>
                  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                      <div className="relative w-full">
                          <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 d">Email</label>
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                          </div>
                          <input onChange={(e) => setEmail(e.target.value)} value={email} className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:border-[#009cde]" placeholder="Introduce tu e-mail" type="email" id="email" required/>
                      </div>
                      <div>
                          <motion.button
                          onClick={(e) => handleSubmit(e)}
                          whileTap={{ scale: 0.9 }}
                          className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border border-[#009cde] cursor-pointer bg-[#009cde] hover:bg-opacity-90 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800">Subscríbete</motion.button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </motion.section>
  )
}

export default SeminariosComponent