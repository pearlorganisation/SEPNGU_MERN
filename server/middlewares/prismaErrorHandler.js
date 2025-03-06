import Prisma from "@prisma/client";

export const handlePrismaError = (error) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002": // Unique constraint failed
        return {
          status: 400,
          message: "Duplicate entry, unique constraint failed.",
        };
      case "P2003": // Foreign key constraint failed
        return { status: 400, message: "Invalid foreign key reference." };
      case "P2025": // Record not found
        return { status: 404, message: "Record not found." };
      default:
        return { status: 500, message: "Database error occurred." };
    }
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    return { status: 400, message: "Validation error. Check input data." };
  } else if (error instanceof Prisma.PrismaClientRustPanicError) {
    return { status: 500, message: "Unexpected database error occurred." };
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    return { status: 500, message: "Database initialization error." };
  } else {
    return { status: 500, message: "An unknown error occurred." };
  }
};
