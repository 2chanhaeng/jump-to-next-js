import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/prisma";

export default Credentials({
  credentials: {
    username: {
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    password: {
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  },
  async authorize(credentials) {
    const { username, password } = credentials;
    if (typeof username !== "string" || typeof password !== "string")
      return null;
    const credential = await prisma.credential.findUnique({
      where: { credentials: { username, password } },
      select: { id: true },
    });
    if (!credential) return null;
    const account = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          providerAccountId: credential.id,
          provider: "credentials",
        },
      },
      select: { user: { select: { id: true } } },
    });
    return account?.user ?? null;
  },
});
