import { prisma } from "@/prisma";
import { notFound } from "next/navigation";

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
      <p>{createdAt.toString()}</p>
      <p>
        {Intl.DateTimeFormat("ko-KR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(createdAt)}
      </p>
    </main>
  );
}
