import NextAuth from "next-auth";
import providers from "@/providers";

export const { handlers, signOut } = NextAuth({
  providers,
});
