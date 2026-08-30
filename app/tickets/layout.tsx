import { signinPath } from "@/app/utils/paths";
import { getAuth } from "@/features/auth/queries/getAuth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const AuthenticatedLayout = async ({ children }: PropsWithChildren) => {
  const { user } = await getAuth();
  console.log("user", user);
  if (!user) {
    redirect(signinPath);
  }
  return <>{children}</>;
};

export default AuthenticatedLayout;
