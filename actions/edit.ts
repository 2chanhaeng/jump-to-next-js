"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function edit(form: FormData) {
  const session = await auth();
  if (!session || !session.user) return;
  const userId = session.user.id;
  const id = form.get("id") as string;
  const where = { ownership: { id, userId } };
  const data = {
    subject: form.get("subject") as string,
    content: form.get("content") as string,
  };
  await prisma.question.update({ where, data });
  revalidatePath(`/questions`);
  revalidatePath(`/questions/${id}`);
  return redirect(`/questions/${id}`);
}
