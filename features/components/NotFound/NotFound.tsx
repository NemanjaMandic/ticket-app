import { ticketsPath } from "@/app/utils/paths";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NotFound = () => {
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
};
