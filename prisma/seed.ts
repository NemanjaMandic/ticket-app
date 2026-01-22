import { TicketStatus } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";

const tickets = [
  {
    title: "Pervi tiket",
    content: "Ovo je opis petog tiketa",
    status: TicketStatus.DONE,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
  },
  {
    title: "Sesti tiket",
    content: "Ovo je opis sestog tiketa",
    status: TicketStatus.OPEN,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
  },
  {
    title: "Sedmi tiket",
    content: "Ovo je opis sedmog tiketa",
    status: TicketStatus.OPEN,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
  },

  {
    title: "Osmi tiket",
    content: "Ovo je opis osmog tiketa",
    status: TicketStatus.IN_PROGRESS,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
  },
];

const seed = async () => {
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
