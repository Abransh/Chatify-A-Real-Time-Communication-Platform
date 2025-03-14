import React from "react";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChannelType } from "@prisma/client"; 
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import ChatHeader from "@/components/chat/chat-header";
 
interface ChannelIdPageProps {
    params: {
      serverId: string;
      channelId: string;
    };
  }
  
  export default async function ChannelIdPage({
    params: { channelId, serverId }
  }: ChannelIdPageProps) {
    const profile = await currentProfile();
  
    if (!profile) return <RedirectToSignIn />;
  
    const channel = await db.channel.findUnique({
      where: { id: channelId }
    });
  
    const member = await db.member.findFirst({
      where: { serverId: serverId, 
      profileId: profile.id }
    });


    if (!channel || !member) return redirect("/");

    return (
      <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
        <ChatHeader
        name={channel.name}
        serverId={channel.serverId}
        type="channel"
         />
        </div>
  );
}
