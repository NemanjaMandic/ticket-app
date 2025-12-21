import { ticketPath } from "@/app/utils/paths";
import { Button } from "@/components/ui/button";
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
import { DetailButton } from "./components/DetailButton";

type TicketProps = {
  ticket: Ticket;
  isDetail?: boolean;
};
export const TicketItem = ({ ticket, isDetail = false }: TicketProps) => {
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
      </Card>
      {!isDetail && (
        <div className="flex flex-col gap-y-1">
          <DetailButton ticketId={ticket.id} />
        </div>
      )}
    </div>
  );
};

TicketItem.displayName = "KarINAAAAAA";
