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
import { is } from "zod/v4/locales";
import { TicketMoreMenu } from "@/components/ticket-more-menu";

import { LucideMoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        {isDetail ? (
          <>
            <form action={deleteTicket.bind(null, ticket.id)}>
              <EditButton ticketId={ticket.id} />
              <DeleteButton />
            </form>
            <TicketMoreMenu
              ticket={ticket}
              trigger={
                <Button variant="outline" size="icon">
                  <LucideMoreVertical className="h-4 w-4" />
                </Button>
              }
            />
          </>
        ) : (
          <>
            <DetailButton ticketId={ticket.id} />
            <form action={deleteTicket.bind(null, ticket.id)}>
              <EditButton ticketId={ticket.id} />
            </form>
          </>
        )}
      </div>
    </div>
  );
};
