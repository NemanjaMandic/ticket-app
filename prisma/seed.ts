import { PrismaClient, TicketStatus } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";

const tickets = [
  {
    title: "Pervi tiket",
    content: "Ovo je opis petog tiketa",
    status: TicketStatus.DONE,
  },
  {
    title: "Sesti tiket",
    content: "Ovo je opis sestog tiketa",
    status: TicketStatus.OPEN,
  },
  {
    title: "Sedmi tiket",
    content: "Ovo je opis sedmog tiketa",
    status: TicketStatus.OPEN,
  },

  {
    title: "Osmi tiket",
    content: "Ovo je opis osmog tiketa",
    status: TicketStatus.IN_PROGRESS,
  },
];

const seed = async () => {
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
