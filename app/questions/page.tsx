import Link from "next/link";
import { prisma } from "@/prisma";

export default async function QuestionsPage() {
  const questions = await prisma.question.findMany();

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map(({ id, subject }) => (
          <li key={id}>
            <Link href={`/questions/${id}`}>{subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
