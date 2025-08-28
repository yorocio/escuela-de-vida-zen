import React from 'react'
import ButtonLogout from '@/components/Buttons/ButtonLogout'

const dashboard = () => {
  return (
    <div className='my-20'>
        <h1>Este es el perfil del usuario</h1>
        <div>
            <h2>Aqui estara la informacion del usuario</h2>
        </div>
        <div>
          <ButtonLogout/>
        </div>
    </div>
  )
}

export default dashboard