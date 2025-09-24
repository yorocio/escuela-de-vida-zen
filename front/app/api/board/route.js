import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Boards";

//Endpoint de API que escucha solicitudes POST para crear un nuevo board.
export async function POST(req) {
    try {
        const body = await req.json();

        if (!body.name) {
            return NextResponse.json(
                { error: 'el nombre del tablero es obligatorio' },
                { status: 400 }
            );
        }
        const session = await auth();
        if (!session) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401 }
            );
        }
        await connectMongo();

        const user = await User.findById(session.user.id);

        const board = await Board.create({
            userId: user._id,
            name: body.name
        });

        user.boards.push(board._id);
        await user.save();

        return NextResponse.json({ board })

    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

//FUNCION PARA ELIMINAR ALGO DE LA BASE DE DATOS CON UNA SOLICITUD DELETE AL SERVIDOR

export async function DELETE(req) {
    try {
        //DEBEMOS SABER CUAL TARJETA QUEREMOS ELIMINAR
        const { searchParams } = req.nextUrl;
        const boardId = searchParams.get('boardId');

        if (!boardId) {
            return NextResponse.json(
                { error: 'El id de la tarjeta es neceasario' },
                { status: 400 }
            )
        }

        const session = await auth()

        if (!session) {
            return NextResponse.json(
                { error: 'No autorizado' },
                { status: 401 }
            )
        }

        await Board.deleteOne({
            _id: boardId,
            userId: session?.user?.id,
        });

        const user = await User.findById(session?.user?.id);
        user.boards = user.boards.filter((id) => id.toString() !== boardId);
        await user.save()

        return NextResponse.json({})
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}