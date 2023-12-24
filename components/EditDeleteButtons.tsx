import { destroy } from "@/actions/question";
import { auth } from "@/auth";
import { prisma } from "@/prisma";
import Link from "next/link";

export async function EditDeleteButtons({ id }: { id: string }) {
  const session = await auth();
  if (!session || !session.user) return <></>;
  const userId = session.user.id;
  const ownership = await prisma.question.findUnique({
    where: { ownership: { userId, id } },
  });
  if (!ownership) return <></>;
  return (
    <form>
      <input type="hidden" name="id" value={id} />
      <Link href={`/questions/${id}/edit`}>Edit</Link>
      <button formAction={destroy}>Delete</button>
    </form>
  );
}
