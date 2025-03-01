"use client";

import React from "react";
import { ChannelType, MemberRole } from "@prisma/client";
import { Plus, Settings } from "lucide-react";

import { ServerWithMembersWithProfiles } from "@/types";
import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProps {
    label: string;
    role?: MemberRole;
    sectionType: "channels" | "members"; 
    channelType?: ChannelType;
    server?: ServerWithMembersWithProfiles;
  }

  export const ServerSection = (
    {
  channelType,
  label,
  sectionType,
  role,
  server, 
   
} ServerSectionProps) => {
    return ( 
        <div>
            Server Section
        </div>
     );
  }
   
  