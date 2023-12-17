import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userData: Prisma.UserCreateInput = {
    email: "qwe@qwe.qwe",
    name: "User Name",
  };
  const user = await prisma.user.create({ data: userData });
  console.log(user);
  const credentialData: Prisma.CredentialCreateInput = {
    username: "qwe",
    password: "qwe",
  };
  const credential = await prisma.credential.create({ data: credentialData });
  console.log(credential);
  const accountData: Prisma.AccountCreateInput = {
    user: { connect: { id: user.id } },
    provider: "credentials",
    type: "credentials",
    providerAccountId: credential.id,
  };
  const account = await prisma.account.create({ data: accountData });
  console.log(account);
}

main();
