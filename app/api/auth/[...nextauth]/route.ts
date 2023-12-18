import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import providers from "@/providers";

export const { GET, POST } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers,
}).handlers;
