import { signinPath } from "@/app/utils/paths";
import { getAuth } from "@/features/auth/queries/getAuth";
import { redirect } from "next/navigation";

export const getAuthOrRedirect = async () => {
  const auth = await getAuth();
  if (!auth.user) {
    redirect(signinPath);
  }
  return auth;
};
