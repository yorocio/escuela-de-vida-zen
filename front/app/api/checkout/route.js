/* export async function POST(req) {
    console.log("POST /api/checkout ejecutado");
  
    return new Response(JSON.stringify({ test: "ok" }), { status: 200 });
  } */

// app/api/checkout/route.js
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN
});

export async function POST(req) {
  try {
    const body = await req.json();

    const preference = new Preference(client);

    const data = await preference.create({
      body: {
        items: body.items,
        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          pending: "http://localhost:3000/pending"
        },
       //auto_return: "approved" // comentar mientras estás en localhost
      }
    });

    return new Response(JSON.stringify({ preferenceId: data.id }), {
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "No se pudo crear la preference" }), { status: 500 });
  }
}

