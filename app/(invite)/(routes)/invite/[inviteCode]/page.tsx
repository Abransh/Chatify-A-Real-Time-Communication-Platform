

import React from "react";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

export default async function InviteCodePage({
  params: { inviteCode }
}: InviteCodePageProps) {
  const profile = await currentProfile();

  if (!profile) return redirect("/sign-in");

  if (!inviteCode) return redirect("/");

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode,
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

if (existingServer) return redirect(`/servers/${existingServer.id}`);

  const server = await db.server.update({
    where: {
      inviteCode
    },
    data: {
      members: {
        create: [{ profileId: profile.id }]
      }
    }
  });

  if (server) return redirect(`/servers/${server.id}`);

  return null;
}
