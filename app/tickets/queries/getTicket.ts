import { mockTickets } from "@/app/mockData";
import { Ticket } from "@/features/types";

export const getTicket = async (id: string): Promise<Ticket> => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

  return new Promise((resolve, reject) => {
    const ticket = mockTickets.find((ticket) => ticket.id === id);
    if (ticket) {
      resolve(ticket);
    } else {
      reject(new Error("Ticket not found"));
    }
  });
};
