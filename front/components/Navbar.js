'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../public/logo.png"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Servicios', path: '/services' },
    { name: 'Cursos', path: '/courses' },
    { name: 'Sobre Zen Shiatsu', path: '/about' },
    { name: 'Productos Digitales', path: '/store' },
    { name: 'Blog', path: '/blog' },
    { name: 'Turnos', path: '/calendly' },
    { name: 'Home', path: '/' }
  ]

  return (
    <header className='flex justify-between items-center py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-opacity-60 text-gray-500 shadow-sm'>

      {/* Logo alineado a la izquierda, ocultar en pantallas pequeñas y medianas */}
      <Link href="/" className="hidden md:block absolute left-4">
        <Image src={logo} alt="logo" width={50} height={50} />
      </Link>

      {/* Menú centrado, en pantallas grandes */}
      <nav className='hidden md:flex justify-center gap-14 w-full'>
        {navLinks.slice(0, -1).map((link) => (
          <Link key={link.name} href={link.path} className='hover:text-gray-400 text-sm sm:text-base'>
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Menú desplegable en móviles */}
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

          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className='hover:text-gray-400 text-sm sm:text-base capitalize' onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
