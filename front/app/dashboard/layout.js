//Para que el perfil del usuario sea privado

//importamos el metodo de autenticacion que creamos en el auth.js
import { auth } from '@/auth'
import { redirect } from 'next/navigation';

//la funcion tendra props, en este caso sera children para abarcar el contenido de todas las paginas que estaran dentro de de la carpeta dashboard

export default async function layoutPrivate({ children }) {
    const session = await auth();

    if (!session) {
        //redireccionamos con el metodo de nextJs
        redirect ('/')
    }
    return children;
}
