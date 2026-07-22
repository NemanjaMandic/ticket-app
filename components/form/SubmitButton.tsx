"use client";

import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReactNode } from "react";

type ButtonVariantProps = React.ComponentProps<typeof Button>;

type SubmitButtonProps = {
  label?: string;
  icon?: ReactNode;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
};

export const SubmitButton = ({
  label,
  icon,
  variant = "default",
  size = "default",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {label}
      {pending ? <LucideLoaderCircle className="size-4 animate-spin" /> : icon}
    </Button>
  );
};
