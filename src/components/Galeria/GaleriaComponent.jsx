import React from 'react'

const GaleriaComponent = () => {
  return (
    <section class="text-gray-600 body-font max-w-7xl mx-auto">
      <div class="container px-5 lg:px-0 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap md:w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/aqoaU04.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/VyfwdKv.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block hover:scale-105 transition-all" src="https://i.imgur.com/xCFaL8h.jpg"/>
            </div>
          </div>
          <div class="flex flex-wrap md:w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block hover:scale-105 transition-all" src="https://i.imgur.com/VtSYwB7.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/SjjYW6S.jpg"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/2OLDBiE.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GaleriaComponent