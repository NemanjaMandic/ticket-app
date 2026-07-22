"use server";

import { redirect } from "next/navigation";
import { getAuth } from "../queries/getAuth";
import { signinPath } from "@/app/utils/paths";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export const signOut = async () => {
  const { session } = await getAuth();

  if (!session) {
    redirect(signinPath);
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  redirect(signinPath);
};
