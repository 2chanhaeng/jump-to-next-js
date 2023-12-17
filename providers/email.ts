import Email from "next-auth/providers/email";

export default Email({
  server: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  from: process.env.MAIL_ADDRESS,
});
