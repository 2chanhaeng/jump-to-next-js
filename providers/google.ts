import Google from "next-auth/providers/google";

// https://console.cloud.google.com
export default Google({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_PW,
  authorization: {
    params: {
      prompt: "consent",
      access_type: "offline",
      response_type: "code",
    },
  },
});
