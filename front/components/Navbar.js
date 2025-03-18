import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/logo.png"

const Navbar = () => {
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
        <Link href="/contact" className='hover:text-gray-400 text-sm sm:text-base'>Contacto</Link>
        <Link href="/blog" className='hover:text-gray-400 text-sm sm:text-base'>Blog</Link>
        <Link href="/calendly" className='hover:text-gray-400 text-sm sm:text-base'>Turnos</Link>
      </nav>

      {/* Menú móvil, visible en pantallas pequeñas */}
      <nav className='sm:hidden flex justify-center gap-4 w-full'>
        <Link href="/services" className='hover:text-gray-400 text-sm sm:text-base'>Servicios</Link>
        <Link href="/courses" className='hover:text-gray-400 text-sm sm:text-base'>Cursos</Link>
        <Link href="/about" className='hover:text-gray-400 text-sm sm:text-base'>Sobre Zen Shiatsu</Link>
        <Link href="/contact" className='hover:text-gray-400 text-sm sm:text-base'>Contacto</Link>
        <Link href="/blog" className='hover:text-gray-400 text-sm sm:text-base'>Blog</Link>
        <Link href="/calendly" className='hover:text-gray-400 text-sm sm:text-base'>Turnos</Link>
      </nav>

    </header>
  )
}

export default Navbar
