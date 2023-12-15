import { PrismaClient } from "@prisma/client";
export { Prisma } from "@prisma/client";
export type { Question, Answer } from "@prisma/client";

export const prisma = new PrismaClient();
