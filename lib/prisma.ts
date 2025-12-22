import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString =
  process.env.DATABASE_URL ?? process.env.DIRECT_URL ?? "";

if (!connectionString) {
  throw new Error("Missing DATABASE_URL or DIRECT_URL");
}

const pool = new Pool({
  connectionString,
  // Supabase typically needs SSL. If your URL already has sslmode=require this is usually fine,
  // but keeping ssl enabled here avoids surprises.
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);

// Next.js dev: avoid creating many clients on hot reload
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["query", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
