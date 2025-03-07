import { PrismaClient } from "@prisma/client";

let prismaInstance = null;

function getPrismaInstance() {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient({
      log: ["query", "info", "warn", "error"], // Enables detailed logging
    });
  }
  return prismaInstance;
}

export default getPrismaInstance;
