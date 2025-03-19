'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../public/logo.png"
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)



  return (
    <header className='flex justify-between items-center py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-opacity-60 text-gray-500 shadow-sm'>

      {/* Logo alineado a la izquierda, ocultar en pantallas pequeñas y medianas */}
      <Link href="/" className="hidden md:block absolute left-4">
        <Image src={logo} alt="logo" width={50} height={50} />
      </Link>

      {/* Menú centrado, en pantallas grandes */}
      <nav className='hidden md:flex justify-center gap-14 w-full'>
        <Link href="/services" className='hover:text-gray-400 text-sm sm:text-base'>Servicios</Link>
        <Link href="/courses" className='hover:text-gray-400 text-sm sm:text-base'>Cursos</Link>
        <Link href="/about" className='hover:text-gray-400 text-sm sm:text-base'>Sobre Zen Shiatsu</Link>
        <Link href="/store" className='hover:text-gray-400 text-sm sm:text-base'>Productos Digitales</Link>
        <Link href="/blog" className='hover:text-gray-400 text-sm sm:text-base'>Blog</Link>
        <Link href="/calendly" className='hover:text-gray-400 text-sm sm:text-base'>Turnos</Link>
      </nav>

      {/* Menú desplegable en móviles */}

       {/* Botón menú hamburguesa */}
       <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-lg py-4 flex flex-col items-center space-y-4  backdrop-blur-sm text-white bg-opacity-70 bg-gray-600">
          {/* Botón Cerrar (X) */}
          <button className="absolute top-2 right-4 text-white backdrop-blur-sm bg-opacity-70 bg-gray-600" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          {["services", "courses", "about", "blog", "calendly", "store"].map((path) => (
            <Link key={path} href={`/${path}`} className='hover:text-gray-400 text-sm sm:text-base capitalize'
              onClick={() => setIsOpen(false)}>
              {path}
            </Link>
          ))}
          <Link href="/" className='hover:text-gray-400 text-sm sm:text-base' onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </div>
      )}
      

    </header>
  )
}

export default Navbar
