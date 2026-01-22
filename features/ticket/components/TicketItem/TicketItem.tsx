import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import clsx from "clsx";
import { DetailButton } from "./components/DetailButton";
import { Ticket } from "@/lib/generated/prisma/client";
import { DeleteButton } from "./components/DeleteButton";
import { deleteTicket } from "@/app/tickets/actions/deleteTicket";
import EditButton from "./components/EditButton";
import { toCurrencyFromCent } from "@/app/utils/currency";

type TicketProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

export const TicketItem = async ({ ticket, isDetail = false }: TicketProps) => {
  return (
    <div
      className={clsx("flex w-full gap-x-1", {
        "max-w-[420px]": !isDetail,
        "max-w-[650px]": isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <>{TICKET_ICONS[ticket.status]}</>
            <span>{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("text-sm text-slate-500", {
              "line-through": ticket.status === "DONE",
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">{ticket.deadline}</p>
          <p className="text-sm text-muted-foreground">
            {toCurrencyFromCent(ticket.bounty)} €
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-y-1">
        {!isDetail && <DetailButton ticketId={ticket.id} />}
        <form action={deleteTicket.bind(null, ticket.id)}>
          <DeleteButton />
          <EditButton ticketId={ticket.id} />
        </form>
      </div>
    </div>
  );
};
