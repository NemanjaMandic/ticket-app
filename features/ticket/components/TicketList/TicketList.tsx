import { TicketItem } from "../TicketItem";
import { getTickets } from "@/app/(authenticated)/tickets/queries/getTickets";
import { SearchInput } from "@/components/search-input";
import { Placeholder } from "@/components/placeholder";
import { SortSelect } from "@/components/sort-select";
import { ParsedSearchParams } from "../../utils";

type TicketListProps = {
  userId?: string;
  searchParams: ParsedSearchParams;
};
export const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const parsedSearchParams = await searchParams;
  const tickets = await getTickets(userId!, parsedSearchParams);

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
      <div className="w-full max-w-[420px] flex gap-x-2">
        <SearchInput placeholder="Search Tickets..." />
        <SortSelect
          options={[
            {
              sortKey: "createdAt",
              sortValue: "desc",
              label: "Newest",
            },
            {
              sortKey: "createdAt",
              sortValue: "asc",
              label: "Oldest",
            },
            {
              sortKey: "bounty",
              sortValue: "desc",
              label: "Bounty",
            },
          ]}
        />
      </div>
      {tickets.length > 0 ? (
        tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
      ) : (
        <Placeholder label="No tickets found" />
      )}
    </div>
  );
};
