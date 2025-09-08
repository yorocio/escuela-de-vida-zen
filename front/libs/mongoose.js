import mongoose from 'mongoose';

//CREO UNA FUNCION REUTILIZABLE PARA CONECTARME A MI BASE DE DATOS A TRAVES DE MONGOOSE
const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    }
    catch (error) {
        console.error(" ❌ Error de Mongoose: " + error.message)
    }
}

export default connectMongo