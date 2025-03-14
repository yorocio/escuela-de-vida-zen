'use client'
import React from 'react'
import Swal from 'sweetalert2';

const ButtonContact = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Enviado con éxito",
            text: "",
            icon: "success"
        });
    }
    return (
        <button onClick={handleClick}
            type="button" className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-gray-900 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" dataoriginal="#000000" />
            </svg>
            Enviar
        </button>
    )
}

export default ButtonContact