"use server";
import { signinPath, ticketPath, ticketsPath } from "@/app/utils/paths";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/features/ticket/components/TicketForm/utils";
import { setCookieByKey } from "@/app/actions/cookies";
import { toCent } from "@/app/utils/currency";
import { getAuth } from "@/features/auth/queries/getAuth";
import { getAuthOrRedirect } from "../queries/getAuthOrRedirect";
import { isOwner } from "@/features/auth/utils/isOwner";

const ticketSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(1024, "Content must be at most 1024 characters"),
  deadline: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Deadline must be in YYYY-MM-DD format"),
  bounty: z.coerce.number().positive("Bounty must be a positive number"),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData,
) => {
  const { user } = await getAuthOrRedirect();
  try {
    if (id) {
      const ticket = await prisma.ticket.findUnique({
        where: { id },
      });

      if (!ticket || !isOwner(user, ticket)) {
        return toActionState("ERROR", "Not authorized");
      }
    }

    const data = ticketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    });

    const dbData = {
      ...data,
      userId: user.id,
      bounty: toCent(data.bounty), // Convert to cents
    };

    await prisma.ticket.upsert({
      where: { id: id || "" },
      update: dbData,
      create: dbData,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath);

  if (id) {
    await setCookieByKey("toast", "Ticket updated successfully");
    redirect(ticketPath(id));
  }

  return toActionState("SUCCESS", "Ticket created");
};
