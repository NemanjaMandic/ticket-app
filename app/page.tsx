import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/TicketList/TicketList";
import { SearchParams } from "nuqs/server";
import { searchParamsCache } from "@/features/ticket/utils";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="All Tickets"
        description="Tickets by everyone at one place."
      />

      <Suspense fallback={<Spinner />}>
        <TicketList
          searchParams={await searchParamsCache.parse(searchParams)}
        />
      </Suspense>
    </div>
  );
}
