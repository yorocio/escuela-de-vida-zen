import connectMongo from "@/libs/mongoose";
import Board from "@/models/Boards";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

//boardId como parametro para poder recuperar el tablero de la base de datos.
const getBoard = async (boardId) => {
    //verificacion de usuario con auth
    const session = await auth();

    //esperamos a que se establezca la conexion con la base de datos
    await connectMongo();

    //para encontrar un único documento en la colección que coincida con la consulta. El método findOne recibe un objeto como argumento, donde las claves son los campos a verificar. Como primer parametro usaremos la ruta dinamica boardId y ;uego el usuario que creo el tablero
    const board = await Board.findOne({
        _id: boardId,
        userId: session?.user?.id
    });

    //si el tablero no existe redirigimos al perfil
    if (!board) {
        redirect('/dashboard')
    }

    return board;
};



export default async function FeedbackBoard({ params }) {
    const { boardId } = params;

    //Obtener tablero con objetId 'boardId'
    const board = await getBoard(boardId)

    return <main className="my-28 p-2">{board.name}</main>
}