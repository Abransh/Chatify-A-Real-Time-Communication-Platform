import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST (req: Request)
{
    try{
        const profile = await currentProfile();
    const { name, imageUrl } = await req.json();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    } catch (error)
    {
        console.log("[SERVER_POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}