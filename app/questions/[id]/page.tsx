import { notFound } from "next/navigation";
import { Answers } from "@/components/Answers";
import { prisma } from "@/prisma";
import { EditDeleteButtons } from "@/components/EditDeleteButtons";

export default async function QuestionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const select = {
    subject: true,
    content: true,
    createdAt: true,
    user: { select: { name: true } },
    answers: {
      orderBy: { createdAt: "desc" as const },
      select: {
        id: true,
        content: true,
        createdAt: true,
        userId: true,
        user: { select: { name: true } },
      },
    },
  };
  const question = await prisma.question.findUnique({ where: { id }, select });
  if (!question) return notFound();
  const {
    subject,
    content,
    createdAt,
    answers,
    user: { name },
  } = question;

  return (
    <main>
      <h1>{subject}</h1>
      <p>{content}</p>
      <p>
        <em>By {name}</em>
      </p>
      <p>
        {Intl.DateTimeFormat("ko-KR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(createdAt)}
      </p>
      <EditDeleteButtons id={id} />
      <Answers id={id} answers={answers} />
    </main>
  );
}
