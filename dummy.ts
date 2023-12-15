import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createInputs: Prisma.QuestionCreateInput[] = [
    { subject: "Next.js가 뭔가요?", content: "Next.js에 대해 알고 싶습니다." },
    { subject: "SSR이 뭔가요?", content: "어디에 좋나요?" },
    { subject: "React 에 대해 알려주세요", content: "어디서 배울 수 있나요?" },
  ];
  const queries = createInputs.map((data) => prisma.question.create({ data }));
  await Promise.all(queries);
  const questions = await prisma.question.findMany();
  console.log(questions);
}

main();
