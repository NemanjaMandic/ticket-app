"use server";

import { ticketsPath } from "@/app/utils/paths";
import { isOwner } from "@/features/auth/utils/isOwner";
import {
  fromErrorToActionState,
  toActionState,
} from "@/features/ticket/components/TicketForm/utils";
import { TicketStatus } from "@/lib/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getAuthOrRedirect } from "../queries/getAuthOrRedirect";

export const updateTicketStatus = async (
  ticketId: string,
  status: TicketStatus,
) => {
  const { user } = await getAuthOrRedirect();

  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket || !isOwner(user, ticket)) {
      return toActionState("ERROR", "Not authorized");
    }
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
