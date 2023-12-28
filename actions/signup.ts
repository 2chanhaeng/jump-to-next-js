"use server";

import { redirect } from "next/navigation";
import { Prisma, prisma } from "@/prisma";
import { encrypt } from "@/utils/encrypt";

export interface ErrorMessage {
  message: string;
}

export async function signup(_: ErrorMessage, form: FormData) {
  const username = form.get("username") as string;
  const plain = form.get("password") as string;
  const { salt, password } = encrypt(plain);
  const credentialCreateInput = { data: { username, password, salt } };
  const credential = await prisma.credential
    .create(credentialCreateInput)
    .catch(handleUserCreateError);
  if ("message" in credential) return credential;
  const accountCreateInput = {
    data: {
      user: { create: { name: username } },
      provider: "credentials",
      type: "credentials",
      providerAccountId: credential.id,
    },
  };
  await prisma.account.create(accountCreateInput);
  return redirect("/api/auth/signin");
}

function handleUserCreateError(error: unknown): ErrorMessage {
  return {
    message:
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
        ? "username 중복"
        : "알 수 없는 오류",
  };
}
