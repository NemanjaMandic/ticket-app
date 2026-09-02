import { TicketItem } from "../TicketItem";
import { getTickets } from "@/app/(authenticated)/tickets/queries/getTickets";
import { SearchInput } from "@/components/search-input";
import { SearchParams } from "../types";
import { Placeholder } from "@/components/placeholder";

type TicketListProps = {
  userId?: string;
  searchParams: Promise<SearchParams>;
};
export const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId!, await searchParams);

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
      <SearchInput placeholder="Search Tickets..." />
      {tickets.length > 0 ? (
        tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
      ) : (
        <Placeholder label="No tickets found" />
      )}
    </div>
  );
};
