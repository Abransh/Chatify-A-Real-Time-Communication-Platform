import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function DELETE(
    req: Request,
    { params }: { params: { channelId: string } }
  ) {
    try {
        const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    }
    catch (error) {
        console.error("[CHANNEL_ID_DELETE", error);
        return new NextResponse("Internal Error", { status: 500 });
      }
  }
