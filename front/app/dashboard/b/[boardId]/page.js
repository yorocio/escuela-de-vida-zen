import connectMongo from "@/libs/mongoose";
import Board from "@/models/Boards";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import CardBoardLink from "@/components/CardBoardLink";

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

    return <main className="my-28 p-2 bg-base-200 min-h-screen">
        <section className="bg-base-100">
            <div className="max-w-5xl mx-auto px-5 py-3 flex">
                <Link href='/dashboard' className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clipRule="evenodd" />
                    </svg>

                    Volver</Link>
            </div>
        </section>
        <section className="max-w-5xl mx-auto px-5 py-12 spacre-y-12">
            <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>

            <CardBoardLink boardId={board._id} />
        </section>
    </main>
}