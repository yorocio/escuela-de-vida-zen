import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='mt-28'>
      <div className="font-sans bg-gray-300 px-30 py-12 my-10 mx-20">
        <div className="grid lg:grid-cols-2 gap-36 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">Descubre el Equilibrio con Zen Shiatsu</h2>
            <div className='text-justify'>
              <p className="mb-4 text-base text-gray-700">Bienvenido a un espacio dedicado al bienestar y la armonía a través del Zen Shiatsu.</p>
              <p className="mb-2 text-base text-gray-700">Aquí encontrarás una puerta de entrada a esta terapia holística, que fusiona la sabiduría ancestral de la Medicina Tradicional China con la profundidad del Zen. Más que un simple masaje, el Zen Shiatsu es un camino hacia el equilibrio físico, mental y emocional.</p>
              <p className=" mb-2 text-base text-gray-700">A lo largo de estas páginas, te invitamos a explorar su historia y evolución, desde sus raíces más antiguas hasta su práctica moderna. Conocerás el legado del maestro Shizuto Masunaga, quien revolucionó el Zen Shiatsu con conceptos como el «Hara» y un enfoque basado en la intuición y la conexión profunda con cada persona.</p>
              <p className="mb-2 text-base text-gray-700">Nuestro objetivo es ofrecerte una visión completa de esta disciplina: desde sus fundamentos teóricos hasta su aplicación práctica. Encontrarás información sobre técnicas, adaptaciones terapéuticas y recursos que te permitirán profundizar en este camino de bienestar.</p>
              <p className="mb-2 text-base text-gray-700">Sumérgete en el mundo del Zen Shiatsu con mente abierta y corazón receptivo. Más allá de sus beneficios físicos, esta práctica es una invitación al autoconocimiento y la conexión con tu ser interior.</p>
              <p className="mb-2 text-base text-gray-700 font-semibold">Bienvenido a esta experiencia transformadora.</p>
              <p className="mb-2 text-base text-gray-700 font-bold">Angel Ríos</p>
              <p className="text-base text-gray-700">Sensei</p>
            </div>
          </div>
          <div>
            <Image src="/about.jpg" alt="image" className="rounded-lg object-contain" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About