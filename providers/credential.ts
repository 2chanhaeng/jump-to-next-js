import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/prisma";
import { encrypt } from "@/utils/encrypt";

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
    const { username, password: plain } = credentials;
    if (typeof username !== "string" || typeof plain !== "string") return null;
    const salty = await prisma.credential.findUnique({
      where: { username },
      select: { salt: true },
    });
    if (!salty) return null;
    const { password } = encrypt(plain, salty.salt);
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
