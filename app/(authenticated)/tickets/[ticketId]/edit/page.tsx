import { CardCompact } from "@/features/components/CardCompact";
import { getTicket } from "../../queries/getTicket";
import { NotFound } from "@/features/components/NotFound/NotFound";
import { TicketForm } from "@/features/ticket/components/TicketForm";
import { getAuth } from "@/features/auth/queries/getAuth";
import { isOwner } from "@/features/auth/utils/isOwner";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { homePath, ticketPath } from "@/app/utils/paths";
import { Separator } from "@/components/ui/separator";

type EditTicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function EditTicketPage({ params }: EditTicketPageProps) {
  const { user } = await getAuth();
  const { ticketId } = await params;
  const ticketToEdit = await getTicket(ticketId);

  const isTicketOwner = isOwner(user, ticketToEdit);

  if (!ticketToEdit || !isTicketOwner) {
    return <NotFound />;
  }

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath },
          { title: ticketToEdit.title, href: ticketPath(ticketToEdit.id) },
          { title: "Edit" },
        ]}
      />
      <Separator />
      <div className="flex-1 flex flex-col justify-center items-center">
        <CardCompact
          className="w-full max-w-[420px] animate-fade-from-top"
          title="Edit Ticket"
          description="Edit an existing ticket"
          content={<TicketForm ticket={ticketToEdit} />}
        />
      </div>
    </div>
  );
}
