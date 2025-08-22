import Link from 'next/link'
import React from 'react'

const ButtonLogin = ({ session, name }) => {
  if (session) {
    return (
      //SI ESTA LOGUEADO MUESTRA EL BOTON EN EL DASHBOARD (si inicia sesion con google, aparecera el nombre sino solo !)
      <div>
        <Link className='border border-rose-700' href='/dashboard'>Bienvenido/a {session.user.name || "!"}</Link>
      </div>
    );
  }

  //SI NO ESTA LOGUEADO MUESTRA EL BOTON PARA INICIAR SESION 
  return <button className='border border-green-800'>Iniciar Sesión</button>
};

export default ButtonLogin


//PARA INICIAR SESIÓN:
//1. CREO PAGINA DE LOGIN (LISTO)
//2. CREO EL FORMULARION CON EMAIL Y CONTRASEÑA (LISTO)
//2.A) O INICIAR SESIÓN CON GOOGLE (LISTO)
//3. HAGO UNA SOLICITUD POST A /api/auth (FALTA)