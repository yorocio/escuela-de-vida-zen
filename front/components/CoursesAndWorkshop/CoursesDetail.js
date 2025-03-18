import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CoursesDetail = ({ coursesAndWorkshop }) => {
    return (
        <div className='my-10'>
            <div className="container px-6 py-14 mx-auto flex justify-center">
                <div className="shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
                    <div className="min-h-[200px]">
                        <Image src={coursesAndWorkshop.image}
                            width={600}
                            height={400}
                            className="w-full object-cover h-72 rounded-t-lg"
                            alt={`Curso ${coursesAndWorkshop.name}`} />
                    </div>

                    <div className="px-4 py-4">
                        <h3 className="text-gray-900 text-xl font-bold text-center">{coursesAndWorkshop.name}</h3>
                    </div>
                    <div className="px-4 py-4">
                        <p className="text-base text-gray-800 leading-relaxed text-justify mb-4">{coursesAndWorkshop.description}</p>
                    </div>
                    <div className='px-4 py-4'>
                        <p className='text-md text-gray-800 leading-relaxed'>
                            <span className="font-bold">Duración: </span>
                            {coursesAndWorkshop.duration}</p>
                    </div>
                    <div className='px-4 py-4'>
                        <p className='text-md text-gray-800 leading-relaxed'>
                            <span className="font-bold">Precio: </span>
                            ${coursesAndWorkshop.price}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link className="text-gray-200 px-6 py-3 rounded-lg border border-gray-800 bg-gray-800 hover:bg-gray-600 flex justify-center" href='/courses'>Volver</Link>
            </div>
        </div>

    )
}

export default CoursesDetail