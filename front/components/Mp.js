"use client";
import { useEffect } from "react";

export default function Mp() {
  // USEEFFECT PARA CARGAR EL SDK DE MP CUANDO SE MONTA EL COMPONENTE
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2"; // SDK DE MP
    script.async = true;
    document.body.appendChild(script); // LO AGREGAMOS AL BODY
  }, []);

  // FUNCIÓN PARA INICIAR EL PROCESO DE CHECKOUT
  const handleCheckout = async () => {
    // PETICIÓN POST A NUESTRO ENDPOINT /api/checkout
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Producto X", unit_price: 2000, quantity: 1 }),
    });
    const data = await res.json();

    // VERIFICO SI EL SDK DE MP ESTÁ DISPONIBLE
    if (!window.MercadoPago) {
      alert("ERROR CARGANDO MERCADO PAGO");
      return;
    }

    // INSTANCIO EL OBJETO DE MP CON MI PUBLIC KEY
    const mp = new window.MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
      locale: "es-AR", // IDIOMA
    });

    // ABRIMOS EL CHECKOUT PRO CON LA PREFERENCIA GENERADA
    mp.checkout({
      preference: {
        id: data.id, // ID DE LA PREFERENCIA ENVIADA DESDE EL BACKEND
      },
      autoOpen: true, // ABRE AUTOMÁTICAMENTE EL CHECKOUT
    });
  };

  // BOTÓN QUE DISPARA handleCheckout
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Relizar un pago</h1>
      <button
        onClick={handleCheckout}
        className="px-6 py-3 bg-blue-600 hover:bg-yellow-300 text-gray-900 font-medium rounded-lg shadow-md transition-colors duration-200"
      >
        Pagar con Mercado Pago
      </button>
    </main>
  );
}
