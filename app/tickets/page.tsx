import Link from "next/link";
import { mockTickets } from "../mockData";
import { ticketCreatePath } from "../utils/paths";

import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/TicketItem";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place." />
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
        {mockTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
      <Link href={ticketCreatePath} className="text-blue-500 underline">
        Kreiraj novi tiket
      </Link>
    </div>
  );
}
