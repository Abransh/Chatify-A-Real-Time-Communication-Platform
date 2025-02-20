import type { Metadata } from "next";

import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/themes-providers";
import {Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ModalProvider } from "@/components/providers/modal-provider";

const font = Open_Sans({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Team chat application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={cn (font.className, 
        "bg-white dark:bg-[#313338]"
      )}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem ={false}
        storageKey="discord-theme"
        >
        <ModalProvider />
          {children}
        </ThemeProvider>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        
      </body>
    </html>
  </ClerkProvider>
  );
}