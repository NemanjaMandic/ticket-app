import { ticketPath } from "@/app/utils/paths";
import { Button } from "@/components/ui/button";
import { PropsWithTicketId } from "@/features/types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export const DetailButton = ({ ticketId }: PropsWithTicketId) => {
  return (
    <Button asChild variant="outline" size="icon">
      <Link prefetch href={ticketPath(ticketId)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );
};
