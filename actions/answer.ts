"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { Prisma, prisma } from "@/prisma";

export async function create(id: string, form: FormData) {
  const session = await auth();
  if (!session || !session.user) return;
  const user = { connect: { id: session.user.id } };
  const content = form.get("content") as string;
  const question = { connect: { id } };
  const data: Prisma.AnswerCreateInput = { content, question, user };
  await prisma.answer.create({ data });
  revalidatePath(`/questions/${id}`);
}

export async function destroy(id: string) {
  const session = await auth();
  if (!session?.user) return;
  const userId = session.user.id;
  const where = { ownership: { userId, id } };
  const select = { question: { select: { id: true } } };
  const questionId = await prisma.answer
    .delete({ where, select })
    .then(({ question: { id } }) => id)
    .catch(() => null);
  if (!questionId) return;
  revalidatePath(`/questions/${questionId}`);
}

export async function update(form: FormData) {
  const session = await auth();
  if (!session?.user) return;
  const userId = session.user.id;
  const id = form.get("id") as string;
  const where = { ownership: { id, userId } };
  const data = { content: form.get("content") as string };
  const select = { question: { select: { id: true } } };
  const questionId = await prisma.answer
    .update({ where, data, select })
    .then(({ question: { id } }) => id)
    .catch(() => null);
  if (!questionId) return;
  revalidatePath(`/questions/${questionId}`);
}
