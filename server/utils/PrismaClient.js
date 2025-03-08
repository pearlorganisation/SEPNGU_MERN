import { PrismaClient } from "@prisma/client";

let prismaInstance = null;

function getPrismaInstance() {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
}

export default getPrismaInstance;

// {
//       log: ["query", "info", "warn", "error"], // Enables detailed logging
//     }