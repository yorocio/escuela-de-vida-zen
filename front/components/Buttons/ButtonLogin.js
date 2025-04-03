import Link from 'next/link'
import React from 'react'

const ButtonLogin = () => {
  return (
    <div>
        <Link className='border border-rose-700' href='/'>Iniciar Sesión</Link>
    </div>
  )
}

export default ButtonLogin


//PARA INICIAR SESIÓN:
//1. CREO PAGINA DE LOGIN (LISTO)
//2. CREO EL FORMULARION CON EMAIL Y CONTRASEÑA (LISTO)
//2.A) O INICIAR SESIÓN CON GOOGLE (FALTA)
//3. HAGO UNA SOLICITUD POST A /api/auth (FALTA)