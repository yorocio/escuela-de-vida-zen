import Image from "next/image"
import Link from "next/link"

export const shortCourses = [
  {
    id: 1,
    name: "Zen Shiatsu para todos",
    image: "/ejemplo1.jpg",
    description: "Terapia Japonesa de excelentes beneficios",
    type: "Curso corto",
    duration: "15 horas",
    price: 50
  },
  {
    id: 2,
    name: "Diagnóstico de espalda",
    image: "/ejemplo1.jpg",
    description: "Nivel inicial de Diagnóstico de espalda",
    type: "Curso corto",
    duration: "15 horas",
    price: 20
  },
  {
    id: 3,
    name: "Posturas de trabajo",
    image: "/ejemplo1.jpg",
    description: "abc",
    type: "Curso corto",
    duration: "15 horas",
    price: 30
  },
  {
    id: 4,
    name: "Respiración TUMMO",
    image: "/ejemplo1.jpg",
    description: "Aprendé a trabajar con energia Ki",
    type: "Curso corto",
    duration: "15 horas",
    price: 60
  },
  {
    id: 5,
    name: "Ejercicios de Yoga Zen Japones",
    image: "/ejemplo1.jpg",
    description: "Técnicas terapeuticas del Zen Shiatsu",
    type: "Curso corto",
    duration: "15 horas",
    price: 30
  },
{
    id: 6,
    name: "Arte de Sanar y Curar con las Manos",
    image: "/ejemplo2.jpg",
    description: "Especializados en realizar tratamiento Patologías y Dolores Crónicos Originados por Problemas de las Vertebras",
    type: "Taller",
    duration: "15 horas",
    price: 50
  }
]

const CoursesAndWorkshop = () => {
  return (
    <div className="md:px-15 px-4 py-12 font-[sans-serif] my-20">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Cursos y Talleres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {/* Tarjetas mapeadas */}
          {shortCourses.map((cursos, index) => (
            <div key={index} className="bg-white rounded overflow-hidden border">
              <Image src={cursos.image} alt={`Curso ${cursos.name}`} width={300} height={300} className="px-4 py-2 w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{cursos.name}</h3>
                {/* <p className="text-gray-700 text-base">{cursos.description}</p> */}
                <p className="text-gray-800 text-base font-semibold mt-4">{cursos.type}</p>
                {/* <p className="text-gray-900 text-base font-semibold mt-4">{cursos.duration}</p> */}
                <Link href={`/courses/${cursos.id}`}
                  className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-800 hover:bg-gray-600 text-white text-base w-full text-center">Leer más</Link>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>

  )
}

export default CoursesAndWorkshop