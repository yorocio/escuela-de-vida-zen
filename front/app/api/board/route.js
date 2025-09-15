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

        return NextResponse.json({board})

    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}