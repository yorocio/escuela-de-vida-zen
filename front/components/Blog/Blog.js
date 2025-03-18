import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const blogs = [{
  id: 1,
  image: '/blog.jpg',
  title: "Cómo el Shiatsu promueve el equilibrio energético",
  description: "El Shiatsu se basa en la teoría de que la energía vital (Ki) fluye a través de canales en el cuerpo. Si este flujo se bloquea o se desequilibra, pueden surgir enfermedades. A través de la aplicación de presión en puntos clave, el Shiatsu restablece el equilibrio energético, ayudando a mejorar el bienestar físico y emocional. Descubre cómo este enfoque holístico puede ayudarte a recuperar la armonía y prevenir problemas de salud.",
  date: "dia/mes/año"
},
{
  id: 2,
  image: '/blog.jpg',
  title: "La conexión mente-cuerpo en Shiatsu",
  description: "El Shiatsu es una terapia que no solo alivia el dolor físico, sino que también promueve un equilibrio emocional y mental. Al aplicar presión en puntos específicos del cuerpo, se liberan tensiones y bloqueos, mejorando la circulación y la energía vital. Esta práctica es ideal para quienes buscan relajación profunda y bienestar integral. Aprende más sobre cómo Shiatsu puede transformar tu salud mental y física. Conoce los beneficios de esta práctica milenaria.",
  date: "dia/mes/año"
},
{
  id: 3,
  image: '/blog.jpg',
  title: "Shiatsu y sus beneficios para el estrés",
  description: "El estrés es una de las principales causas de problemas de salud modernos, pero el Shiatsu ofrece una manera efectiva de combatirlo. Mediante técnicas de presión y estiramientos, el Shiatsu ayuda a reducir la ansiedad, mejora la circulación sanguínea y promueve la relajación profunda. Si sientes que el estrés está afectando tu vida, considera incorporar sesiones de Shiatsu en tu rutina. Aprende cómo esta terapia puede mejorar tu bienestar y tu calidad de vida.",
  date: "dia/mes/año"
},
{
  id: 4,
  image: '/blog.jpg',
  title: "Shiatsu para la recuperación muscular",
  description: "Después de un entrenamiento intenso, los músculos suelen sentirse tensos y fatigados. El Shiatsu es una excelente herramienta para acelerar la recuperación muscular. Al liberar las tensiones acumuladas, se facilita el flujo sanguíneo y se previene la rigidez muscular. Si eres deportista o practicas ejercicio regularmente, el Shiatsu puede ser tu aliado perfecto para una recuperación más rápida y efectiva. Descubre cómo esta técnica puede mejorar tu rendimiento físico.",
  date: "dia/mes/año"
},
{
  id: 5,
  image: '/blog.jpg',
  title: "La importancia de la respiración en Shiatsu",
  description: "En Shiatsu, la respiración juega un papel fundamental en el proceso de curación. Durante una sesión, se enseña a los pacientes a respirar profundamente, lo que ayuda a liberar tensiones y mejora la circulación de la energía vital. La correcta respiración no solo contribuye a la relajación, sino que también mejora la absorción de los beneficios del tratamiento. Conoce cómo la respiración consciente potencia los efectos de Shiatsu y puede transformar tu salud.",
  date: "dia/mes/año"
}]

const Blog = () => {
  return (
    <section className="bg-white dark:bg-gray-900 my-28">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog</h1>
      <p className="text-lg max-w-2xl mx-auto">
        Explora nuestra colección de artículos sobre terapia Shiatsu, bienestar holístico y vida plena.
      </p>

      <div className="container px-6 py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
              key={index}>
              {/* Imagen */}
              <Image
                width={300}
                height={300}
                className="object-cover w-full h-48 rounded-t-lg"
                src={blog.image}
                alt={`blog${blog.image}`}
              />

              {/* Contenedor de contenido */}
              <div className="px-4 py-6 flex flex-col h-full">
                {/* Título */}
                <Link
                  href="#"
                  className="text-xl font-semibold text-gray-900 hover:underline dark:text-white mb-4"
                >
                  {blog.title}
                </Link>

                {/* Fecha */}
                <span className="text-sm text-gray-700 dark:text-gray-200">{blog.date}</span>

                {/* Descripción con line-clamp */}
                <span className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 my-4">
                  {blog.description}
                </span>

                {/* Botón */}
                <Link
                  className="w-full bg-gray-800 backdrop-blur-md border-2 border-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all duration-300 text-center"
                  key={blog.id}
                  href={`/blog/${blog.id}`}>
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog