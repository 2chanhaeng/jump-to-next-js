import Link from "next/link";
import { redirect } from "next/navigation";
import { edit } from "@/actions/edit";
import { auth } from "@/auth";
import { prisma } from "@/prisma";

export default async function QuestionEditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session || !session.user) return redirect(`/questions/${id}`);
  const where = { ownership: { userId: session.user.id, id } };
  const select = { subject: true, content: true };
  const question = await prisma.question.findUnique({ where, select });
  if (!question) return redirect(`/questions/${id}`);
  const { subject, content } = question;
  return (
    <main>
      <Link href={`/questions/${id}`}>{"<"} Cancle Edit</Link>
      <form action={edit}>
        <input type="hidden" name="id" value={id} />
        <label>
          Subject
          <input type="text" defaultValue={subject} name="subject" />
        </label>
        <label>
          Content
          <textarea defaultValue={content} name="content" />
        </label>
        <button type="submit">Edit Question</button>
      </form>
    </main>
  );
}
