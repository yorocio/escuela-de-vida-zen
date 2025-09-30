const { default: MercadoPagoConfig } = require("mercadopago");

export const mercadopago = new MercadoPagoConfig({accessToken: process.env.MP_ACCESS_TOKEN!});
