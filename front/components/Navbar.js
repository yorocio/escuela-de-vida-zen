import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/logo.png"

const Navbar = () => {
  return (
    <header className='flex py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 left-0 right-0 z-50'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
        <Link href="/" className="max-md:hidden">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>
        <div id="collapseMenu" className='max-md:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <ul
            className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <Link href="/"><Image src={logo} alt="logo" width={36} height={36} />
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href="/services" className='hover:text-gray-400 text-gray-950 block text-[18px]'>Servicios</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href="/courses" className='hover:text-gray-400 text-gray-950 block text-[18px]'>Cursos y Talleres</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href="/about" className='hover:text-gray-400 text-gray-950 block text-[18px]'>Sobre Zen Shiatsu</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href="/contact" className='hover:text-gray-400 text-gray-950 block text-[18px]'>Contacto</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href="/blog" className='hover:text-gray-400 text-gray-950 block text-[18px]'>Blog</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href="/calendly" className='hover:text-gray-400 text-gray-950 block text-[18px]'>Turnos</Link>
            </li>
          </ul>
        </div>

        <div className='flex max-lg:ml-auto space-x-4'>

          <Link href="/register" className='px-4 py-2 text-sm rounded-full font-bold text-gray-950 border-2 border-gray-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-400'>Register</Link>

          <Link href="/login" className='px-4 py-2 text-sm rounded-full font-bold text-gray-950 border-2 border-gray-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-400'>Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar