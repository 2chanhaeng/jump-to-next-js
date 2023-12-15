import { prisma } from "@/prisma";
import { notFound } from "next/navigation";

export default async function QuestionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const question = await prisma.question.findUnique({
    where: { id },
  });
  if (!question) return notFound();
  const { subject, content, createdAt } = question;

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
