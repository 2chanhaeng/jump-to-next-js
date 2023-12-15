"use server";

import { Prisma, prisma } from "@/prisma";
import { revalidatePath } from "next/cache";

export async function create(id: string, form: FormData) {
  const content = form.get("content") as string;
  const question = { connect: { id } };
  const data: Prisma.AnswerCreateInput = { content, question };
  await prisma.answer.create({ data });
  revalidatePath(`/questions/${id}`);
}
