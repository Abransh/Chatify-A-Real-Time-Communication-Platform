import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();
    await req.json(); // Just read the request body to avoid errors


    if (!profile)
 return new NextResponse("Unauthorized", { status: 401 });
    if (!params.serverId)
    return new NextResponse("Server ID is missing", { status: 400 });


    const server = await db.server.update({
      where: { 
        id: params.serverId,
        profileId: profile.id, 
      },
      
      data:
       { 
        inviteCode: uuidv4(),
    },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error("[SERVER_ID_PATCH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    if (!params.serverId)
      return new NextResponse("Server ID Missing", { status: 400 });

    const server = await db.server.delete({
      where: { id: params.serverId }
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error("[SERVER_ID_DELETE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
