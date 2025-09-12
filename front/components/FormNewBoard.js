'use client'
import { useState } from "react"

const FormNewBoard = () => {

    //PRIMER ESTADO PARA EL NOMBRE DEL TABLERO QUE INGRESARA EL USUARIO
    const [name, setName] = useState("")

    //SEGUNDO ESTADO PARA PONER EN TRUE CUANDO HAGAMOS UNA SOLICITUD HTTP
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (isLoading) return;

        setIsLoading(true)

        try {
            //Llamada asíncrona a la API para crear un nuevo tablero
            //Redirige a la pagina del tablero
        }
        catch (error) {
            //mostrar el mensaje de error
            setIsLoading(false)
            //detener el spinner de carga
        }
    }

    return (
        <form className="bg-base-100 p-8 rounded-3xl space-y-8"
            onSubmit={handleSubmit}
        >
            {/*  TITULO */}
            <p className="font-bold text-lg">Crear un nuevo tablero de comentarios</p>
            {/* FORMULARIO */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Nombre de la tabla</span>
                </div>
                <input
                    required
                    type="text"
                    placeholder="escribe aquí"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(event) => setName(event.target.value)
                    }
                />
            </label>
            {/*  BOTÓN */}
            <button className="btn btn-primary w-full" type="submit">
                {isLoading && <span className="loading loading-spinner loading-xs"></span>}
                Crear Tablero
            </button>
        </form>
    )
}

export default FormNewBoard