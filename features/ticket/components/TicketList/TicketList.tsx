import { TicketItem } from "../TicketItem";
import { getTickets } from "@/app/tickets/queries/getTickets";

type TicketListProps = {
  userId?: string;
};
export const TicketList = async ({ userId }: TicketListProps) => {
  const tickets = await getTickets(userId!);
  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
