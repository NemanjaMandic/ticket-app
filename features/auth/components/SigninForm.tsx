"use client";

import { Form } from "@/components/form/form";
import { useActionState } from "react";
import { signIn } from "../actions/signIn";
import { EMPTY_ACTION_STATE } from "@/features/ticket/components/TicketForm/utils";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/features/components/FieldError";
import { SubmitButton } from "@/components/form/SubmitButton";

const SigninForm = () => {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);

  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="email"
        placeholder="Email"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <FieldError actionState={actionState} name="email" />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        defaultValue={actionState.payload?.get("password") as string}
      />
      <FieldError actionState={actionState} name="password" />

      <SubmitButton label="Sign In" />
    </Form>
  );
};

export { SigninForm };
