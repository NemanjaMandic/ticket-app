import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/TicketList/TicketList";
import { Spinner } from "@/components/spinner";
import { CardCompact } from "@/features/components/CardCompact";
import { TicketForm } from "@/features/ticket/components/TicketForm";
import { RedirectToast } from "@/components/redirect-toast";
import { getAuth } from "@/features/auth/queries/getAuth";
import { searchParamsCache } from "@/features/ticket/utils";
import { SearchParams } from "nuqs/server";

type TicketsPage = {
  searchParams: Promise<SearchParams>;
};
export default async function TicketsPage({ searchParams }: TicketsPage) {
  const { user } = await getAuth();
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="My Tickets"
        description="All your tickets in one place."
      />
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created."
        content={<TicketForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList
          userId={user?.id}
          searchParams={await searchParamsCache.parse(searchParams)}
        />
      </Suspense>
      <RedirectToast />
    </div>
  );
}
