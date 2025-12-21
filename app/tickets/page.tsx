import Link from "next/link";
import { ticketCreatePath } from "../utils/paths";

import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/TicketList/TicketList";
import { Spinner } from "@/components/spinner";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place." />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
      <Link href={ticketCreatePath} className="text-blue-500 underline">
        Kreiraj novi tiket
      </Link>
    </div>
  );
}
