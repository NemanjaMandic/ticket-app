import { TicketItem } from "@/features/ticket/components/TicketItem";
import { getTicket } from "../queries/getTicket";
import { NotFound } from "@/features/components/NotFound/NotFound";
import { RedirectToast } from "@/components/redirect-toast";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  const foundTicket = await getTicket(ticketId);

  if (!foundTicket) {
    return <NotFound />;
  }
  return (
    <>
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={foundTicket} isDetail />
      </div>
      <RedirectToast />
    </>
  );
}
