import { notFound } from "next/navigation";
import { Answers } from "@/components/Answers";
import { prisma } from "@/prisma";

export default async function QuestionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const select = {
    subject: true,
    content: true,
    createdAt: true,
    answers: true,
  };
  const question = await prisma.question.findUnique({ where: { id }, select });
  if (!question) return notFound();
  const { subject, content, createdAt, answers } = question;

  return (
    <main>
      <h1>{subject}</h1>
      <p>{content}</p>
      <p>
        {Intl.DateTimeFormat("ko-KR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(createdAt)}
      </p>
      <Answers answers={answers} />
    </main>
  );
}
