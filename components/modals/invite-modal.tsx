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


export function InviteModal() {
  const { isOpen, onOpen, onClose, type, data } = useModal();
  const origin = useOrigin();

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);

      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

    return (
        <Dialog open= {isModalOpen} onOpenChange={handleClose}> 
         <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">
                CUSTOMIZE YOUR SERVER
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        lame ass members shit
                    </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                 <div className="space-y-8 px-6">
                     <div className="flex items-center justify-center text-center">
                     <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                       endpoint = "serverImage"
                       value = {field.value}
                       onChange = {field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                 />
                     <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                     <FormItem>
                     <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Server Name
                     </FormLabel>
                     <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter server name"
                        className="bg-zinc-300/50 border-0 focus-visible: ring-0 text-black focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 </div>
                 </div>
            
             <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button disabled={isLoading} variant= "primary">
                    Create
                </Button>
             </DialogFooter>
               </form>   
            </Form> 
          </DialogContent>
         </Dialog>
    )
    
} 