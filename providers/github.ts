import Github from "next-auth/providers/github";

// https://github.com/settings/developers
export default Github({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_PW,
  allowDangerousEmailAccountLinking: true,
});
