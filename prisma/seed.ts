import { TicketStatus } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";

const tickets = [
  {
    title: "Pervi tiket",
    content: "Ovo je opis petog tiketa",
    status: TicketStatus.DONE,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
    userId: "cmt940kds0000hsjdzovuar2t",
  },
  {
    title: "Sesti tiket",
    content: "Ovo je opis sestog tiketa",
    status: TicketStatus.OPEN,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
    userId: "cmt940kds0000hsjdzovuar2t",
  },
  {
    title: "Sedmi tiket",
    content: "Ovo je opis sedmog tiketa",
    status: TicketStatus.OPEN,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
    userId: "cmt940kds0000hsjdzovuar2t",
  },

  {
    title: "Osmi tiket",
    content: "Ovo je opis osmog tiketa",
    status: TicketStatus.IN_PROGRESS,
    bounty: 399,
    deadline: new Date().toISOString().split("T")[0],
    userId: "cmt940kds0000hsjdzovuar2t",
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started ...");
  await prisma.ticket.createMany({
    data: tickets,
  });
  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
