import { ticketPath } from "@/app/utils/paths";
import { Button } from "@/components/ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export const DetailButton = ({ ticketId }: { ticketId: string }) => {
  return (
    <Button asChild variant="outline" size="icon">
      <Link href={ticketPath(ticketId)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );
};
