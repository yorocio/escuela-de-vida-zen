'use client'
import React from 'react'
import Swal from 'sweetalert2';

const ButtonSubscription = () => {
    const handleClick = () => {
        Swal.fire({
            title: "¡Suscripción exitosa!",
            text: "",
            icon: "success"
        });
    }
    return (
        <button onClick={handleClick} className="w-full bg-transparent backdrop-blur-md border-2 border-gray-300 text-gray-200 px-6 py-1 rounded-md hover:bg-gray-400 transition-all duration-300">
            Recibir noticias
        </button>
    )
}

export default ButtonSubscription