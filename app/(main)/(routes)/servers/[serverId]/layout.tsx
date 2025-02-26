// import React from "react";
// import { RedirectToSignIn } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

// import { currentProfile } from "@/lib/current-profile";
// import { db } from "@/lib/db";
// import ServerSidebar from "@/components/server/server-sidebar";

// const ServerIdLayout = async  ({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { serverId: string };
// }) => {
//   const profile = await currentProfile();

//   if (!profile) {
//     return <RedirectToSignIn redirectUrl="/sign-in" />;   //check this   earlier it could be if (!profile) return redirectToSignIn();
//   }
  
//   const server = await db.server.findUnique({
//     where: {
//       id: params.serverId,
//       members: {
//         some: {
//           profileId: profile.id
//         }
//       }
//     }
//   });

//   if (!server) {
//     return redirect("/");
//   }
  
//   return (
//     <div className="h-full">
//       <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
//        {/* <ServerSidebar />  */}
//        Server Sidebar
//       </div>
//       <main className="h-full md:pl-60">
//         {children}
//         </main>
//     </div> 
//   );
// }

// export default ServerIdLayout;


import React from "react";
import { RedirectToSignIn, RedirectToSignUp } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import ServerSidebar from "@/components/server/server-sidebar";


export default async function ServerIdLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) {
  const profile = await currentProfile();

  if (!profile) return <RedirectToSignUp redirectUrl="/sign-up" />;
  

 const server = await db.server.findFirst({
  where: {
    id: params.serverId,
    members: {
      some: {
        profileId: profile.id
      }
    }
  }
});

if (!server) {
  console.log("Server not found:", params.serverId);
  return redirect("/");
}

  return (
    <div className="h-full">
      <div className="flex h-full w-60 z-20 flex-col fixed inset-y-0">
      
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
}
