"use server";
import { setCookieByKey } from "@/app/actions/cookies";
import { ticketsPath } from "@/app/utils/paths";
import {
  fromErrorToActionState,
  toActionState,
} from "@/features/ticket/components/TicketForm/utils";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthOrRedirect } from "../queries/getAuthOrRedirect";
import { isOwner } from "@/features/auth/utils/isOwner";

export const deleteTicket = async (ticketId: string) => {
  const { user } = await getAuthOrRedirect();
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket || !isOwner(user, ticket)) {
      return toActionState("ERROR", "Not authorized");
    }
    await prisma.ticket.delete({
      where: { id: ticketId },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }
  revalidatePath(ticketsPath);
  await setCookieByKey("toast", "Ticket deleted successfully");
  redirect(ticketsPath);
};
