import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div> 
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
      <main>{children}</main>
    </div>
  );
}
