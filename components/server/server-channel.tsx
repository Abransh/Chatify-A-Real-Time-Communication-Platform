"use client"; 

import React from "react";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Edit, Hash, Lock, Mic, Trash, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";
import { ModalType, useModal } from "@/components/hooks/use-modal-store";

interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
  }
  
  const iconMap = {
    [ChannelType.TEXT]: Hash,
    [ChannelType.AUDIO]: Mic,
    [ChannelType.VIDEO]: Video
  };

  xport function ServerChannel({
    channel,
    server,
    role
  }: ServerChannelProps) {
    const { onOpen } = useModal();
    const params = useParams();
    const router = useRouter();
  
    const Icon = iconMap[channel.type];
  
    const onClick = () =>
      router.push(`/servers/${params?.serverId}/channels/${channel.id}`);
  
    const onAction = (e: React.MouseEvent, action: ModalType) => {
      e.stopPropagation();
  
      onOpen(action, { channel, server });
    };

    return (
        <button
          className={cn(
            "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
            params?.channelId === channel.id &&
              "bg-zinc-700/20 dark:bg-zinc-700"
          )}