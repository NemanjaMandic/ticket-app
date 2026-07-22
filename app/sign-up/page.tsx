import { CardCompact } from "@/features/components/CardCompact";
import Link from "next/link";
import { signinPath } from "../utils/paths";
import { SignupForm } from "@/features/auth/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        className="w-full max-w-[420px] animate-fade-from-top"
        title="Sign Up"
        description="Create an account to get started"
        content={<SignupForm />}
        footer={
          <Link className="text-sm text-muted-foreground" href={signinPath}>
            Have an account? Sign In now.
          </Link>
        }
      />
    </div>
  );
}
