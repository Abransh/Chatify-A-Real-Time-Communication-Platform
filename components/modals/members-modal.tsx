"use client";

import React, { use, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

import { useForm } from "react-hook-form";
import * as z from "zod"; 
import {zodResolver} from "@hookform/resolvers/zod";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useModal } from "../hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Check, Copy, RefreshCw } from "lucide-react";
import { ServerWithMembersWithProfiles } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";



export const MembersModal  = () => {
  const { isOpen, onOpen, onClose, type, data } = useModal();
  

  const isModalOpen = isOpen && type === "members"; 
  const { server } = data as {server :ServerWithMembersWithProfiles};
 
 
    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Manage Members
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {server?.members?.length} Members
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6">

        </ScrollArea>
        
      </DialogContent>
    </Dialog>
              
    );

  }
    
