"use server";
import { ticketsPath } from "@/app/utils/paths";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTicket = async (ticketId: string) => {
  await prisma.ticket.delete({
    where: { id: ticketId },
  });
  revalidatePath(ticketsPath);
  redirect(ticketsPath);
};
