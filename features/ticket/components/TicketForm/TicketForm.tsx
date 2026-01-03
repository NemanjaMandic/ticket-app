"use client";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/lib/generated/prisma/client";
import { upsertTicket } from "@/app/tickets/actions/upsertTicket";
import { useActionState } from "react";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { FieldError } from "@/features/components/FieldError";
import { EMPTY_ACTION_STATE } from "./utils";
import { useActionFeedback } from "@/features/hooks/useActionFeedback";

type TicketFormProps = {
  ticket?: Ticket;
};

export const TicketForm = ({ ticket }: TicketFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );
  const { pending } = useFormStatus();

  const buttonText = ticket ? "Update Ticket" : "Create Ticket";

  useActionFeedback(actionState);

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <FieldLabel htmlFor="title">Title</FieldLabel>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={
          (actionState?.payload?.get("title") as string) || ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />
      <FieldLabel htmlFor="content ">Content</FieldLabel>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState?.payload?.get("content") as string) || ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />
      <Button type="submit" disabled={pending}>
        {pending && (
          <LucideLoaderCircle className="animate-spin mr-2 h-4 w-4" />
        )}
        {buttonText}
      </Button>
    </form>
  );
};
