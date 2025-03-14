import { services } from '@/components/Services/Services';
import ServicesDetail from '@/components/Services/ServicesDetail';
import { notFound } from 'next/navigation';
import React from 'react'

const servicesPage = ({params}) => {
    const servId = Number(params.servId); // Convertimos `id` a número

    const serv = services.find((s, index) => s.id === servId);

    if (!serv) return notFound(); 

    return <ServicesDetail service={serv}/>;
  
}

export default servicesPage