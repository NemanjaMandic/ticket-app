import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/TicketList/TicketList";
import { Spinner } from "@/components/spinner";
import { CardCompact } from "@/features/components/CardCompact";
import { TicketForm } from "@/features/ticket/components/TicketForm";
import { RedirectToast } from "@/components/redirect-toast";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place." />
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created."
        content={<TicketForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
      <RedirectToast />
    </div>
  );
}
