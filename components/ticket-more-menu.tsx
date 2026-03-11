"use client";
import { Ticket, TicketStatus } from "@/lib/generated/prisma/client";
import { LucideTrash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { TICKET_STATUS_LABELS } from "@/features/constants";
import { updateTicketStatus } from "@/app/tickets/actions/updateTicketStatus";
import { toast } from "sonner";

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactNode;
};

export const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  console.log("ticket", ticket);

  const handleUpdateTicketStatus = async (value: string) => {
    const result = await updateTicketStatus(ticket.id, value as TicketStatus);
    if (result.status === "ERROR") {
      toast.error(result.message);
    } else if (result.status === "SUCCESS") {
      toast.success(result.message);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="right" className="w-56">
        <DropdownMenuRadioGroup
          value={ticket.status}
          className="p-3"
          onValueChange={handleUpdateTicketStatus}
        >
          {Object.entries(TICKET_STATUS_LABELS).map(([key, label]) => (
            <DropdownMenuRadioItem key={key} value={key}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LucideTrash className="mr-2 w-4 h-4" />
          <span>Delete Ticket</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
