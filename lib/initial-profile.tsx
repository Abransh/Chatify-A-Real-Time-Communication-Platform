import { auth, RedirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const currentProfile = async () => {
  const user = await currentUser(); 

  if (!userId) {
    return RedirectToSignIn();
  }
  const profile = await db.profile.findUnique({
    where: { userId }
  });
  if(profile){
  return profile;
  }
  const newProfile = await db.profile.create({
   data: {
    userId: user.id,
    name: `${user.firstName} ${user.lastName}`, 
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0].emailAddress
    
   }
    
    }
    
    
    
    };

  