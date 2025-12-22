import { mockTickets } from "@/app/mockData";
import { Ticket } from "@/features/types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

  console.log("Database URL:", process.env.DATABASE_URL);
  return new Promise((resolve) => {
    resolve(mockTickets);
  });
};
