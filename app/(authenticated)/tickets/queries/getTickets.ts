import { SearchParams } from "@/features/ticket/components/types";
import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId: string | undefined,
  searchParams: SearchParams,
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
