//auth.js es un archivo donde escribo el codigo que le dice a mi app qué tipo de login voy a usar, qué claves o configuraciones necesito y cómo manejar el inicio y cierre de sesión.

import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";

const config = {
    providers: [
        Resend({
            apiKey: process.env.RESEND_KEY, //en .env.local
            from: "onboarding@resend.dev", //a modo de ejemplo porque no funciona el correo noreply@achalay.xyz
            name: "Email",
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    //MongoDBAdapter(clientPromise) conecta AuthJS con mi base de datos de MongoDB
    adapter: MongoDBAdapter(clientPromise)
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
