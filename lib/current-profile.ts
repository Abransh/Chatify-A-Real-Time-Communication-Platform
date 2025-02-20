import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const currentProfile = async () => {
  const { userid } = auth();

  if (!userid) return null;

  const profile = await db.profile.findUnique({
    where: { userid }
  });

  return profile;
};
