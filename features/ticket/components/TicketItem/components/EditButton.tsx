import { ticketEditPath } from "@/app/utils/paths";
import { Button } from "@/components/ui/button";
import { PropsWithTicketId } from "@/features/types";
import { LucidePencil } from "lucide-react";
import Link from "next/link";

const EditButton = ({ ticketId }: PropsWithTicketId) => {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketEditPath(ticketId)} prefetch>
        <LucidePencil className="w-4 h-4" />
      </Link>
    </Button>
  );
};

export default EditButton;
