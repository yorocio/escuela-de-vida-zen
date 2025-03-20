import { products } from '@/components/Store/Store';
import StoreDetail from '@/components/Store/StoreDetail';
import { notFound } from 'next/navigation'
import React from 'react'

const storePage = ({ params }) => {

    //1. pasamos el id de la ruta a numero
    const storeId = Number(params.storeId)
    //2. buscamos los productos por id
    const findProduct = products.find((p, index) => p.id === storeId)
    //3. si no encuentra el producto, devuelve not found
    if (!findProduct) return notFound();
    //si lo encuentra, devuelve el producto
    return <StoreDetail prod={findProduct} />

}

export default storePage