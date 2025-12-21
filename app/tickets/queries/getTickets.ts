import { mockTickets } from "@/app/mockData";
import { Ticket } from "@/features/types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

  throw new Error("Failed to fetch tickets");
  return new Promise((resolve) => {
    resolve(mockTickets);
  });
};
