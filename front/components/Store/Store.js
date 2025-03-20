import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const products = [
  {
    id: 1,
    name: "Shiatsu para bebés",
    image: "/libro1.png",
    description: "Este libro está diseñado para los padres y cuidadores que buscan ofrecer a los bebés una experiencia de bienestar desde sus primeros meses de vida. A través del shiatsu, una técnica de masaje terapéutico de origen japonés, se enseñan suaves movimientos que promueven la relajación, el alivio de cólicos y mejoran la calidad del sueño de los pequeños. Con un enfoque accesible y práctico, 'Shiatsu para bebés' es una guía perfecta para establecer un vínculo profundo y armonioso con los más pequeños, mejorando su salud y felicidad a través del contacto amoroso y consciente.",
    price: 15,
  },
  {
    id: 2,
    name: "El libro del Shiatsu. Vitalidad y salud a través del tacto",
    image: "/libro2.png",
    description: "Este libro es una obra completa sobre el arte del shiatsu, una técnica tradicional japonesa que utiliza la presión de los dedos para equilibrar la energía vital del cuerpo. 'El libro del Shiatsu' explica cómo esta disciplina puede mejorar la salud física y emocional, aliviando tensiones, promoviendo la circulación y fortaleciendo el sistema inmunológico. Ideal tanto para principiantes como para terapeutas experimentados, este manual te guiará en el uso del tacto para mantener y restaurar la vitalidad del cuerpo, proporcionando herramientas prácticas para la autosanación.",
    price: 20,
  },
  {
    id: 3,
    name: "Shiatsu Facial",
    image: "/libro3.png",
    description: "'Shiatsu Facial' es una guía especializada en la aplicación de shiatsu en el rostro, una técnica que combina el arte ancestral del masaje con puntos de acupresión para mejorar la salud de la piel, reducir el estrés y revitalizar el rostro. A través de sencillas instrucciones paso a paso, este libro ofrece un enfoque natural para el cuidado de la piel, estimulando la circulación sanguínea y promoviendo una apariencia más luminosa y relajada. Ideal para quienes desean aprender a realizar un tratamiento facial terapéutico en la comodidad de su hogar o como parte de su práctica profesional.",
    price: 18,
  },
  {
    id: 4,
    name: "Shiatsu Emocional. Tratado avanzado de terapia",
    image: "/libro4.png",
    description: "En 'Shiatsu Emocional', el shiatsu se profundiza como una herramienta para abordar no solo los aspectos físicos, sino también emocionales del bienestar. Este tratado avanzado explora cómo las tensiones emocionales y el estrés pueden afectar la salud y cómo la aplicación de técnicas de shiatsu específicas puede liberar bloqueos emocionales, promoviendo un equilibrio integral. A través de estudios de caso, ejercicios prácticos y teorías detalladas, este libro es perfecto para terapeutas profesionales y estudiantes avanzados que buscan integrar el trabajo emocional con el shiatsu en su práctica terapéutica.",
    price: 25,
  }
]

const Store = () => {
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl my-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-12">
        Explorá el Mundo del Shiatsu
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
        {products.map((prod, indexx) => (
          <div
            className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all"
            key={indexx}
          >
            <div className="w-full">
              <Image
                src={prod.image}
                alt={`Producto ${prod.name}`}
                width={300}
                height={400}
                className="w-full object-cover object-top aspect-[230/307]"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                  {prod.name}
                </h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">
                    Precio: ${prod.price}
                  </h6>
                </div>
              </div>
              <Link
                href={`/store/${prod.id}`} key={prod.id}
                className="text-sm px-2 py-2 font-medium w-full mt-4 bg-gray-800 hover:bg-gray-600 text-white tracking-wide ml-auto outline-none border-none rounded text-center">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store

