import React from 'react'
import ButtonLogout from '@/components/Buttons/ButtonLogout'
import FormNewBoard from '@/components/FormNewBoard'
import { auth } from '@/auth'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import Board from '@/models/Boards'


//FUNCION ASYNC PARA OBTENER LOS DATOS DEL USUARIO Y SUS TABLEROS DESDE LA BASE DE DATOS
async function getUser() {
  const session = await auth();

  await connectMongo()

  return await User.findById(session.user.id).populate("boards")
}

export default async function Dashboard() {

  const user = await getUser()



  return (
    <main className='my-20 bg-base-200 min-h-screen'>
      <section className='bg-base-100'>
        <div className='flex justify-end px-5 py-3'>
          <ButtonLogout />
        </div>
      </section>
      <section className='px-5 py-12 max-w-5xl mx-auto space-y-12'>
        <FormNewBoard />

        <div>
          <h1 className='font-extrabold text-xl py-2 mb-4'>{user.boards.length}Tablas</h1>

          <ul className='space-y-4'>
            {user.boards.map((board) => {
            return (<li
              key={board._id}
              className='bg-base-100 p-6 rounded-3xl'
            >{board.name}</li>
            );
          })}
          </ul>
        </div>
      </section>
    </main>
  )
}
