import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const id = "18cc7998-1321-48f4-b877-e5717c72a0b4";
  await prisma.answer.deleteMany({ where: { questionId: id } });
  const createInputs: Prisma.AnswerCreateInput[] = [
    {
      content: "Next.js 는 Node.js 를 기반으로 만들어진 SSR 프레임워크 입니다.",
      question: { connect: { id } },
    },
    {
      content: "Next.js 는 파일 기반 라우팅, 서버 액션 등의 기능이 있습니다.",
      question: { connect: { id } },
    },
    {
      content: "Next.js 는 React Hooks 등 CSR 기능도 쓸 수 있습니다.",
      question: { connect: { id } },
    },
  ];
  for (const data of createInputs) {
    await prisma.answer.create({ data });
  }
  const question = await prisma.question.findUnique({
    where: { id },
    select: { answers: { select: { content: true } } },
  });
  console.log(question?.answers.map(({ content }) => content).join("\n"));
}

main();
