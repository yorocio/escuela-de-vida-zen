import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";

const config = {
    providers: [],
    //MongoDBAdapter(clientPromise) conecta AuthJS con mi base de datos de MongoDB
    adapter: MongoDBAdapter(clientPromise)
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)