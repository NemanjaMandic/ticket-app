import { ParsedSearchParams } from "@/features/ticket/utils";
import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams,
) => {
  const resolvedSearchParams = await searchParams;
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: resolvedSearchParams.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      ...(resolvedSearchParams.sort === "newest" && { createdAt: "desc" }),
      ...(resolvedSearchParams.sort === "bounty" && { bounty: "desc" }),
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
