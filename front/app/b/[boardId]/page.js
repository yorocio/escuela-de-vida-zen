//PAGINA PUBLICA DE TABLA DE RECOMENDACIONES (FEEDBACK BOARD PAGE)

import connectMongo from "@/libs/mongoose";
import Board from "@/models/Boards";
import { redirect } from "next/navigation";

//boardId como parametro para poder recuperar el tablero de la base de datos.
const getBoard = async (boardId) => {

    //esperamos a que se establezca la conexion con la base de datos
    await connectMongo();

    const board = await Board.findById(boardId)

    //si el tablero no existe redirigimos al home
    if (!board) {
        redirect('/')
    }

    return board;
};


export default async function PublicFeedbackBoard({ params }) {
    const { boardId } = params;

    //Obtener tablero con objetId 'boardId'
    const board = await getBoard(boardId)

    return <main className="my-28 p-2">{board.name} (public)</main>
}