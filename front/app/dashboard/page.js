import React from 'react'
import ButtonLogout from '@/components/Buttons/ButtonLogout'
import FormNewBoard from '@/components/FormNewBoard'

const dashboard = () => {
  return (
    <main className='my-20 bg-base-200 min-h-screen'>
      <section className='bg-base-100'>
        <div className='flex justify-end px-5 py-3'>
          <ButtonLogout />
        </div>
      </section>
      <section className='px-5 py-12 max-w-5xl mx-auto'>
        <FormNewBoard />
      </section>
    </main>
  )
}

export default dashboard