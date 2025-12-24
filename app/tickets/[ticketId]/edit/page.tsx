import { CardCompact } from "@/features/components/CardCompact";
import { getTicket } from "../../queries/getTicket";
import { NotFound } from "@/features/components/NotFound/NotFound";
import { TicketForm } from "@/features/ticket/components/TicketForm";

type EditTicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function EditTicketPage({ params }: EditTicketPageProps) {
  const { ticketId } = await params;
  const ticketToEdit = await getTicket(ticketId);

  if (!ticketToEdit) {
    return <NotFound />;
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        className="w-full max-w-[420px] animate-fade-from-top"
        title="Edit Ticket"
        description="Edit an existing ticket"
        content={<TicketForm ticket={ticketToEdit} />}
      />
    </div>
  );
}
