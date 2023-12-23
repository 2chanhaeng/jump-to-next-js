"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
