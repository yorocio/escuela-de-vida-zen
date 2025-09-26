import mongoose from 'mongoose';

//SCHEMA PARA USERS
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    image: {
        type: String,
    },
    //DETERMINA SI EL USUARIO TIENE ACCESO AL PRODUCTO
    //SU VALOR PREDETERMINADO ES FALSE, Y SERA TRUE DESPUES DEL PAGO.
    hasAccess: {
        type: Boolean,
        default: false,
    },
    //IDENTIFICADOR UNICO PROPORCIONADO POR EL PROVEEDOR DE PAGOS.
    customerId: {
        type: String,
    },
    boards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
        }
    ]
});

export default mongoose.models.User || mongoose.model("User", UserSchema);