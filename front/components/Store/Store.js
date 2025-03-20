import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const products = [
  {
    id: 1,
    name: "Shiatsu para bebés",
    image: "/libro1.png",
    description: "",
    price: 15,
  },
  {
    id: 2,
    name: "El libro del Shiatsu. Vitalidad y salud a través del tacto",
    image: "/libro2.png",
    description: "",
    price: 20,
  },
  {
    id: 3,
    name: "Shiatsu Facial",
    image: "/libro3.png",
    description: "",
    price: 18,
  },
  {
    id: 4,
    name: "Shiatsu Emocional. Tratado avanzado de terapia",
    image: "/libro4.png",
    description: "",
    price: 25,
  }
]

const Store = () => {
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-12 mt-24">
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
                href="#"
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

