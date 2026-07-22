import { CardCompact } from "@/features/components/CardCompact";
import Link from "next/link";
import { passwordForgotPath, signinPath } from "../utils/paths";
import { SigninForm } from "@/features/auth/components/SigninForm";

export default function SigninPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        className="w-full max-w-[420px] animate-fade-from-top"
        title="Sign Sign"
        description="Sign in to your account"
        content={<SigninForm />}
        footer={
          <div className="flex gap-35">
            <Link
              className="text-sm text-muted-foreground block"
              href={signinPath}
            >
              No account yet?
            </Link>
            <Link
              className="text-sm text-muted-foreground block"
              href={passwordForgotPath}
            >
              Forgot Password?
            </Link>
          </div>
        }
      />
    </div>
  );
}
