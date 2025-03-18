import Image from "next/image";
import Link from "next/link";
import React from "react";

export const services = [
  {
    id: 1,
    name: "Shiatsu Tradicional",
    image: "/masaje.png",
    description: "El Shiatsu tradicional es una técnica terapéutica japonesa que utiliza presiones específicas con los dedos, palmas y pulgares a lo largo de los canales energéticos del cuerpo. Su objetivo es restaurar el equilibrio vital, aliviando tensiones musculares, mejorando la circulación y promoviendo el bienestar físico y emocional. A través de este masaje, se busca liberar bloqueos energéticos, estimulando el sistema nervioso y fortaleciendo la capacidad de autocuración del cuerpo.",
    duration: "60 min",
    price: 10,
  },
  {
    id: 2,
    name: "Acupuntura",
    image: "/acupuntura.jpg",
    description: "La acupuntura es una antigua práctica de la medicina tradicional china que consiste en insertar agujas finas en puntos específicos del cuerpo para equilibrar el flujo de energía vital, conocido como Qi. Este tratamiento ayuda a aliviar una amplia gama de dolencias, incluyendo dolor crónico, estrés, ansiedad, y trastornos digestivos. Al armonizar el cuerpo y la mente, la acupuntura potencia el bienestar general y la prevención de enfermedades.",
    duration: "60 min",
    price: 30,
  },
  {
    id: 3,
    name: "Fitoterapia",
    image: "/fitoterapia.jpg",
    description: "La fitoterapia es el uso de plantas medicinales para promover la salud y tratar diversas afecciones. En el Instituto Zen Shiatsu, ofrecemos tratamientos personalizados basados en la sabiduría de las plantas, combinando la herbolaria tradicional con los principios de la medicina oriental. Nuestras fórmulas fitoterapéuticas son diseñadas para equilibrar el cuerpo, mejorar la digestión, fortalecer el sistema inmunológico y tratar problemas emocionales, todo de forma natural y respetuosa con el cuerpo.",
    duration: "60 min",
    price: 20,
  }
];

const Services = () => {
  return (
    <section className='my-36'>
      <h2 className="text-center text-3xl font-bold my-6">Nuestros Servicios</h2>
      <div className="container px-6 py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.name}</h3>
                <Image src={service.image} alt={`Servicio ${service.name}`} width={300} height={300} className="object-cover w-full h-48 rounded-t-lg" />
                <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 my-4">{service.description}</p>
                <p className="text-sm text-gray-700 leading-relaxed">Duración: {service.duration}</p>
                <p className="text-sm text-gray-700 leading-relaxed">Precio: ${service.price}</p>
                <div className='my-4 w-full flex justify-center items-center'>
                  <Link href={`/services/${service.id}`} key={service.id}
                    className="w-full px-5 py-2.5 rounded-lg text-white text-center text-sm tracking-wider border-none outline-none hover:bg-gray-500 bg-gray-800">
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;