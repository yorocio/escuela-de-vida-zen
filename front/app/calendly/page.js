import CalendlyEmbed from '@/components/CalendlyEmbed'
import React from 'react'

const calendly = () => {
    return (
        <div className="mt-24 items-center p-4">
            <h1 className='text-gray-800 text-center font-bold text-xl w-full flex justify-center mb-2'>Programar un Turno</h1>
                <CalendlyEmbed url="https://calendly.com/rocioanriquez23/example-1" />
        </div>
    )
}

export default calendly