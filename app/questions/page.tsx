import Link from "next/link";
import { prisma } from "@/prisma";

export default async function QuestionsPage() {
  const questions = await prisma.question.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <h1>Questions</h1>
      <ul>
        {questions.map(({ id, subject }) => (
          <li key={id}>
            <Link href={`/questions/${id}`}>{subject}</Link>
          </li>
        ))}
      </ul>
      <Link href="/questions/new">+ New Question</Link>
    </main>
  );
}
