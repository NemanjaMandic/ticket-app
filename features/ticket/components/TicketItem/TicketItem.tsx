import { ticketPath } from "@/app/utils/paths";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";
import clsx from "clsx";
import { Link } from "lucide-react";

type TicketProps = {
  ticket: Ticket;
};
export const TicketItem = ({ ticket }: TicketProps) => {
  return (
    <Card className="w-full max-w-[420px] border border-slate-300 rounded-md">
      <CardHeader>
        <CardTitle className="flex gap-x-2">
          <>{TICKET_ICONS[ticket.status]}</>
          <span>{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span
          className={clsx("text-sm text-slate-500 line-clamp-3", {
            "line-through": ticket.status === "DONE",
          })}
        >
          {ticket.content}
        </span>
      </CardContent>
      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-blue-500 underline">
          Vidi kartu
        </Link>
      </CardFooter>
    </Card>
  );
};
