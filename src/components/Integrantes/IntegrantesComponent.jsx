import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonalUnicoComponent from '../Personal/PersonalUnicoComponent';
import LoaderComponent from '../Loader/LoaderComponent';

const IntegrantesComponent = ({ integrantes, titulo }) => {
  const [selectedPersonal, setSelectedPersonal] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (integrante) => {
    // Open PersonalUnicoComponent if it's not a link
    setOpen(true);
    setSelectedPersonal(integrante);
  };

  const handleLinkClick = (event) => {
    // Prevent handleClick from being triggered when clicking the link
    event.stopPropagation();
  };

  return (
    <section className="text-gray-600 body-font mt-16 mx-auto max-w-7xl px-5">
      {selectedPersonal && (
        <PersonalUnicoComponent open={open} setOpen={setOpen} personal={selectedPersonal} />
      )}
      <div className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-[#009cde]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 text-3xl tracking-tight font-extrabold mb-2 sm:mb-0">
              Integrantes
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{titulo}</p>
          </div>
        </motion.div>
        <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
          {integrantes.map((integrante) => (
            <motion.div
              initial={{ opacity: 0, transition: { duration: 1 } }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95 }}
              key={integrante.nombre}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex hover:cursor-pointer"
              onClick={() => handleClick(integrante)}
            >
              <img
                alt={integrante.nombre}
                className="md:h-48 md:w-48 h-72 w-72 rounded-lg sm:rounded-none sm:rounded-l-lg sm:mx-0 mx-auto"
                src={integrante.imagen}
              />
              <div className="p-5 h-full">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">{integrante.nombre} </h2>
                <h3 className="text-gray-500">{integrante.cargo} </h3>
                <p className="mt-3 mb-4 font-light text-gray-500">{integrante.descripcionCorta} </p>
                {(integrante.link || integrante.link.trim() !== '') && (
                    <Link
                      target="_blank"
                      to={integrante.link}
                      className="link w-fit"
                      onClick={(event) => handleLinkClick(event)}
                    >
                      <img
                        width="52"
                        alt="US-NLM-PubMed-Logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/US-NLM-PubMed-Logo.svg/2560px-US-NLM-PubMed-Logo.svg.png"
                      />
                    </Link>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrantesComponent;
