import { TicketItem } from "../TicketItem";
import { getTickets } from "@/app/tickets/queries/getTickets";

export const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
