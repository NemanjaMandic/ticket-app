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
import { useConfirmDialog } from "@/features/ticket/components/ConfirmDialog";
import { deleteTicket } from "@/app/tickets/actions/deleteTicket";

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactNode;
};

export const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const handleUpdateTicketStatus = async (value: string) => {
    const promise = updateTicketStatus(ticket.id, value as TicketStatus);

    toast.promise(promise, {
      loading: "Updating ticket status...",
    });

    const result = await promise;
    if (result.status === "ERROR") {
      toast.error(result.message);
    } else if (result.status === "SUCCESS") {
      toast.success(result.message);
    }
  };

  const [deleteButton, deleteDialog] = useConfirmDialog({
    title: "Are you sure you want to delete this ticket?",
    description: "This action cannot be undone.",
    action: deleteTicket.bind(null, ticket.id),
    trigger: (
      <DropdownMenuItem>
        <LucideTrash className="mr-2 w-4 h-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    ),
  });
  return (
    <>
      {deleteDialog}
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
          {deleteButton}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
