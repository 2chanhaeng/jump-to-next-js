"use server";

import { redirect } from "next/navigation";
import { Prisma, prisma } from "@/prisma";
import { revalidatePath } from "next/cache";

export async function createQuestion(form: FormData) {
  const subject = form.get("subject") as string;
  const content = form.get("content") as string;
  const data: Prisma.QuestionCreateInput = { subject, content };
  const { id } = await prisma.question.create({ data, select: { id: true } });
  revalidatePath("/questions");
  redirect(`/questions/${id}`);
}
