"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Prisma, prisma } from "@/prisma";

export async function create(form: FormData) {
  const session = await auth();
  if (!session || !session.user) return;
  const user = { connect: { id: session.user.id } };
  const subject = form.get("subject") as string;
  const content = form.get("content") as string;
  const data: Prisma.QuestionCreateInput = { subject, content, user };
  const { id } = await prisma.question.create({ data, select: { id: true } });
  revalidatePath("/questions");
  redirect(`/questions/${id}`);
}

export async function update(form: FormData) {
  const session = await auth();
  if (!session || !session.user) return;
  const userId = session.user.id;
  const id = form.get("id") as string;
  const where = { ownership: { id, userId } };
  const subject = form.get("subject") as string;
  const content = form.get("content") as string;
  const data = { subject, content };
  await prisma.question.update({ where, data });
  revalidatePath(`/questions`);
  revalidatePath(`/questions/${id}`);
  return redirect(`/questions/${id}`);
}

export async function destroy(form: FormData) {
  const session = await auth();
  if (!session || !session.user) return;
  const userId = session.user.id;
  const id = form.get("id") as string;
  if (!id) return;
  await prisma.question.delete({ where: { ownership: { userId, id } } });
  revalidatePath("/questions");
  return redirect("/questions");
}
