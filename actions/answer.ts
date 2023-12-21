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
