import Image from "next/image"
import Link from "next/link"

export const shortCourses = [
  {
    id: 1,
    name: "Zen Shiatsu para todos",
    image: "/ejemplo1.jpg",
    description: "Este curso ofrece una introducción al Zen Shiatsu, una técnica de terapia japonesa que se centra en el equilibrio de la energía del cuerpo. Ideal para quienes buscan un enfoque natural y holístico para mejorar el bienestar físico y emocional. Con tan solo 15 horas de formación, aprenderás las bases de este arte terapéutico que promueve la relajación y la armonización del cuerpo y la mente. No se requiere experiencia previa, por lo que es apto para todos los niveles. Es una excelente oportunidad para adentrarse en el mundo del Shiatsu.",
    type: "Curso corto",
    duration: "15 horas",
    price: 50
  },
  {
    id: 2,
    name: "Diagnóstico de espalda",
    image: "/ejemplo1.jpg",
    description: "Un curso práctico y accesible para principiantes que se centra en enseñar cómo evaluar el estado de la espalda y detectar posibles problemas. Durante 15 horas, aprenderás a identificar disfunciones y comprender las causas comunes de dolor en la zona lumbar, cervical y dorsal. Este curso está diseñado para quienes desean iniciarse en el diagnóstico de problemas musculoesqueléticos, brindando herramientas esenciales para la atención preventiva y correctiva. No es necesario tener experiencia previa, solo interés en la salud de la espalda.",
    type: "Curso corto",
    duration: "15 horas",
    price: 20
  },
  {
    id: 3,
    name: "Posturas de trabajo",
    image: "/ejemplo1.jpg",
    description: "En este curso, se enseñan técnicas esenciales para mantener posturas correctas durante la jornada laboral. A través de la comprensión de cómo la postura influye en la salud a largo plazo, aprenderás a prevenir dolores y tensiones comunes derivados del trabajo de escritorio o tareas repetitivas. Con 15 horas de capacitación, este curso es perfecto para mejorar la ergonomía en el entorno laboral y adoptar hábitos que protejan tu cuerpo, especialmente la espalda, cuello y hombros. Ideal para trabajadores que pasan mucho tiempo sentados o en movimientos repetitivos.",
    type: "Curso corto",
    duration: "15 horas",
    price: 30
  },
  {
    id: 4,
    name: "Respiración TUMMO",
    image: "/ejemplo1.jpg",
    description: "Aprende a dominar la técnica de respiración TUMMO, una antigua práctica tibetana que se utiliza para generar calor interno y aumentar la energía vital. A lo largo de 15 horas, descubrirás cómo la respiración controlada puede mejorar la circulación, reducir el estrés y equilibrar la energía en el cuerpo. Este curso te permitirá explorar una disciplina que conecta profundamente con la espiritualidad y el bienestar físico. Perfecto para quienes buscan un enfoque más profundo en la gestión de la energía personal.",
    type: "Curso corto",
    duration: "15 horas",
    price: 60
  },
  {
    id: 5,
    name: "Ejercicios de Yoga Zen Japones",
    image: "/ejemplo1.jpg",
    description: "En este curso aprenderás a realizar una serie de ejercicios terapéuticos basados en el Zen Shiatsu, que combinan estiramientos, respiración y meditación para aliviar tensiones y mejorar la flexibilidad. Durante 15 horas, experimentarás cómo estas prácticas ayudan a reducir el estrés y la ansiedad, promoviendo una sensación de calma y bienestar general. Es ideal para quienes buscan integrar una práctica suave pero efectiva para la salud física y mental, especialmente a través de una tradición japonesa.",
    type: "Curso corto",
    duration: "15 horas",
    price: 30
  },
  {
    id: 6,
    name: "Arte de Sanar y Curar con las Manos",
    image: "/ejemplo2.jpg",
    description: "Este taller te enseñará cómo utilizar las manos para realizar tratamientos efectivos en patologías y dolores crónicos relacionados con problemas en las vértebras. Durante 15 horas, aprenderás las técnicas de sanación manual que se enfocan en aliviar el dolor muscular y óseo, mejorando la movilidad y el bienestar general. Este curso está especialmente orientado a aquellos interesados en aplicar métodos alternativos para el tratamiento de dolores persistentes, con un enfoque en el equilibrio y la recuperación natural del cuerpo.",
    type: "Taller",
    duration: "15 horas",
    price: 50
  }
]

const CoursesAndWorkshop = () => {
  return (
    <section className="bg-white dark:bg-gray-900 my-20">
      <div className="md:px-15 px-4 py-12 font-[sans-serif]">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Cursos y Talleres</h2>
          <div className="container px-6 py-14 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tarjetas mapeadas */}
              {shortCourses.map((cursos, index) => (
                <div key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-lg">
                  <Image
                    src={cursos.image}
                    alt={`Curso ${cursos.name}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-48 rounded-t-lg" />
                  <div className="px-4 py-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-gray-900 hover:underline dark:text-white mb-4">{cursos.name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 my-4">{cursos.description}</p>
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
      </div>
    </section>
  )
}

export default CoursesAndWorkshop