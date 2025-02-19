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
import { useForm } from "react-hook-form";
import * as z from "zod"; 
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1, { message: "Server name is required." }),
    imageUrl: z.string().min(1, { message: "Server image is required." })
  }); 

export const InitialModal: React.FC = () => {
    const form = useForm(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
                imageUrl: "", 
            }
        }
    ); 

    const isLoading = form.formState.isSubmitting;
    return (
        <Dialog open> 
         <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">
                customize your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your server a name and image
                    </DialogDescription>
            </DialogHeader>
          </DialogContent>
         </Dialog>
    );
}