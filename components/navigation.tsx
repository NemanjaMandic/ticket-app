import { homePath, signinPath, signupPath } from "@/app/utils/paths";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LucideKanban } from "lucide-react";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";
import { getAuth } from "@/features/auth/queries/getAuth";
import { AccountDropdown } from "./account-dropdown/AccountDropdown";

export const Navigation = async () => {
  const { user } = await getAuth();
  return (
    <nav
      className=" animate-header-from-top
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between"
    >
      <div>
        <Link href={homePath} className={buttonVariants({ variant: "ghost" })}>
          <LucideKanban />
          <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        {user ? (
          <AccountDropdown user={user} />
        ) : (
          <>
            <Link
              href={signupPath}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign Up
            </Link>
            <Link
              href={signinPath}
              className={buttonVariants({ variant: "default" })}
            >
              Sign In
            </Link>
          </>
        )}

        <ThemeSwitcher />
      </div>
    </nav>
  );
};
