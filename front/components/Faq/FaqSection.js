import React from 'react'
import FaqListItems from './FaqListItems'

const FaqSection = () => {
    return (
        <section className='my-36'>
            <div className="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4">
                <div className="my-10">
                    <h2 className="text-2xl font-bold text-gray-900">Preguntas Frecuentes </h2>
                </div>
                {[
                    {
                        question: "Pegunta 1",
                        answer: "Respuesta 1"
                    },
                    {
                        question: "Pregunta 2",
                        answer: "Respuesta 2"
                    },
                    {
                        question: "Pregunta 3",
                        answer: "Respuesta 3"
                    },
                    {
                        question: "Pregunta 4",
                        answer: "Respuesta 4"
                    }
                ].map((qa) => (
                    <FaqListItems key={qa.question} qa={qa} />
                ))}

            </div>
        </section>
    )
}

export default FaqSection