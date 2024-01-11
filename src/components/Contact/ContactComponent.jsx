import React from 'react'

const ContactComponent = () => {
  return (
    <section class="text-gray-600 body-font relative max-w-7xl mx-auto">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13137.498908478254!2d-58.4122362!3d-34.5946847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb461565531d%3A0x30532fa7a7c8a200!2sIMIPP%20-%20CONICET!5e0!3m2!1sen!2sar!4v1704999202900!5m2!1sen!2sar" style={{filter: 'opacity(0.7)'}}></iframe>
      </div>
      <div class="container px-5 py-16 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contacto</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Completa el formulario para ponerte en contacto con nosotros</p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-gray-900 bg-[#009cde] border-0 py-2 px-6 focus:outline-none hover:bg-[#def5ff] rounded text-lg transition background-color ease-in 150ms">Contáctanos</button>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent