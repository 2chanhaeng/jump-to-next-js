import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fillQuestionUser() {
  const questions = await prisma.question.findMany();
  const user = await prisma.user.findFirst();
  if (!user)
    return questions && console.log("임시 데이터로 사용할 유저가 없음");
  for (const question of questions) {
    await prisma.question.update({
      where: { id: question.id },
      data: { user: { connect: { id: user.id } } },
    });
  }
}

async function fillAnswerUser() {
  const answers = await prisma.answer.findMany();
  const user = await prisma.user.findFirst();
  if (user === null)
    return answers && console.log("임시 데이터로 사용할 유저가 없음");
  for (const answer of answers) {
    await prisma.answer.update({
      where: { id: answer.id },
      data: { user: { connect: { id: user.id } } },
    });
  }
}

async function fillUserName() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      accounts: { select: { provider: true, providerAccountId: true } },
    },
  });
  for (const user of users) {
    const credentialProvider = user.accounts.find(
      ({ provider }) => provider === "credentials"
    );
    if (credentialProvider) {
      const { providerAccountId: id } = credentialProvider;
      const credential = await prisma.credential.findUnique({ where: { id } });
      if (credential) {
        await prisma.user.update({
          where: { id: user.id },
          data: { name: credential.username },
        });
      } else {
        await prisma.user.update({
          where: { id: user.id },
          data: { name: id },
        });
      }
    } else {
      await prisma.user.update({
        where: { id: user.id },
        data: { name: user.id },
      });
    }
  }
}

async function main() {
  await fillQuestionUser();
  await fillAnswerUser();
  await fillUserName();
}

main();
