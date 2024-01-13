import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ImagenComponent from './ImagenComponent'
import { Link } from 'react-router-dom'

const GaleriaComponent = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <div>
      {selected && <ImagenComponent open={open} setOpen={setOpen} imagen={selected}/>}
      <section class="text-gray-600 body-font max-w-7xl mx-auto">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="container px-5 lg:px-0 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap md:w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <Link>
                  <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/aqoaU04.jpg" onClick={() => {
                    setOpen(true)
                    setSelected('https://i.imgur.com/aqoaU04.jpg')}}/>
                </Link>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Link>
                  <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/VyfwdKv.jpg" onClick={() => {
                    setOpen(true)
                    setSelected('https://i.imgur.com/VyfwdKv.jpg')}}/>
                </Link>
              </div>
              <div class="md:p-2 p-1 w-full">
                <Link>
                  <img alt="gallery" class="w-full h-full object-cover object-center block hover:scale-105 transition-all" src="https://i.imgur.com/xCFaL8h.jpg" onClick={() => {
                    setOpen(true)
                    setSelected('https://i.imgur.com/xCFaL8h.jpg')}}/>
                </Link>
              </div>
            </div>
            <div class="flex flex-wrap md:w-1/2">
              <div class="md:p-2 p-1 w-full">
                <Link>
                  <img alt="gallery" class="w-full h-full object-cover object-center block hover:scale-105 transition-all" src="https://i.imgur.com/VtSYwB7.jpg" onClick={() => {
                    setOpen(true)
                    setSelected('https://i.imgur.com/VtSYwB7.jpg')}}/>
                </Link>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Link>
                  <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/SjjYW6S.jpg" onClick={() => {
                    setOpen(true)
                    setSelected('https://i.imgur.com/SjjYW6S.jpg')}}/>
                </Link>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Link>
                  <img alt="gallery" class="w-full object-cover h-full object-center block hover:scale-105 transition-all" src="https://i.imgur.com/2OLDBiE.jpg" onClick={() => {
                    setOpen(true)
                    setSelected('https://i.imgur.com/2OLDBiE.jpg')}}/>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default GaleriaComponent