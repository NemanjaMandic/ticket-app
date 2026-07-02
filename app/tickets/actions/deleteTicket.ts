"use server";
import { setCookieByKey } from "@/app/actions/cookies";
import { ticketsPath } from "@/app/utils/paths";
import { fromErrorToActionState } from "@/features/ticket/components/TicketForm/utils";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTicket = async (ticketId: string) => {
  try {
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
