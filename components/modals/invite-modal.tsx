"use client";

import React, { use } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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


export const InviteModal = () => {
  const { isOpen, onOpen, onClose, type, data } = useModal();
  // const origin = useOrigin();

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  // const [copied, setCopied] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  //const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  // const onCopy = () => {
  //   navigator.clipboard.writeText(inviteUrl);
  //   setCopied(true);

  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 1000);
  // };

  // const onNew = async () => {
  //   try {
  //     setIsLoading(true);

  //     const response = await axios.patch(
  //       `/api/servers/${server?.id}/invite-code`
  //     );

  //     onOpen("invite", { server: response.data });
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
//     }
// ;

    return (
        <Dialog open= {isModalOpen} onOpenChange={onClose}> 
         <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">
                CUSTOMIZE YOUR SERVER
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        lame ass members shit
                    </DialogDescription>
            </DialogHeader>
           Invite Modal 
          </DialogContent>
         </Dialog>
    );
  }
    
