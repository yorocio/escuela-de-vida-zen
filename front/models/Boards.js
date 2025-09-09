import mongoose from 'mongoose';

//SCHEMA PARA BOARD
const boardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }
});

//MODEL DE BOARD (si el modelo existe o crea uno nuevo)
const Board = mongoose.models.Board || mongoose.model("Board", boardSchema);

export default Board;

//se puede reemplazar la linea 18 y 20 por: export default mongoose.model("Board", boardSchema)