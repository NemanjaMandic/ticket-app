import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/lib/generated/prisma/client";
import { upsertTicket } from "@/app/tickets/actions/upsertTicket";

type TicketFormProps = {
  ticket?: Ticket;
};

export const TicketForm = ({ ticket }: TicketFormProps) => {
  const buttonText = ticket ? "Update Ticket" : "Create Ticket";
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-2"
    >
      <FieldLabel htmlFor="title">Title</FieldLabel>
      <Input type="text" id="title" name="title" defaultValue={ticket?.title} />
      <FieldLabel htmlFor="content ">Content</FieldLabel>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />
      <Button type="submit">{buttonText}</Button>
    </form>
  );
};
