"use server";
import { ticketsPath } from "@/app/utils/paths";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertTicket = async (
  ticketId: string | undefined,
  formData: FormData
) => {
  const payload = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.upsert({
    where: { id: ticketId || "" },
    update: payload,
    create: payload,
  });

  revalidatePath(ticketsPath);
  if (ticketId) {
    redirect(ticketsPath);
  }
};
