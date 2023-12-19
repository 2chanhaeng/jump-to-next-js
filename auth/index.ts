import NextAuth from "next-auth";
import providers from "@/providers";

export const { handlers, signOut, auth } = NextAuth({
  providers,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isLoginNeeded = nextUrl.pathname.startsWith("/questions/new");
      if (isLoginNeeded) return isLoggedIn;
      const isLogoutNeeded =
        nextUrl.pathname.startsWith("/api/auth/signin") ||
        nextUrl.pathname.startsWith("/signup");
      if (isLogoutNeeded && isLoggedIn)
        return Response.redirect(new URL("/", nextUrl));
      return true;
    },
  },
});
