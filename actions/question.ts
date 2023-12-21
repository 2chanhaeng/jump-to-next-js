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
