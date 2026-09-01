import { TicketItem } from "@/features/ticket/components/TicketItem";
import { getTicket } from "../queries/getTicket";
import { NotFound } from "@/features/components/NotFound/NotFound";
import { RedirectToast } from "@/components/redirect-toast";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { homePath } from "@/app/utils/paths";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex-1 flex flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath },
          { title: foundTicket.title },
        ]}
      />
      <Separator />
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={foundTicket} isDetail />
      </div>
      <RedirectToast />
    </div>
  );
}
