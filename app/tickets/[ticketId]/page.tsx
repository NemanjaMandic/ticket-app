import Link from "next/link";
import { mockTickets } from "@/app/mockData";
import { ticketCreatePath, ticketsPath } from "@/app/utils/paths";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  const foundTicket = mockTickets.find((ticket) => ticket.id === ticketId);

  if (!foundTicket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath}>Go back to Tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div>
      <h1>{foundTicket.title}</h1>
      <p>{foundTicket.content}</p>
    </div>
  );
}
