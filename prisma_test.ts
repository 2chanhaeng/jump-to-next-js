import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const id = await create();
  console.log("생성");
  await read(id);
  await update(id);
  console.log("수정");
  await read(id);
  await destroy(id);
  console.log("삭제");
  await read(id);
}

async function create() {
  const { id } = await prisma.question.create({
    data: {
      subject: "제목",
      content: "내용",
    },
  });
  return id;
}

async function read(id: string) {
  try {
    const question = await prisma.question.findUnique({
      where: { id },
    });
    console.log("read: ", question);
  } catch (error) {
    console.log(`id: ${id} not found`);
  }
}

async function update(id: string) {
  await prisma.question.update({
    where: { id },
    data: { subject: "제목2" },
  });
}

async function destroy(id: string) {
  await prisma.question.delete({
    where: { id },
  });
}

main();
