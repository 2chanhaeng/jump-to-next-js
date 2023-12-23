import { destroy } from "@/actions/destroy";
import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function DeleteButton({ id }: { id: string }) {
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
      <button formAction={destroy}>Delete</button>;
    </form>
  );
}
