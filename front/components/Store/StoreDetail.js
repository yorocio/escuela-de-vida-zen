import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoreDetail = ({ prod }) => {
    return (
        <div className='my-24'>
            <div className="container px-6 py-10 mx-auto flex justify-center">
                <div className="overflow-hidden w-full max-w-4xl shadow-md">
                    <h3 className="text-gray-900 text-2xl font-bold text-center my-6">{prod.name}</h3>
                    <div className="min-h-[200px]">
                        <Image
                            src={prod.image}
                            width={600}
                            height={800}
                            className="w-full object-contain h-96 rounded-t-lg"
                            alt={`Producto ${prod.name}`} />
                    </div>

                    <div className="px-6 py-4">
                        <p className="text-lg text-gray-800 leading-relaxed text-justify mb-4">{prod.description}</p>
                    </div>
                    <div className='mt-2 px-6 py-4'>
                        <p className='text-lg text-gray-800 leading-relaxed'>
                            <span className="font-bold">Precio: </span>
                            ${prod.price}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link className="text-gray-200 px-6 py-3 rounded-lg border border-gray-800 bg-gray-800 hover:bg-gray-600 flex justify-center" href='/'>Comprar</Link>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link className="text-gray-200 px-6 py-3 rounded-lg border border-gray-800 bg-gray-800 hover:bg-gray-600 flex justify-center" href='/store'>Volver a la tienda</Link>
            </div>
        </div>
    )
}

export default StoreDetail