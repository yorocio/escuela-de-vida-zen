import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";

const config = {
    providers: [
        Resend({
            apiKey: process.env.RESEND_KEY,
            from: "onboarding@resend.dev", //a modo de ejemplo porque no funciona el correo noreply@achalay.xyz
            name: "Email",
        })
    ],
    //MongoDBAdapter(clientPromise) conecta AuthJS con mi base de datos de MongoDB
    adapter: MongoDBAdapter(clientPromise)
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)