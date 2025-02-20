"use client"; 

import { UploadDropzone } from "@/lib/uploadthing"; 
import "@uploadthing/react/styles.css";
import { FileIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage";
} 
export const FileUpload: React.FC<FileUploadProps> = ({ onChange, value, endpoint }) => {
    const fileType = value?.split(".").pop();

    if (value && fileType !== "pdf") {
        return (
          <div className="relative h-20 w-20">
            <Image
             fill 
            src={value}
            alt="Upload" 
            className="rounded-full" 
            />
            <button
              onClick={() => onChange("")}
              className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      }
    
    return (
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          console.log("Upload completed:", res); // Add this
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
             console.error("Upload error:", error.message); 
        }}
    />
    );
  }
  

