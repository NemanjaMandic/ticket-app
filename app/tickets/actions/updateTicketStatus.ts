"use server";

import { ticketsPath } from "@/app/utils/paths";
import {
  fromErrorToActionState,
  toActionState,
} from "@/features/ticket/components/TicketForm/utils";
import { TicketStatus } from "@/lib/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateTicketStatus = async (
  ticketId: string,
  status: TicketStatus,
) => {
  try {
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { status },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }
  revalidatePath(ticketsPath);
  return toActionState("SUCCESS", "Ticket status updated");
};
