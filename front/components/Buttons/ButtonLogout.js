'use client'
import { signOut } from "next-auth/react"

// ButtonLogout es un componente que renderiza un botón que, al hacer clic, llama a signOut() de NextAuth y cierra la sesión del usuario actual 

const ButtonLogout = () => {
    return (
        <button className="btn btn-ghost"
            onClick={() => signOut()}>
            Cerrar Sesión
        </button>
    )
}

export default ButtonLogout;
