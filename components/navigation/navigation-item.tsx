"use client"; 

import Image from "next/image";
import { useParams, useRouter  } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/ui/action-tooltip";

interface NavigationItemProps {
    id: string;
    imageUrl: string;
    name: string;
  }

  export const NavigationItem = 
  ({ id, 
    imageUrl, 
    name }: 
    NavigationItemProps) => 
        {
    return  (
        <div>
            server
        </div>
    )
    };
   


