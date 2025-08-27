'use client';
import Link from 'next/link'
import React from 'react'
import { signIn } from 'next-auth/react'

const ButtonLogin = ({ session, name }) => {
  //para no repetir la ruta en varias partes del codigo creo una constante con la ruta
  const dashboardUrl = '/dashboard';

  if (session) {
    return (
      //SI ESTA LOGUEADO MUESTRA EL BOTON EN EL DASHBOARD (si inicia sesion con google, aparecera el nombre sino solo !)
      <div className='m-6'>
        <Link className='border-2 border-rose-700 border-solid p-2' href={dashboardUrl}>Bienvenido/a {session.user.name || "!"}
        </Link>
      </div>
    );
  }

  //SI NO ESTA LOGUEADO MUESTRA EL BOTON PARA INICIAR SESION 
  return (
    <button className=' m-6 border-2 border-green-800'
      onClick={() => {
        //primer parametro es el provider con el que vamos a iniciar sesion. Puede ser 'google' para iniciar sesion especificamente con google o 'undefined' para que pueda iniciar sesion con un correo electronico o google. 
        //El segundo parametro es un obj que usaremos para personalizar lo que sucede durante el procesio de inicio de sesion. Hay muchas opciones que podemos personalizar, una es la callbackUrl que es la URL a la que queremos volver o dirigirnos despues de iniciar sesion. 
        signIn('undefined', { callbackUrl: dashboardUrl })
      }}>
      Iniciar Sesión
    </button>
  );
};

export default ButtonLogin


//PARA INICIAR SESIÓN:
//1. CREO PAGINA DE LOGIN (LISTO)
//2. CREO EL FORMULARION CON EMAIL Y CONTRASEÑA (LISTO)
//2.A) O INICIAR SESIÓN CON GOOGLE (LISTO)
//3. HAGO UNA SOLICITUD POST A /api/auth (FALTA)