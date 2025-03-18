import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServicesDetail = ({ service }) => {
    return (
        <div className='my-16'>
            <div className="container px-6 py-10 mx-auto flex justify-center">
                <div className="shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
                    <div className="min-h-[200px]">
                        <Image
                            src={service.image}
                            width={600}
                            height={400}
                            className="w-full object-cover h-72 rounded-t-lg"
                            alt={`Servicio ${service.name}`} />
                    </div>

                    <div className="px-6 py-4">
                        <h3 className="text-gray-900 text-3xl font-bold text-center mb-6">{service.name}</h3>
                        <p className="text-base text-gray-800 leading-relaxed text-justify mb-4">{service.description} </p>
                    </div>
                    <div className='mt-2 px-6 py-4'>
                        <p className='text-md text-gray-800 leading-relaxed'>
                            <span className="font-bold">Duración: </span>
                            {service.duration}</p>
                    </div>
                    <div className='mt-2 px-6 py-4'>
                        <p className='text-md text-gray-800 leading-relaxed'>
                            <span className="font-bold">Precio: </span>
                            ${service.price}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link className="text-gray-200 px-6 py-3 rounded-lg border border-gray-800 bg-gray-800 hover:bg-gray-600 flex justify-center" href='/services'>Volver</Link>
            </div>
        </div>
    )
}

export default ServicesDetail