import { TicketStatus } from "@/features/types";

export const mockTickets = [
  {
    id: "1",
    title: "Prvi tiket",
    content: "Ovo je opis prvog tiketa",
    status: "DONE" as TicketStatus,
  },
  {
    id: "2",
    title: "Drugi tiket",
    content: "Ovo je opis drugog tiketa",
    status: "OPEN" as TicketStatus,
  },
  {
    id: "3",
    title: "Treci tiket",
    content: "Ovo je opis treceg tiketa",
    status: "OPEN" as TicketStatus,
  },

  {
    id: "4",
    title: "Cetvrti tiket",
    content: "Ovo je opis cetvrtog tiketa",
    status: "IN_PROGRESS" as TicketStatus,
  },
];
